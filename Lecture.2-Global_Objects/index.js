console.log(__filename);
console.log(__dirname);

let cnt = 0;
const myFunc = () => {
    if(cnt < 10){
        cnt++;
        console.log('Hello World');
    }
}
setInterval(myFunc,1000);