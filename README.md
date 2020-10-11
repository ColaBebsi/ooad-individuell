# WEBB19–OOAD–Individuell Inlämningsuppgift

## För Godkänd (G)

## 1. Välj 3 valfria designmönster från boken ”Learning JavaScript Design Patterns” https://addyosmani.com/resources/essentialjsdesignpatterns/book/

1. Constructor Pattern
2. Facade Pattern
3. Factory Pattern

## 2. Du ska beskriva med dina egna ord (på svenska) dina 3 olika designmönster.

### Constructor Pattern

Constructor pattern är ett skapande designmönster som används för att initiera ett nyskapat objekt. Konstruktören förbereder objektet för användning och accepterar argument som den kan använda sig av för att sätta värden när objektet skapas.

### Facade Pattern

Facade Pattern är en strukturell designmönster som döljer underliggande komplexitet för att göra det enklare för användaren.

### Singleton Pattern

Singleton Pattern är ett skapande designmönster vars syfte är att begränsa antalet instanser av en klass till ett objekt.

## 3. Skapa ett valfritt utvecklingsprojekt (JavaScript-applikation),där du använder minst ett av dina valda designmönster.

```javascript
// Constructor Pattern
class Phone {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  say() {
    console.log(`Brand: ${this.brand}, Color: ${this.color}`);
  }
}

const phone1 = new Phone("iPhone X", "Black");
const phone2 = new Phone("Samsung S10", "Purple");

phone1.say();
phone2.say();
```

## 4. Du behöver dokumentera ditt projekt med dina egna ord och diagram. Modellera några relevanta UML-diagram. Använd Lucidchart.com eller ett annat valfritt modelleringsverktyg.

| Phone                            |
| -------------------------------- |
| -brand: string<br>-color: string |
| -say()                           |
