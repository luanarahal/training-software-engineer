from mymock import estudantes_mock

sorted_students_by_age = list(sorted(estudantes_mock, key=lambda student: student['idade'], reverse=True))

print(sorted_students_by_age)
