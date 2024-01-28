# Migration:

Migration is necessary when altering models (database entry defintions) in the backend.
Migration needs to be first applied on the specific app by running:

1. `$ python manage.py makemigrations <app>`

Then, check the SQL that will be generated:

2. `$ python manage.py sqlmigrate polls <migration_id>`

Then, execute the migration:

3. `$ python manage.py migrate`

**Steps from tutorial**:

- Change your models (in `models.py`).
- Run `python manage.py makemigrations` to create migrations for those changes
- Run `python manage.py migrate` to apply those changes to the database.
