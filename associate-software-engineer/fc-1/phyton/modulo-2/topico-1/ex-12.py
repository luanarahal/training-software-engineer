numbers = [1, 5, 8, 12, 16, 3]

firstNumberGreaterThan10 = next((number for number in numbers if number > 10), None)

print(firstNumberGreaterThan10)
