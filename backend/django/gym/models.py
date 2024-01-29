from django.db import models

MEASURE_TYPES = [
    "weight",
    "bodyfat",
    "muscle mass",
    "bicep",
    "forearm",
    "waist",
]

UNIT_TYPES = [
    ("cm", "centimeters"),
    ("in", "inches"),
    ("m", "meters"),
    ("%", "percentage"),
    ("kg", "kilograms"),
    ("g", "grams"),
]

MAX_REPS = 99
MAX_SETS = 15


# Create your models here.
class User(models.Model):
    user_id = models.AutoField(primary_key=True, verbose_name="id")
    email = models.EmailField(default="")
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=80)
    height = models.FloatField(null=True)

    def __str__(self):
        return self.username


class Measurements(models.Model):
    measurement_id = models.AutoField(primary_key=True, verbose_name="id")
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, default=0)
    measurement_type = models.TextField(MEASURE_TYPES)
    time = models.DateTimeField()
    unit = models.CharField(choices=UNIT_TYPES, max_length=3)
    value = models.FloatField()


class Exercises(models.Model):
    FOCUSES = [("D", "Duration"), ("R", "Reps"), ("W", "Weight")]
    TYPES = [
        ("M", "Machine"),
        ("D", "Dumbbell"),
        ("B", "Barbell"),
        ("C", "Cable"),
        ("CS", "Cable Single"),
        ("B", "Bodyweight"),
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


class Templates(models.Model):
    template_id = models.AutoField(primary_key=True, verbose_name="id")
    name = models.CharField(max_length=30)
    description = models.TextField()
    lastPerformed = models.DateTimeField(null=True)
    exercises = models.ManyToManyField(Exercises)


class Workouts(models.Model):
    workout_id = models.AutoField(primary_key=True, verbose_name="id")
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    duration = models.IntegerField()
    template_id = models.ForeignKey(Templates, null=True, on_delete=models.SET_NULL)


class WorkoutsExercises(models.Model):
    workout_id = models.ForeignKey(to="Workouts", on_delete=models.CASCADE)
    exercise_id = models.ForeignKey(to="Exercises", on_delete=models.CASCADE)
    sets = models.ValueRange(1, MAX_SETS)
    reps = models.CharField(max_length=(3 * MAX_SETS))
    weights = models.CharField(max_length=(4 * MAX_SETS))
    duration = models.IntegerField(null=True)  # seconds
    notes = models.TextField()

    def get_reps(self) -> list[int]:
        return [int(a) for a in self.reps.split(" ")]

    def get_weights(self) -> list[int]:
        return [int(a) for a in self.weights.split(" ")]


# class TemplateExercises(models.Model):
#     template_id = models.ForeignKey(Templates, on_delete=models.CASCADE)
#     exercise_id = models.ForeignKey(Exercises, on_delete=models.CASCADE)
#     sets = models.ValueRange(0, MAX_SETS)
#     superset_id = models.IntegerField(null=True)
