//button vars
var allButton = document.getElementById("all");
var onButton = document.getElementById("online");
var offButton = document.getElementById("offline");
var userArr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "cdprojektred"];
var mainDiv = document.getElementById("main");
makeDiv(userArr);
getUser(userArr);
status(userArr);
//Menu Animation
    //slide
allButton.addEventListener("transitionend", function () {
    if (allButton.textContent === "" && $("#all").width() > 35) {
        allButton.appendChild(document.createTextNode("ALL"));
    } 
})
allButton.addEventListener("mouseout", function () {
    if (allButton.textContent != "" && allButton.classList.contains("c")) {
        allButton.innerHTML = "<span class='circle m-circ a'></span>";
    }
})

onButton.addEventListener("transitionend", function () {
    if (onButton.textContent === "" && $("#online").width() > 35) {
        onButton.appendChild(document.createTextNode("ONLINE"));
    }
})
onButton.addEventListener("mouseout", function () {
    if (onButton.textContent != "" && onButton.classList.contains("c")) {
        onButton.innerHTML = "<span class='circle m-circ on'></span>";
    }
})

offButton.addEventListener("transitionend", function () {
    if (offButton.textContent === "" && $("#offline").width() > 35) {
        offButton.appendChild(document.createTextNode("OFFLINE"));
    }
})
offButton.addEventListener("mouseout", function () {
    if (offButton.textContent != "" && offButton.classList.contains("c")) {
        offButton.innerHTML = "<span class='circle m-circ off'></span>";
    }
})

    //click
allButton.addEventListener("click", function () {
    allButton.classList.remove("c");
    allButton.classList.add("o");
  
        onButton.classList.remove("o");
        onButton.classList.add("c");
        onButton.innerHTML = "<span class='circle m-circ on'></span>";
   
        offButton.classList.remove("o");
        offButton.classList.add("c");
        offButton.innerHTML = "<span class='circle m-circ off'></span>";
    //Twitch Display
    clear();
    makeDiv(userArr);
    getUser(userArr);
    status(userArr);
})

onButton.addEventListener("click", function () {
    onButton.classList.remove("c");
    onButton.classList.add("o");
    
        allButton.classList.remove("o");
        allButton.classList.add("c");
        allButton.innerHTML = "<span class='circle m-circ a'></span>";
   
        offButton.classList.remove("o");
        offButton.classList.add("c");
    offButton.innerHTML = "<span class='circle m-circ off'></span>"; 
    //Twitch Display
    clear();
    makeDiv(userArr);
    getUser(userArr);
    status(userArr);
    offline();
})

offButton.addEventListener("click", function () {
    offButton.classList.remove("c");
    offButton.classList.add("o");
   
    allButton.classList.remove("o");
    allButton.classList.add("c");
    allButton.innerHTML = "<span class='circle m-circ a'></span>";
    
    onButton.classList.remove("o");
    onButton.classList.add("c");
    onButton.innerHTML = "<span class='circle m-circ on'></span>";
    //Twitch Display
    clear();
    makeDiv(userArr);
    getUser(userArr);
    status(userArr); 
    online();
})



//for user in arr 

    //create div

function makeDiv(arr) {
    for (var i = 0; i < arr.length; i++){
        var newDiv = document.createElement("div");
        newDiv.classList = "yellow-border";
        newDiv.id = i;
        document.getElementById("main").appendChild(newDiv);
    }
    
}
//get Twitch info
function getUser(arr) {
    for (var i = 0; i < arr.length; i++){
        var nextDiv = document.getElementById(i);
        var chan = "https://wind-bow.glitch.me/twitch-api/channels/" + arr[i];
        $.ajax({
            url: chan,
            async: false,
            dataType: 'json',
            success: function (data) {
                name = data.display_name;
                logo = data.logo;
                link = data.url;
            }
        });
        //display icon
        var newCirc = document.createElement("span");
        newCirc.classList = "circle logo";
        newCirc.style.backgroundImage = "url(" + logo + ")";
        nextDiv.appendChild(newCirc);
        nextDiv.classList.add("user");
        //name
        var nextUser = document.createElement("a");
        nextUser.href = link;
        nextUser.textContent = name;
        nextDiv.appendChild(nextUser);    
        } 
   
}
    //online or offline?

function status(arr) {
    for (var i = 0; i < arr.length; i++) {
        var nextDiv = document.getElementById(i);
        var stream = "https://wind-bow.glitch.me/twitch-api/streams/" + arr[i];
        $.ajax({
            url: stream,
            async: false,
            dataType: 'json',
            success: function (data) {
                stat = data.stream;
            }
        });
        //if offline
        if (stat === null) {
            nextDiv.classList.add("no");
            var o = document.createElement("span");
            o.classList.add("midText");
            o.textContent = "OFFLINE";
            nextDiv.appendChild(o);
        } else {
               //if online disp additional info
            nextDiv.classList.add("yes");
            var o = document.createElement("span");
            o.classList.add("midText");
            o.textContent = "ONLINE";
            nextDiv.appendChild(o);

            game = stat.game;
            viewers = stat.viewers;

            var p = document.createElement("p");
            p.textContent = "Now Streaming:  " + game + "              Viewers:  " + viewers;
            nextDiv.appendChild(p);
        }
     
    }
}

//remove offline divs
function online() {
    var d = document.querySelectorAll(".yes");
    for (var i = 0; i < d.length; i++){
        var yes = d[i];
        mainDiv.removeChild(yes);
    }
}

//remove online divs
function offline() {
    var d = document.querySelectorAll(".no");
    for (var i = 0; i < d.length; i++) {
        var no = d[i];
        mainDiv.removeChild(no);
    }
}

//remove all divs
function clear() {
    var d = document.querySelectorAll(".user");
    for (var i = 0; i < d.length; i++) {
        var u = d[i];
        mainDiv.removeChild(u);
    }
}