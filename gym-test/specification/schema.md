# Table Schema For All Users

**workouts**
| Col | Type | Description |
| - | - | - |
| workoutId | type | primary key of the workout entry |
| user | type | foreign key of user |
| startTime | type | time when workout was inialized |
| endTime | type | time when workout was completed |
| duration | type | calculated field of endtime - startime (in minutes) |
| templateId | type | foreign key of template object if it was used for creation |

**exercises**
| Col | Type | Description |
| - | - | - |
| exerciseId | type | primary key of table and for each exercise |
| name | type | name of exercise |
| description | type | short description of exercise |
| cues | type | short cues to help perform the movement correctly |
| tips | type | tips on how to improve performance or other metrics of the movement |
| primary | type | primary muscle groups this exercise acts upon |
| secondary | type | secondary muscle groups this exercise acts upon |
| image | type | optional image to display exercise execution |

**workouts-exercises**
| Col | Type | Description |
| - | - | - |
| workoutId | type | foreign key from workouts |
| exerciseId type | foreign key to exercise table |
| sets | type | number of sets performed |
| reps | type | list of reps for each set |
| weights | type | list of weights for each set |
| notes | type | optional notes about the exercise |

**templates**
| Col | Type | Description |
| - | - | - |
| templateId | type | primary key of this workout template |
| name | type | string name of the template (max 30 chars) |
| description | type | optional string description of the template |
| lastPerformed | type | last date this template was used |

**template-exercises**
| Col | Type | Description |
| - | - | - |
| id | type | primary key, allows for multiple exercises of same name in the same template |
| templateId | type | foreign key of template |
| exerciseId | type | foreign key of exercise |
| sets | type | number of sets |
| superSetId | type | id of the superset this exercise belongs to |

**measurements**
| Col | Type | Description |
| - | - | - |
| measurementID | type | primary key of this table, refers to a specific measurement done |
| user | type | foreign key of userId that made the measurement |
| type | type | type of measurement |
| time | type | time when measurement was made (date can be extracted) |
| unit | type | unit used for measurement |
| value | type | value of measurement |
