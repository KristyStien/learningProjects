//NOTE ~ JS for random quote working @ https://codepen.io/KristyStien/full/gXpxVa/

$.ajaxSetup({ cache: false });
//vars
var newQuote = document.getElementById("newQuote");
var tweet = document.getElementById("tweeter");
var bgColorArr = ["#00ACC1", "#f442d1", "#a5dd8b", "#ff7c2b", "#910491", "#425b70"];
var bod = document.querySelector("body");
var poly = document.getElementById("polygon");
var shapArr = ["penta", "hexa", "hepta", "octa", "nona"];
var quote = document.getElementById("theQuote");
var speaker = document.getElementById("theWriter");
var toTweet = "";

//on Start
bod.style.backgroundColor = setBackgroundColor();
poly.style.backgroundColor = setPolyColor();
setShape();
clonePoly();
getQuote();


//set BG color
function setBackgroundColor() {
    var num = Math.floor(Math.random() * 6);
    var color = bgColorArr[num];
    if (bod.style.backgroundColor !== color) {
        bod.style.backgroundColor = color;
    } else {
        setBackgroundColor();
    }
}

// set Polygon Color
function setPolyColor() {
    var num = Math.floor(Math.random() * 6);
    var color = bgColorArr[num];
    var bg = bod.style.backgroundColor;
    if (color !== bg) {
        poly.style.backgroundColor = color;
    } else {
        setPolyColor();
    }
}
//set Shape class
function setShape() {
    var num = Math.floor(Math.random() * 5);
    var shape = shapArr[num];
    if (poly.classList.contains(shape) === false) {
        for (var i = 0; i < shapArr.length; i++) {
            if (poly.classList.contains(shapArr[i])) {
                poly.classList.remove(shapArr[i]);
            }
        }
        poly.classList.add(shape);
    } else {
        poly.classList.remove(shape);
        setShape();
    }

}

//newQuoteButton Events
newQuote.addEventListener("click", function () {
    setBackgroundColor();
    setPolyColor();
    removePoly();
    setShape();
    clonePoly();
    getQuote();

});

//twitter Button events
tweet.addEventListener("click", function () {
    var twitRL = "https://twitter.com/intent/tweet?text=" + toTweet;
    window.open(twitRL);
});

//setting bk img
function clonePoly() {
    var cln = poly.cloneNode(true);
    for (var i = 0; i < 104; i++) {
        var cln = poly.cloneNode(true);
        cln.style.backgroundColor = poly.style.backgroundColor;
        cln.classList.add("extra");
        bod.appendChild(cln);
    }
}

//remove Poly func
function removePoly() {
    var extra = document.querySelectorAll(".extra");
    for (var i = 0; i < extra.length; i++) {
        bod.removeChild(extra[i]);
    }

}

//Change quote func
//Get Quote
function getQuote() {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function (a) {
        var c = a[0].content;
        var t = a[0].title;
        changeQuote(c);
        changeSpeaker(t);
        return toTweet = quote.textContent + speaker.textContent;
    });

}

//The Quote
function changeQuote(theContent) {
    quote.innerHTML = theContent;
}
//The Attribution
function changeSpeaker(thatContent) {
    speaker.textContent = " - " + thatContent;
}
