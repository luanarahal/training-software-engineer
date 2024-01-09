animals = ['gato', 'cachorro', 'peixe', 'pássaro']

animal_with_more_than_4_characters = filter(lambda animal: len(animal) > 4, animals)

print(list(animal_with_more_than_4_characters))
