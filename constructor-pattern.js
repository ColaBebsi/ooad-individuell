class Phone {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    say() {
        console.log(`Brand: ${this.brand}, Color: ${this.color}`);
    }
}

const phone1 = new Phone('iPhone X', 'Black');
const phone2 = new Phone('Samsung S10', 'Purple');

phone1.say();
phone2.say();