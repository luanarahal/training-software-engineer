numbers = [1, 5, 8, 12, 16, 3]

first_number_greater_than_10 = next((number for number in numbers if number > 10), None)

print(first_number_greater_than_10)
