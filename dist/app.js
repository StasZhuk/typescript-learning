"use strict";
// union types
var pizzaSize = 'small';
function changePizzaSize(size) {
    pizzaSize = size;
}
changePizzaSize('medium');
console.log(pizzaSize);
// function type
var sumOrder;
sumOrder = function (price, value) {
    return price * value;
};
var sumOrder2;
sumOrder2 = function (x, y) { return x * y; };
var result2 = sumOrder2(25, 5);
console.log(result2);
// functions and optional argument
var sumOrder3;
sumOrder3 = function (x, y) {
    if (y)
        return x * y;
    else
        return x;
};
var result3 = sumOrder3(25);
console.log(result3);
// functions and default params
var sumOrder4;
sumOrder4 = function (x, y) {
    if (y === void 0) { y = 1; }
    return x * y;
};
var result4 = sumOrder4(15);
console.log(result4);
// object types
var pizza;
pizza = {
    name: 'Pepperoni',
    price: 20,
    getName: function () {
        return this.name;
    }
};
console.log(pizza.getName());
//# sourceMappingURL=app.js.map