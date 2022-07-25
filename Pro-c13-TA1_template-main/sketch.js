var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
 input=createInput()
 input.position(5,60)
 heading=createElement("h4","Enter any letter")
 heading.position(5,20)


}

function draw() {
var value=input.value()
  switch(value){
    case "a": console.log("It is a vowel")
    break;
    case "e": console.log("It is a vowel")
    break;
    case "i": console.log("It is a vowel")
    break;
    case "o": console.log("It is a vowel")
    break;
    case "u": console.log("It is a vowel")
    break;
    case "y": console.log("It is a vowel in some cases")
    break;
default:console.log("Please enter any character")
  
  }
}

