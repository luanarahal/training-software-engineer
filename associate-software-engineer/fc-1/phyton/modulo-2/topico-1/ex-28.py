from mymock import estudantes_mock
from functools import reduce

older_student = reduce(lambda oldest_student, student: oldest_student if oldest_student['idade'] > student['idade'] else student, estudantes_mock)

print(older_student)
