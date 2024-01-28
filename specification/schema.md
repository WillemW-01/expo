# Table Schema For All Users

##`users`

| Field    | Type   | Description                                                      |
| -------- | ------ | ---------------------------------------------------------------- |
| username | string | (no longer than 30 characters)                                   |
| email    | string | (must check for email format)                                    |
| password | string | (no longer than 80 characters) (must check strength of password) |
| height   | float  | height of the user (optional)                                    |

##`measurements`

| Field         | Type | Description                                                      |
| ------------- | ---- | ---------------------------------------------------------------- |
| measurementID | type | primary key of this table, refers to a specific measurement done |
| user          | type | foreign key of userId that made the measurement                  |
| type          | type | type of measurement                                              |
| time          | type | time when measurement was made (date can be extracted)           |
| unit          | type | unit used for measurement                                        |
| value         | type | value of measurement                                             |

##`exercises`

| Field       | Type | Description                                                         |
| ----------- | ---- | ------------------------------------------------------------------- |
| exerciseId  | type | primary key of table and for each exercise                          |
| name        | type | name of exercise                                                    |
| focus       | type | type of focus of exercise: duration, weight                         |
| class       | type | machine, dumbbell, barbell, cable, bodyweight, weighted, etc        |
| description | type | short description of exercise                                       |
| cues        | type | short cues to help perform the movement correctly                   |
| tips        | type | tips on how to improve performance or other metrics of the movement |
| primary     | type | primary muscle groups                                               |
| secondary   | type | secondary muscle groups                                             |
| img         | type | optional image to display exercise execution                        |

##`templates`

| Field         | Type | Description                                 |
| ------------- | ---- | ------------------------------------------- |
| templateId    | type | primary key of this workout template        |
| name          | type | string name of the template (max 30 chars)  |
| description   | type | optional string description of the template |
| lastPerformed | type | last date this template was used            |

##`workouts`

| Field      | Type | Description                                                |
| ---------- | ---- | ---------------------------------------------------------- |
| workoutId  | type | primary key of the workout entry                           |
| user       | type | foreign key of user                                        |
| startTime  | type | time when workout was inialized                            |
| endTime    | type | time when workout was completed                            |
| duration   | type | calculated field of endtime - startime (in minutes)        |
| templateId | type | foreign key of template object if it was used for creation |

##`workouts-exercises`

| Field           | Type | Description                       |
| --------------- | ---- | --------------------------------- |
| workoutId       | type | foreign key from workouts         |
| exerciseId type | type | foreign key to exercise table     |
| sets            | type | number of sets performed          |
| reps            | type | list of reps for each set         |
| weights         | type | list of weights for each set      |
| notes           | type | optional notes about the exercise |

##`template-exercises`

| Field      | Type | Description                                                                  |
| ---------- | ---- | ---------------------------------------------------------------------------- |
| id         | type | primary key, allows for multiple exercises of same name in the same template |
| templateId | type | foreign key of template                                                      |
| exerciseId | type | foreign key of exercise                                                      |
| sets       | type | number of sets                                                               |
| superSetId | type | id of the superset this exercise belongs to                                  |
