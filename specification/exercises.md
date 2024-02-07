# Exercises

## Schema

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

```python
FOCUSES = [("D", "Duration"), ("R", "Reps"), ("W", "Weight")]
TYPES = [
    ("M", "Machine"),
    ("D", "Dumbbell"),
    ("K", "Kettlebell"),
    ("B", "Barbell"),
    ("C", "Cable"),
    ("CS", "Cable Single"),
    ("BW", "Bodyweight"),
    ("WB", "Weighted Bodyweight"),
]

exercise_id = models.AutoField(primary_key=True, verbose_name="id")
name = models.CharField(max_length=50)
focus = models.CharField(choices=FOCUSES, max_length=1, default="W")
exercise_type = models.CharField(choices=TYPES, max_length=3)
description = models.TextField(null=True)
cues = models.TextField(null=True)
tips = models.TextField(null=True)
primary = models.CharField(max_length=35, null=True)
secondary = models.CharField(max_length=35, null=True)
rpe = models.ValueRange(0, 10)
img = models.ImageField(null=True)
```

## Example Exercises

```sql
INSERT INTO gym_exercises (name, focus, exercise_type, description, primary_mover, secondary_mover) VALUES
('Pull Up', 'R', 'BW', 'Get massive lats with pulling yourself up. Everyone should be able to do this one!', 'Back', 'Deltoids');
('Push Up','R', 'BW', 'Great starter exercise. Everyone must be able to do this one!', 'Chest' ,'Deltoids');
INSERT INTO gym_exercises (name, focus, exercise_type, description, primary_mover, secondary_mover) VALUES
('Deadlift (Barbell)', 'W', 'B', 'Powerful exercise', 'Legs', 'Back'),
('Lying Leg Curl', 'W', 'M', 'Cry while doing it!', 'Hamstrings', null),
('Preacher Curl (Cable Single)', 'W', 'CS', 'Do those damn curls!', 'Biceps', 'Deltoids'),
('Tricep Extension (Cable Single)', 'W', 'CS', 'They hurt!', 'Triceps', 'Rear Deltoids'),
('Lat Pulldown (Cable)', 'W', 'C', 'Been doing this all the time', 'Lats', 'Forearms');
('Farmers Carry', 'W', 'D', 'Carry those groceries!', 'Forearms', 'Core');
INSERT INTO gym_exercises (name, focus, exercise_type, description, primary_mover, secondary_mover) VALUES
('Bench Press (Barbell)', 'W', 'B', 'Enter a description here', 'Chest', 'Deltoids'),
('Bench Press (Dumbbell)', 'W', 'D', 'Enter a description here', 'Chest', 'Deltoids'),
('Chest Press (Machine)','W', 'M', 'Enter a description here', 'Chest', 'Deltoids'),
('Skullcrusher (Barbell)', 'W','B', 'Enter a description here', 'Triceps', 'Forearms'),
('Skullcrusher (Cable)', 'W', 'C', 'Enter a description here', 'Triceps', 'Forearms'),
('Horizontal Row (Machine)', 'W', 'M', 'Enter a description here', 'Lats', 'Biceps'),
('Horizontal Row (Cable)', 'W', 'C', 'Enter a description here', 'Lats', 'Biceps'),
('Horizontal Row (Cable Single)', 'W', 'CS', 'Enter a description here', 'Lats', 'Biceps'),
('Lateral Raise (Cable Single)', 'W', 'CS', 'Enter a description here', 'Deltoids', 'Traps'),
('Lateral Raise (Dumbbell)', 'W', 'D', 'Enter a description here', 'Deltoids', 'Traps'),
('Leg Extension (Machine)', 'W', 'M', 'Enter a description here', 'Quads', 'Hamstrings'),
('Kettlebell March', 'R', 'K', 'Enter a description here', 'Abdominals', 'Obliques'),
('Seated Overhead Press (Dumbbell)', 'W', 'D', 'Enter a description here', 'Deltoids', 'Chest'),
('Overhead Press (Dumbbell)', 'W', 'D', 'Enter a description here', 'Deltoids', 'Chest'),
('Overhead Press (Barbell)', 'W', 'B', 'Enter a description here', 'Deltoids', 'Chest'),
('Squat (Barbell)', 'W', 'B', 'Enter a description here', 'Quads', 'Hamstrings'),
('Front Squat (Barbell)', 'W', 'B', 'Enter a description here', 'Quads', 'Core'),
('T Bar Row', 'W', 'M', 'Enter a description here', 'Lats', 'Rhomboids'),
('Preacher Curl (Barbell)', 'W', 'B', 'Enter a description here', 'Biceps', 'Deltoids'),
('Diamond Push Up', 'R', 'BW', 'Enter a description here', 'Chest', 'Triceps'),
('Leg Press', 'W', 'M', 'Enter a description here', 'Quads', 'Hamstrings'),
('Lat Pulldown (Cable Single)', 'W', 'CS', 'Enter a description here', 'Lats', 'Forearms'),
('Triceps Extension (Cable)', 'W', 'C', 'Enter a description here', 'Triceps', 'Forearms'),
('Triceps Extension (Rope)', 'W', 'C', 'Enter a description here', 'Triceps', 'Forearms'),
('Cable Cross-overs', 'W', 'C', 'Enter a description here', 'Chest', 'Deltoids'),
('Reverse Fly', 'W', 'C', 'Enter a description here', 'Rear Deltoids', 'Traps'),
('Face Pull', 'W', 'C', 'Enter a description here', 'Rear Deltoids', 'Traps');
```
