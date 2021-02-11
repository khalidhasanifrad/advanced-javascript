const numbers = [7, 8, 9, 10, 11];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

const numbers = [7, 8, 9, 10, 11];
const result = numbers.map(function(element){
    return element * element;
})
console.log(result);

const numbers = [7, 8, 9, 10, 11];
const result = numbers.map(x => x * x);
console.log(result);

const numbers = [7, 8, 9, 10, 11];
const bigger = numbers.filter(x => x > 8);
console.log(bigger);

const numbers = [7, 8, 9, 10, 11];
const isThere = numbers.find(x => x > 8);
console.log(isThere);