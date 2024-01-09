numbers = [1, 2, 3, 4, 5, 6]

odd_numbers = filter(lambda number: number % 2 != 0, numbers)

print(list(odd_numbers))
