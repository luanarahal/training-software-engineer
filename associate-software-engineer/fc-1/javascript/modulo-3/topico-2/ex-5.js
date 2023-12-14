function buildProfile(name, age, ...hobbies) {
    return console.log(`Nome: ${name} -> Idade: ${age} -> Hobbies: ${hobbies}`);
}

const hobbies = ["pedalar", "viajar", "ir no cinema"];
buildProfile("Luana", 27, ...hobbies);
