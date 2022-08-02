// const age = prompt("How old are you");
// prompt 사용시, 답을 입력 전 까지 실행을 멈춘다
// prompt 의 어떠한 값도 js 의 value 로 가져가게 된다

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0){
    console.log("please");
} else if(age < 18) {
    console.log("you");
} else if(age >= 18 && age <= 50) {
    console.log("you can");
} else {

}

const calculator = {
    plus : function(a,b) {
        return a+b;
    },
};


console.log(calculator.plus(231,432))
