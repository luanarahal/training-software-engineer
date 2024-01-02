from functools import reduce

numbers = [1, 2, 3, 4, 5]

sum_values = reduce(lambda accumulator, number: accumulator + number, numbers)

print(sum_values)
