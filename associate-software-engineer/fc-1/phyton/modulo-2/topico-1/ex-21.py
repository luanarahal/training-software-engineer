from mymock import estudantes_mock

every_students_above_19 = all(student['idade'] > 19 for student in estudantes_mock)

print(every_students_above_19)
