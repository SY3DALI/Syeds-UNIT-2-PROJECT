/* Declare variables below to save the different sections (divs) of your story*/
let optionOne=document.querySelector(".option-one");
let optionTwo=document.querySelector(".option-two");
let track = document.querySelector(".option-track");
let lost=document.querySelector(".lost");


let buttonTrack1=document.querySelector(".option-one-track");
let buttonTrack2=document.querySelector(".option-two-track");

let img2=document.querySelector(".option-two");
let optiontwotrack=document.querySelector(".option-two-screen");




optionOne.onclick=function(){track.style.display="block";};


let optionWon=document.querySelector(".won");
optionWon.style.display="none";

let optionlost=document.querySelector(".heading");
optionWon.style.display="none";



buttonTrack1.onclick=function(){
    optionWon.style.display="block";
};
buttonTrack2.onclick=function(){
lost.style.display="block";
};


// INSERT_VARIABLE.onclick=function(){

// };


