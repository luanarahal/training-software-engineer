from mymock import estudantes_mock

has_students_with_22 = any(student['idade'] == 22 for student in estudantes_mock)

print(has_students_with_22)
