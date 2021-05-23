
let x = 5.75;

// 1 -
console.log(Math.ceil(x))
//2
console.log((Math.floor(x)))
//3
console.log(Math.round(x))
//4

const myRound = (numb, simb) => {
    if (simb == '-'){
        return(Math.floor(numb))
    }else{
        return (Math.round(numb))
    }
}
//5 - 8
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//9 10
function rand(maxLimit = 100) {
    return Math.random() * maxLimit;
}
rand(10);

//11

const wekDay = ['Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday']

const randomDay = () => {
    let i = Math.round(Math.random(7))
    return wekDay[i]
}
console.log(randomDay())
console.log(Math.random(8))