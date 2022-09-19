const inputsall = document.querySelectorAll(".sides");
const Btn = document.querySelector("#submit");
const Output =document.querySelector("#out");

Btn.addEventListener("click",Squareit);

function Squareit(){
    var FirstSide = Number(inputsall[0].value);
    var SecondSide = Number(inputsall[1].value);

    FirstSide *=FirstSide;
    SecondSide*=SecondSide;

    var HypoSide =FirstSide+SecondSide;
    Output.innerText = "The length of hypotenuse is "+HypoSide;
}