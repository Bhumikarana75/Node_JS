console.log('hello');

let a = 10; b = 5;
console.log(`SUM :- ${a + b}`);

let c = [10,15,30];
console.log(c);

let d = [
    {
        name:"bhumika",
        email:"bhumikarana@gmail.com",
        password:12345
    },
    {
        name:"brijal",
        email:"brijalkorat@gmail.com",
        password:54321
    }
]
console.log(d);

let ans = c.filter((val) => {
    return val % 2 == 0;
})
console.log(ans);
