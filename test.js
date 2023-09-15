// array-it store multiple items in single variable

//ex-1
// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits);
// console.log(fruits.length);

// //ex-2
// fruits[5] = "mango";
// console.log(fruits[5]);



// const array = [1,2,3]
// console.log(array)

// //1. Array.prototype.map()

    // Q-1
// const array1 = [1,4,9,16]

// //pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log(map1);
// //Expected output: Array [2,8,18,32]


// Q-2
// const numbers = [1,4,9];
// const roots = numbers.map((num) => Math.sqrt(num));

// console.log(roots)

// Q-3
// const cart = [5,15,25];
// let total = 0;
// const withTax = cart.map((cost) => {
//     total += cost;
//     return cost * 1.2;
// });
// console.log(withTax);
// console.log(total)

// Q-4

// const num = [2,3,5];
// let total = 0;
// const addtotal = num.map((add) =>{
//     total += add;
// })
// console.log(total)

//2. Array.prototype[@@iterator]()

// const array1 = ['a', 'b', 'c'];
// const iterator1 = array1[Symbol.iterator]();

// for (const value of iterator1) {
//     console.log(value);
// }

//Q

// const arr = [ "a", "b", "c"];
// const letterResult = document.getElementById("letterResult");
// for (const letter of arr) {
//     const li = document.createElement("li");
//     li.textContent = letter;
//     letterResult.appendChild(li);
// }

//3. Array.prototype.at()

// const array1 = [5, 12, 8, 130, 44];

// let index = 2;

// console.log(`using an index of ${index} the item retured is ${array1.at(index)}`)

// index = -2;

// console.log(`using an index of ${index} the item retured is ${array1.at(index)}`)

//Q

// const cart = ["aaple", "banana", "pear"];
 
// function returnLast(arr){
//     return arr.at(-1);
// }
// const item1 = returnLast(cart);
// console.log(item1);// 'pear'

// cart.push("orange");
// const item2 = returnLast(cart);
// console.log(item2);

//Q

// const colors = ["red", "green", "blue"];

// const lengthWay = colors[colors.length - 2];
// console.log(lengthWay);

// const sliceeWay = colors.slice(-2,-1);
// console.log(sliceeWay[0]);

// const atWay = colors.at(-2);
// console.log(atWay);

//4. array.prototype.concat()

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);

//ex-1

// const letters = ["a", "b", "c"];
// const numbers = [1,2,3];

// const alphaNumeric = letters.concat(numbers);
// console.log(alphaNumeric);

//ex-2

// const num1 = [[1]];
// const num2 = [2, [3]];

// const numbers = num1.concat(num2);

// console.log(numbers)
 
// num1[0].push(4);
// console.log(numbers);

//5. array.prototype.copyWithin()
// const array1 = ['a', 'b', 'c', 'd', 'e'];

// console.log(array1.copyWithin(0, 3, 4));
// console.log(array1.copyWithin(1, 3));

//5. array.prototype.entries()

// const array1 = ['a', 'b', 'c'];

// const iterator1 = array1.entries();

// console.log(iterator1.next().value);
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

// ex-1
// const a = ["a", "b", "c"];
// for(const [index, element] of a.entries()){
//     console.log([index, element]);
// }

//ex-2
// const array = ["a", "b", "c"];
// const arrayentries = array.entries();

// for (const element of arrayentries){
//     console.log(element)
// }

// ex-3

// for(const element of [, "a"].entries()){
//     console.log(element);
// }

//6. array.prototype.every()

// const isBelowThreshold = (currentvalue) => currentvalue < 40;

// const array1 = [1, 30, 39, 29, 10, 13, 50];

// console.log(array1.every(isBelowThreshold))

//ex-1

// function isBigEnough(element, index, array){
//     return element >= 10;
// }
// [12, 5, 8, 130, 44].every(isBigEnough);
// [12, 54, 18, 130, 44].every(isBigEnough);

//7. array.prototype.find()

// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((element) => element > 10);

// console.log(found);

//ex-1

// const inventory = [
//     { name: "apples", quantity:2},
//     { name: "bananas", quantity:0},
//     { name: "cherries", quantity:5},
// ];

// function isCheries(fruit) {
//     return fruit.name === "cherries"
// }

// console.log(inventory.find(isCheries))


//ex-2

