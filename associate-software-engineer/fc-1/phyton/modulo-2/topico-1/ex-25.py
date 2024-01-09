from mymock import estudantes_mock

sorted_students_alphabetically = list(sorted(estudantes_mock, key=lambda student: student['nome']))

print(sorted_students_alphabetically)
