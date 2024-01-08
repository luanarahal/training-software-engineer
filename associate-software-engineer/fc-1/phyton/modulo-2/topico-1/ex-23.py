from mymock import estudantes_mock
from functools import reduce

sum_age_students = reduce(lambda accumulator, student: accumulator + student['idade'], estudantes_mock, 0)
average_age_students = sum_age_students / len(estudantes_mock)

print(f'A soma das idades dos estudantes é de: {sum_age_students}')
print(f'A média de idade entre os estudantes é de: {average_age_students}')
