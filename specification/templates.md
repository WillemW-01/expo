# Exercises

## Schema

| Field         | Type | Description                                 |
| ------------- | ---- | ------------------------------------------- |
| templateId    | type | primary key of this workout template        |
| name          | type | string name of the template (max 30 chars)  |
| description   | type | optional string description of the template |
| lastPerformed | type | last date this template was used            |

```python
template_id = models.AutoField(primary_key=True, verbose_name="id")
name = models.CharField(max_length=30)
description = models.TextField()
lastPerformed = models.DateTimeField(null=True)
exercises = models.ManyToManyField(Exercises)
```

## Example Exercises

```sql
INSERT INTO gym_templates (name, description) VALUES
('Push', 'General-purpose push day'),
('Pull', 'General-purpose pull day'),
('Legs', 'General-purpose legs day');

INSERT INTO gym_templates_exercises (templates_id, exercises_id) VALUES
(28, 4),
(28, 12),
(28, 11),
(28, 35),
(28, 13),
(28, 24),
(28, 30),
(29, 37),
(29, 17),
(29, 9),
(29, 20),
(29, 7),
(29, 14),
(29, 33),
(30, 5),
(30, 10),
(30, 27),
(30, 22),
(30, 31),
(30, 6),
(30, 26);
```
