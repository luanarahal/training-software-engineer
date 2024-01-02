from functools import reduce 

words = ['Olá', ' ', 'mundo', '!']

concatedString = reduce(lambda accumulator, string: accumulator + string, words)

print(concatedString)
