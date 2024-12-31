
let a = 10; b = 5;
const sum = () => {
    console.log(`Sum :- ${a + b}`);
}
const min = () => {
    console.log(`Min :- ${a - b}`);
}
const mul = () => {
    console.log(`Mul :- ${a * b}`);
}
const div = () => {
    console.log(`Div :- ${a / b}`);
}
const mod = () => {
    console.log(`Mod :- ${a % b}`);

}
module.exports = {
    sum,
    min,
    mul,
    div,
    mod
}