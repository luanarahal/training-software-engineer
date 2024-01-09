from mymock import estudantes_mock

list_students_by_name_and_age = list(map(lambda student: f"{student['nome']} -> {student['idade']}", estudantes_mock))

print(list_students_by_name_and_age)
