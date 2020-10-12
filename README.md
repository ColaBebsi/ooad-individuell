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

### Flyweight Pattern

Flyweight Pattern är en strukturell lösning för att optimera kod som är repetitiv, långsam och som delar data på ett ineffektivt sätt. Det syftar till att minimera användningen av minne i en applikation genom att dela så mycket data som möjligt med relaterade objekt. Detta innebär att man tar flera liknande objekt eller datakonstruktioner som används av ett antal objekt och placerar denna data i ett enda externt objekt. Vi kan sedan skicka igenom det här objektet till de som är beroende av dess data istället för att lagra identiskt data över var och en. Det finns två sätt som detta mönster kan appliceras på. Det första är vid datalagret, där vi hanterar att dela data mellan stora mängder av liknande objekt som är lagrade i minnet. Den andra sättet är i DOM-lagret där mönstret kan användas som en event manager för att undvika att fästa event handlers till varje child element som har ett samma beteende som sin parent element.

### Factory Pattern

Factory Pattern är ett skapande designmönster vars syfte är att skapa en instans av en klass och dölja dess logik för användaren. Designmönstret använder fabriksmetoder för att hantera problemet med att skapa objekt när man inte vet den exakta klassen för objektet som ska skapas. Detta genomförs i ett gränssnitt där vi kan specifera vilket objekt vi vill skapa. 

## 3. Skapa ett valfritt utvecklingsprojekt (JavaScript-applikation), där du använder minst ett av dina valda designmönster.

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

https://lucid.app/invitations/accept/946e10ff-c9a3-45f6-9c37-9e77a93eda99