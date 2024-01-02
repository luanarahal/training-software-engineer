from mymock import estudantes_mock

names_of_students = list(map(lambda student: student['nome'], estudantes_mock))

print(names_of_students)
