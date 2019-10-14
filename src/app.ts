// union types

let pizzaSize: string = 'small';

function changePizzaSize(size: 'small' | 'medium' | 'large'): void {
    pizzaSize = size;
}

changePizzaSize('medium');

console.log(pizzaSize);

// function type

let sumOrder;

sumOrder = (price: number, value: number): number => {
    return price * value;
}

let sumOrder2: (price: number, value: number) => number;

sumOrder2 = (x, y) => x * y;

let result2 = sumOrder2(25, 5);

console.log(result2);

// functions and optional argument

let sumOrder3: (price: number, value?: number) => number;

sumOrder3 = (x, y) => {
    if (y) return x * y;
    else return x;
}

let result3 = sumOrder3(25);

console.log(result3);

// functions and default params

let sumOrder4: (price: number, value?: number) => number;

sumOrder4 = (x, y = 1) => x * y;

let result4 = sumOrder4(15);

console.log(result4);

// object types

let pizza: { name: string, price: number, getName(): string };

pizza = {
    name: 'Pepperoni',
    price: 20,
    getName() {
        return this.name;
    }
}

console.log(pizza.getName());

// array types

let prices: number[];
prices = [24, 100, 40];

let names: string[];
names = ['jon', 'clara', 'ben'];

let toppings: Array<string>;
names = ['chees', 'meat', 'vegetables'];



// typle types for Array

let something: [string, number, boolean];

something = ['hack', 45, false];



// aliases type
type Height = 'small' | 'normal' | 'big';
type SetHeight = (height: Height) => void;

let height: Height = 'small';

let changeHeight: SetHeight = (x) => {
    height = x;
}

changeHeight('big');

console.log(height);