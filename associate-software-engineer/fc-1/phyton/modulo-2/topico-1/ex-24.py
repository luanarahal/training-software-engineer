from mymock import estudantes_mock

students_name_starting_with_a = list(filter(lambda student: student['nome'][0] == "A", estudantes_mock))

print(students_name_starting_with_a)
