//var setup
var rand = document.getElementById("random");
var placement = document.getElementById("placement");

//Random button
rand.addEventListener("click", function () {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank")
});

//Search button
var searchButton = document.querySelector("input");
//add listener
searchButton.addEventListener("change", function () {
    searchTerm = searchButton.value;
    var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchTerm;
//move .center to .top
    placement.classList.remove("center");
    placement.classList.add("topper");
//search wiki entries 
    $.get(wikiUrl, function (w) {
        //w[1][x] = title w[2][x] = entry snippet w[3][x]=url
        for (var i = 0; i < 10; i++){
            var div = document.createElement("div");
            div.classList.add("view");
            div.innerHTML = "<a href="+ w[3][i] +" target= '_blank'>" + w[1][i] + "</a><p>" + w[2][i] + "</p>";
            document.body.appendChild(div);
        }
   }, "jsonp")
   
});



