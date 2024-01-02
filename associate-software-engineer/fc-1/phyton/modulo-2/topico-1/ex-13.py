animals = ['gato', 'abelha', 'cachorro']

animalStartingWithA = next((animal for animal in animals if animal[0] == 'a'))

print(animalStartingWithA)
