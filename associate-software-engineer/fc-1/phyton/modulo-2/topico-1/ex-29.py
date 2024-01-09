from mymock import estudantes_mock

filtered_students = filter(lambda student: len(student['nome']) > 3, estudantes_mock)

students_name_with_more_than_three_characters = list(map(lambda student: f"{student['nome']} -> {student['idade']}", filtered_students))

print(students_name_with_more_than_three_characters)
