from mymock import estudantes_mock

first_student_above_21 = next(student for student in estudantes_mock if student['idade'] > 20)

print(first_student_above_21)
