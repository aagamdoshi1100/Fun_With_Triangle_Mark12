const userIn = document.querySelectorAll(".sides");
const Btn = document.querySelector("#submit");
const Output =document.querySelector("#out");

Btn.addEventListener("click",AreaCal);

function AreaCal(){
    var Base = Number(userIn[0].value);
    var height = Number(userIn[1].value);

    if(Base < 0 ){
        Output.style.color="Red";
        Output.innerText = "Please enter valid Base value. Value must be positive";
      }else{

        if(height < 0 ){
            Output.style.color="Red";
            Output.innerText = "Please enter valid height value. Value must be positive";
          }else{

    var Area =1/2* Base*height;
    Output.style.color="Green";
    Output.innerText = "The Area is "+Area+" cm sq.";
}
      }
    }