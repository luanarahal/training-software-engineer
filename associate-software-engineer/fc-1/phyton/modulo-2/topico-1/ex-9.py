animals = ['gato', 'cachorro', 'peixe', 'pássaro']

animalWithMoreThan4Characters = filter(lambda animal: len(animal) > 4, animals)

print(list(animalWithMoreThan4Characters))
