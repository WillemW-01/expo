import json
import os

from flask import Flask, abort, make_response, request
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
        data = json.loads(request.data.decode("utf-8"))
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

    return app
