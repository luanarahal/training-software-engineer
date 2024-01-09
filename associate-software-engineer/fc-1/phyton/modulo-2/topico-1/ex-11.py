from functools import reduce 

words = ['Olá', ' ', 'mundo', '!']

concated_string = reduce(lambda accumulator, string: accumulator + string, words)

print(concated_string)
