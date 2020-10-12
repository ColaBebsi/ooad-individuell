class Gender {
    constructor(name) {
        this.name = name;
        this.gender = "default";
    }

    say() {
        console.log(`My name is ${this.name} and identify myself as ${this.gender} 🐱‍🏍`);
    }
}

class Genderfluid extends Gender {
    gender = "Genderfluid";
    constructor(name) {
        super(name);
    }
}

class NonBinary extends Gender {
    gender = "Non-binary";
    constructor(name) {
        super(name);
    }
}

class Transgender extends Gender {
    gender = "Transgender";
    constructor(name) {
        super(name);
    }
}

class Intergender extends Gender {
    gender = "Intergender";
    constructor(name) {
        super(name);
    }
}

class Demiboy extends Gender {
    gender = "Demiboy";
    constructor(name) {
        super(name);
    }
}

function GenderFactory() {
    this.create = (name, gender) => {
        switch (gender) {
            case 0:
                return new Genderfluid(name);
                break;
            case 1:
                return new NonBinary(name);
                break;
            case 2:
                return new Transgender(name);
                break;
            case 3:
                return new Intergender(name);
                break;
            case 4:
                return new Demiboy(name);
                break;
        }
    }
}

const gender = new Gender();
const genderFactory = new GenderFactory();
const genders = [];

genders.push(genderFactory.create("Adorable", 0));
genders.push(genderFactory.create("Zoeigh", 1));
genders.push(genderFactory.create("Emperor", 3));
genders.push(genderFactory.create("Mylz", 4));
genders.push(genderFactory.create("Aviary", 2));
genders.push(genderFactory.create("Galaxy", 4));


genders.forEach(gender => gender.say.call(gender));
