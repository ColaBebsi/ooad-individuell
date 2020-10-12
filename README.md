# WEBB19–OOAD–Individuell Inlämningsuppgift

### För Godkänd (G)

## 1. Välj 3 valfria designmönster från boken ”Learning JavaScript Design Patterns” https://addyosmani.com/resources/essentialjsdesignpatterns/book/

1. Constructor Pattern
2. Facade Pattern
3. Factory Pattern

## 2. Du ska beskriva med dina egna ord (på svenska) dina 3 olika designmönster.

### Constructor Pattern

Constructor pattern är ett skapande designmönster som används för att initiera ett nyskapat objekt. Konstruktören förbereder objektet för användning och accepterar argument för att sätta värden på egenskaper och metoder när objektet skapas. JavaScript stödjer inte konceptet av klasser men det finns en speciell konstruktor metod som man kan använda sig av för att arbeta med objekt. Genom att använda sig av nyckelordet `new` kan vi säga till JavaScript att vi vill att funktionen ska fungera som en konstruktör och instansiera ett nytt objekt med egenskaperna definierade av den funktionen.<br>
De tre vanliga sätten att skapa nya objekt i JavaScript är:

```javascript
// 1
let newObject = {};

// 2
let newObject = Object.create(Object.prototype);

// 3
let newObject = new Object();
```

### Facade Pattern

Facade Pattern är en strukturell designmönster som döljer underliggande komplexitet för att göra det enklare för användaren.

### Singleton Pattern

Singleton Pattern är ett skapande designmönster vars syfte är att begränsa antalet instanser av en klass till ett objekt.

## 3. Skapa ett valfritt utvecklingsprojekt (JavaScript-applikation),där du använder minst ett av dina valda designmönster.

```javascript
// Factory Pattern
class Gender {
  constructor(name) {
    this.name = name;
    this.gender = "default";
  }

  say() {
    console.log(
      `My name is ${this.name} and identify myself as ${this.gender} 🐱‍🏍`
    );
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
  };
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

genders.forEach((gender) => gender.say.call(gender));

// My name is Adorable and identify myself as Genderfluid 🐱‍🏍
// My name is Zoeigh and identify myself as Non-binary 🐱‍🏍
// My name is Emperor and identify myself as Intergender 🐱‍🏍
// My name is Mylz and identify myself as Demiboy 🐱‍🏍
// My name is Aviary and identify myself as Transgender 🐱‍🏍
// My name is Galaxy and identify myself as Demiboy 🐱‍🏍
```

## 4. Du behöver dokumentera ditt projekt med dina egna ord och diagram. Modellera några relevanta UML-diagram. Använd Lucidchart.com eller ett annat valfritt modelleringsverktyg.

### Klassdiagram

| Gender                           |
| -------------------------------- |
| -name: string<br>-gender: string |
| -say()                           |
