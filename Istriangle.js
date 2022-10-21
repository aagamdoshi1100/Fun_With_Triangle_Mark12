const Allangles = document.querySelectorAll(".Angles");
const Istriangle = document.querySelector("#Btn");
const Output = document.querySelector("#output");
var NoValidkar = document.querySelector("#validkar");

Istriangle.addEventListener("click", CheckTraingle);


function CheckTraingle(){


    var A = parseInt(Allangles[0].value);
    var B = parseInt(Allangles[1].value);
    var C = parseInt(Allangles[2].value);

    if(A < 0 ){
        Output.style.color="Red";
        Output.innerText = "Please enter valid Angle 1. Value must be positive";
      }else{
        if(B < 0 ){
          Output.style.color="Red";
          Output.innerText = "Please enter valid Angle 2. Value must be positive";
        }else{
          if(C < 0 ){
            Output.style.color="Red";
            Output.innerText = "Please enter valid Angle 3. Value must be positive";
          }else{

        
        var  sumofall = A+B+C;
        console.log(sumofall)
    
        if(sumofall === 180){
            Output.style.color="Green";
            Output.innerText = "The angles form a triangle";
        }else{
            Output.style.color="Red";
            Output.innerText = "The angles doesn't form a triangle";
        }
    
    
         
      }
    }
  }


  }
