//global variables
var p1 = 0;
var p2 = 0;
var lim = 5;
var oneDis = document.querySelector("#p1");
var twoDis = document.querySelector("#p2");
var limDis = document.querySelector("#limit");
var numInput = document.querySelector("#playTo");

//Change P1 score
document.querySelector("#one").addEventListener("click", function(){
	if(p1<lim && p2 < lim){
		if(p1<lim - 1){
			p1 = p1 + 1;
			oneDis.textContent =  p1;
		} else if (p1 < lim){
			p1 = p1 + 1;
			oneDis.textContent =  p1;
			oneDis.style.color = "green";
		}
}
});

//Change P2 score

document.querySelector("#two").addEventListener("click", function(){
	if(p1<lim && p2 < lim){
		if(p2<lim - 1){
			p2 = p2 + 1;
			twoDis.textContent =  p2;
		} else if (p2 < lim){
			p2 = p2 + 1;
			twoDis.textContent =  p2;
			twoDis.style.color = "green";
		}
}
});

//Reset the game

document.querySelector("#reset").addEventListener("click", function(){
	p1 = 0;
	p2 = 0;
	oneDis.textContent = p1;
	oneDis.style.color = "black";
	twoDis.textContent = p2;
	twoDis.style.color = "black";
});

//Change number to play to

numInput.addEventListener("change", function(){
	lim = parseInt(numInput.value, 10);
	limDis.textContent = lim;

});