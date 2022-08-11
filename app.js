// const player = {
//     name : "nico",
//     age: 98,
// }
// console.log(player)

// player.sexy = "soon";
// console.log(player)

// function plus() {
//     console.log(2+2);   
// }
// plus();

// alert("lalalala");



const calculator = {
    plus : function(a,b) {
        return(a+b);
    },
    minus : function(a, b) {
        return(a-b);
    },
    times : function (a,b) {
        return(a*b);
    },
    divide : function (a,b) {
        return(a/b);
    }
};

calculator.plus(2,3);
calculator.minus(2,3);
calculator.times(2,3);

// 
const age = 96;
function calculatorKrAge(ageOfForeigner) {
    ageOfForeigner + 2 ;
}

const krAge = calculatorKrAge(age);

const plusResult = calculator.plus(2,32133);
const minusResult = calculator.minus(plusResult, 10);
const timeResult = calculator.times(10, minusResult);
