const Allangles = document.querySelectorAll(".Angles");
const Istriangle = document.querySelector("#Btn");
const Output = document.querySelector("#output");


Istriangle.addEventListener("click", CheckTraingle);


function CheckTraingle(){

    var A = parseInt(Allangles[0].value);
    var B = parseInt(Allangles[1].value);
    var C = parseInt(Allangles[2].value);

    var  sumofall = A+B+C;

    if(sumofall === 180){
        Output.innerText = "The angles form a triangle";
    }else{
        Output.innerText = "The angles doesn't form a triangle";
    }


}