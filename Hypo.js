const inputsall = document.querySelectorAll(".sides");
const Btn = document.querySelector("#submit");
const Output =document.querySelector("#out");

Btn.addEventListener("click",Squareit);

function Squareit(){
    var FirstSide = Number(inputsall[0].value);
    var SecondSide = Number(inputsall[1].value);

    if(FirstSide < 0 ){
        Output.style.color="Red";
        Output.innerText = "Please enter valid A field number. Value must be positive";
    }else{
        if(SecondSide < 0){
            Output.style.color="Red";
            Output.innerText = "Please enter valid B field number. Value must be positive";
        }else{
    
        FirstSide *=FirstSide;
        SecondSide*=SecondSide;
    
        var HypoSide =FirstSide+SecondSide;
        Output.style.color="Green";
        Output.innerText = "The hypotenuse of triangle is "+HypoSide;
          }
    }
       
    
}