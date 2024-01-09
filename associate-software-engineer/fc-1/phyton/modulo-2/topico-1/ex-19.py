from mymock import estudantes_mock

students_under_21 = list(filter(lambda student: student['idade'] < 21, estudantes_mock))

print(list(students_under_21))
