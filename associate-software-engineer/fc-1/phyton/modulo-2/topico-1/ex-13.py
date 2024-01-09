animals = ['gato', 'abelha', 'cachorro']

animal_starting_with_a = next((animal for animal in animals if animal[0] == 'a'))

print(animal_starting_with_a)
