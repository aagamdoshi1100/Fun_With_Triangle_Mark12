var DataOfForm = document.querySelector("#Quiz-form");
var ChkBtn = document.querySelector("#submit");
var Output =document.querySelector("#out");

var CorrectAnswer = ['90','right angled',"3 sides, 3 angles, and 3 vertices","180","sum of side lengths of the triangle"];


ChkBtn.addEventListener("click", ScoreBoard);

function ScoreBoard(){

    var Score=0;
    var index=0;

    const formdata =new FormData(DataOfForm);
        for(let value of formdata.values()){
        if(value === CorrectAnswer[index]){
            Score +=1;
        }
        index+=1;
    }
    Output.innerText= "Your Score is "+Score;
}