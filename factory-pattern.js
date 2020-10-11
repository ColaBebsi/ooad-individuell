class Boy {
    constructor(name) {
        this.name = name;
        this.gender = "boy";
    }
}

class Girl {
    constructor(name) {
        this.name = name;
        this.gender = "girl";
    }
}

function GenderFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 0:
                return new Boy(name);
                break;
            case 1:
                return new Girl(name);
                break;
        }
    }
}

function say() {
    console.log(`My name is ${this.name} and I'm a ${this.gender}!`);
}

const genderFactory = new GenderFactory();
const genders = [];

genders.push(genderFactory.create("Hamza", 0));
genders.push(genderFactory.create("Maria", 1));
genders.push(genderFactory.create("Azlan", 0));
genders.push(genderFactory.create("Shirin", 1));
genders.push(genderFactory.create("Liyana", 1));
genders.push(genderFactory.create("Mustafa", 0));
genders.push(genderFactory.create("Malek", 0));

genders.forEach(gender => say.call(gender));