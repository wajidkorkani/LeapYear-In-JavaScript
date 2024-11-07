let answerText = document.getElementById('answerText')
let inputYear = document.getElementById('year')

function clickHandler(){
    let x = inputYear.value
    if(x % 4 == 0 && x % 100 != 0 || x % 4 == 0 && x % 100 == 0 && x % 400 == 0){
        answerText.innerText = x + " is a leap year.";
    }else{
        answerText.innerText = x + " is not a leap year.";
    }
}
