function createProfile(profile) {
    profile.name = "Luana";
    profile.age = 27;
    profile.gender = "Feminino";
    return profile;
}

const profile = new Object();

console.log(createProfile(profile));
