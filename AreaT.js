const userIn = document.querySelectorAll(".sides");
const Btn = document.querySelector("#submit");
const Output =document.querySelector("#out");

Btn.addEventListener("click",AreaCal);

function AreaCal(){
    var Base = Number(userIn[0].value);
    var height = Number(userIn[1].value);

    var Area =1/2* Base*height;
    Output.innerText = "The Area is "+Area+" cm2";
}