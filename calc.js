//vars
var calc = document.getElementById("calc");
var answer = document.getElementById("answer");
var flexbox = document.getElementById("buttons");

//make buttons
function createButton(num){
    var newButton = document.createElement("button");
    flexbox.appendChild(newButton);
    var numstring = "'"+num+"'";
    newButton.outerHTML = '<input type="button" class = "button" id = "'+num+'" value="'+num+'" onclick="calc.answer.value +='+numstring+'"/>';
}
//numButton

for(var i = 0; i<10; i++){
    createButton(i);
}
createButton("+");
createButton("-");
createButton("*");
createButton("/");
createButton(".");
createButton("=");
createButton("C");

//change = 
document.getElementById("=").outerHTML = '<input type="button" class = "button" id = "=" value="=" onclick="calc.answer.value = eval(calc.answer.value)"/>';

//change C 
var newStr = "''";
document.getElementById("C").outerHTML = '<input type="button" class = "cButton" id = "C" value="C" onclick="calc.answer.value ='+newStr+'"/>';