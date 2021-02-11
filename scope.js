const bonus = 20;
function sum(first ,second){
    let result = first + second + bonus;
    if (result > 8) {
        let mood = "happy";
        mood = "sad";
        mood = "fishy";
        console.log(mood);
    }
    return result;
}
const output = sum(7, 5);
console.log(output);