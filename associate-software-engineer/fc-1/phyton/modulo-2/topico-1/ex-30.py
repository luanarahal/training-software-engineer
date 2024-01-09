from mymock import estudantes_mock

filtering_students_above_20 = list(filter(lambda student: student['idade'] > 30, estudantes_mock))

counting_students_above_20 = len(filtering_students_above_20)

print(counting_students_above_20)
