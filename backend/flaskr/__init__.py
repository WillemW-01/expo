import json
import os

from flask import Flask, abort, jsonify, make_response, request
from flask_cors import CORS
from flaskr.db import get_db


def request_data_valid(request: dict[str], keys):
    try:
        for key in keys:
            print(f"Checking key {key}")
            if key not in request.keys() or (
                key in request.keys() and request[key] == ""
            ):
                return False
        return True
    except:
        print("Exception")
        return False


def parse_data(request):
    return json.loads(request.data.decode("utf-8"))


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY="dev",
        DATABASE=os.path.join(app.instance_path, "../gymdb.sqlite"),
    )

    CORS(app)

    if test_config is None:
        app.config.from_pyfile("config.py", silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route("/gym/login", methods=["POST", "GET"])
    def login():
        try:
            db = get_db()
            data = json.loads(request.data.decode("utf-8"))
            if request_data_valid(data, ["username", "password"]):
                users = db.execute("SELECT * FROM gym_user").fetchall()
                for user in users:
                    if user["username"] == data["username"]:
                        db.close()
                        return make_response("Success!", 200)
                else:
                    db.close()
                    return make_response("User does not exist", 409)
            else:
                db.close()
                return make_response("Invalid data", 400)
        except Exception as e:
            return f"Error: {e}"

    @app.route("/gym/register", methods=["GET", "POST"])
    def register():
        db = get_db()
        data = parse_data(request)
        if request_data_valid(data, ["username", "email", "password"]):
            try:
                db.execute(
                    "INSERT INTO gym_user (username, email, password) values (?, ?, ?)",
                    (data["username"], data["email"], data["password"]),
                )
                db.commit()
                db.close()
            except Exception as e:
                print(e)
                db.close()
                return make_response("Username already taken.", 409)
        else:
            db.close()
            return make_response("Data invalid.", 400)

        db.close()
        return make_response("Success!", 200)

    @app.route("/gym/new-template", methods=["POST"])
    def create_new_template():
        print("got to here")
        db = get_db()
        data = parse_data(request)
        if request_data_valid(data, ["name", "description"]):
            try:
                print(data)
                db.execute(
                    "INSERT INTO gym_templates (name, description) values (?, ?)",
                    (data["name"], data["description"]),
                )
                db.commit()

                template = db.execute(
                    "SELECT * from gym_templates ORDER BY template_id DESC LIMIT 1"
                ).fetchone()
                t_id = template["template_id"]

                # Fetch the exercises and adds them to the linking table
                for exercise in data["selection"]:
                    print("looking for ", exercise)
                    ex = db.execute(
                        "SELECT * from gym_exercises WHERE name = ? ", (exercise,)
                    ).fetchone()
                    print(ex)
                    ex_id = ex["exercise_id"]
                    print(ex_id)

                    db.execute(
                        "INSERT INTO gym_templates_exercises (templates_id, exercises_id) VALUES (?, ?) ",
                        (t_id, ex_id),
                    )
                    db.commit()

                db.close()
            except Exception as e:
                print(e)
                db.close()
                return make_response("Template already exists already taken.", 409)

        db.close()
        return make_response("Success!", 200)

    @app.route("/gym/get-templates")
    def get_templates():
        db = get_db()
        templates = db.execute("SELECT * FROM gym_templates").fetchall()
        templates = [dict(row) for row in templates]
        templates = json.dumps(templates)
        print("Sending data")
        return jsonify(templates)

    return app
