## General User Profile Specifications

The user of the app must first be authenticated.

The user must first be validated against the database, and if the user does not exist, they must be able to create a user profile. This profile must contain the following:

- user name (no longer than 30 characters)
- user email (must check for email format)
- user password (no longer than 80 characters) (must check strength of password)
- all other user data described in `user-tables` must be generated as empty

After authentication, the user must be able to sign in to their account and access the app.

If the user launches the app the next time, it must redo these steps, but must focus on being able to start a workout as soon as possible.

User data must be stored locally, and online as well. Locally so that the data access can be fast, and online if new data was published on another device (and so that data transfer can be easily achieved if a new device will be used).