// const inventory = [
//     { name: "apples", quantity:2},
//     { name: "bananas", quantity:0},
//     { name: "cherries", quantity:5},
// ];

// const result = inventory.find(({ name }) => name === "cherries")
   


// console.log(result);

//8. array.prototype.filter()

//ex-1
// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// const result = words.filter((word) => word.length > 4);
// console.log(result);

//ex-2

// function isBigEnough(value){
//     return value >= 10;
// }
// console.log( [12, 2, 23, 50, 150].filter(isBigEnough)) ;

//ex-3 find all prime number

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function isPrime(num) {
//     for (var i = 2;num > i; i++){
//         console.log(i)
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return num > 1;
// }

// console.log(array.filter(isPrime));

//ex-4

// let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// const modifiedWords = words.filter((word,index,arr) => {
//     arr[index + 1] += " extra";
//     return word.length < 6;
// });

// console.log(modifiedWords);

// words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// const appendedWords = words.filter((word, index, arr) => {
//     arr.push("new");
//     return word.length < 6;
// });

// console.log(appendedWords);

//9. array.prototype.fill()

// const array1 = [1, 2, 3, 4];

// //fill with 0 from position 2 until position 4

// console.log(array1.fill(0, 2, 4));

// console.log([1, 2, 3].fill(4)); // [4, 4, 4]
// console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
// console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
// console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
// console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
// console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
// console.log(Array(3).fill(4)); // [4, 4, 4]

//10. array.prototype.findindex()

// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));


//11. array.prototype.forEach()

//ex-1

// const array1 = ['a', 'b', 'c'];

// array1.forEach((element) => console.log(element));

//ex-2
// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//     sum = await sumFunction(sum, rating);
// });

// console.log(sum);

//ex-3
// const arraySparse = [1, 3, , 7];
// let numCallbackRuns = 0;

// arraySparse.forEach((element) => {
//     console.log({ element });
//     numCallbackRuns++;
// });

// console.log({ numCallbackRuns});

//ex-4

// const items =  ["item1", "item2", "item3"];
// const copyItems = [];

// for(let i = 0;i < items.length;i++){
//     copyItems.push(items[i]);
// }
// console.log(copyItems)

// items.forEach((item) => {
//     copyItems.push(item);
// })
// console.log(copyItems);

//ex-5

// const words = ["one", "two", "three", "four"];
// words.forEach((word) => {
//   console.log(word);
//   if (word === "two") {
//     words.shift(); //'one' will delete from array
//   }
// }); // one // two // four

// console.log(words); // ['two', 'three', 'four']

// 12. array.prototype.map()


//ex-1
// const array1 = [1, 4, 9, 16];

// const map1 = array1.map((x) => x * 2);
// console.log(map1);

//ex-2

// const numbers = [1, 4, 9];
// const root = numbers.map((num) => Math.sqrt(num));

// console.log(root);

//13. array.prototype.pop()

//The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

// const plants =  ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// console.log(plants.pop());
// console.log(plants);

// plants.pop();
// console.log(plants);

//14. Array.prototype.push()

//ex-1
// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows')
// console.log(count);
// console.log(animals);

//ex-2

// const sports = ["soccer", "baseball"];
// const total = sports.push("football", "swimming");

// console.log(sports);
// console.log(total);

//ex-3

// const vegetables = ["parsnip", "potato"];
// const moreVegs = ["celery", "beetroot"];

// vegetables.push(moreVegs);

// console.log(vegetables);

//16. Array.prototype.reduce()

// const array1 = [1, 2, 3, 4];

// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

// console.log(sumWithInitial);

//ex1
// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//    const returns = accumulator + currentValue;
//    console.log(`accumulator:${accumulator}, currentValue:${currentValue},index:${index},returns:${returns}`,);
//    return returns;
// }

// array.reduce(reducer);

//ex-2

// [15, 16, 17, 18, 19].reduce((
//     accumulator, currentValue
// ) => accumulator + currentValue,
// 10,
// );

//17. Array.prototype.shift()

// const array1 = [1, 2, 3];

// const firstElement = array1.shift();
// console.log(array1);

// console.log(firstElement);

//ex-1

// const myFish = ["angel", "clown", "mandarin", "surgeon"];
 
// console.log("myFish before:",myFish)

// const shifted = myFish.shift();

// console.log("myfish after:",myFish)

// console.log("removed this element:", shifted)

//18. Array.prototype.slice()

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals);
// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5));
