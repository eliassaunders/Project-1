var inputForm = document.querySelector('#input-form');
var userSec = document.querySelector('#user-sec');
var nameInput = document.querySelector('#name-input');
var submit = document.querySelector('#sbmt-btn');


var userArr = ["inator", "killer", "cutter", "swagger", "michael", "robot", "droid", "wizard", "cop", "raptor", "flower", "sun", "space", "train"];

var submitted = function(event) {

    event.preventDefault();


    var objDiv = document.createElement("div");
    objDiv.setAttribute("id", "profile-div");

    userSec.append(objDiv);

    var userFinish = userArr[Math.floor(Math.random() * userArr.length)];

    var userText = document.createElement("h3")
    userText.textContent = nameInput.value + userFinish;

    objDiv.appendChild(userText);

};

submit.addEventListener("click", submitted);