var inputForm = document.querySelector('#input-form');
var userSec = document.querySelector('#user-sec');
var nameInput = document.querySelector('#name-input');
var submit = document.querySelector('#sbmt-btn');
var animalInput = document.querySelector("#animal-input");
var persStr = document.querySelector("#pers");

var userArr = ["Inator", "Killer", "Cutter", "Swagger", "Michael", "Robot", "droid", "wizard", "raptor", "flower", "sun", "space", "train"];

var submitted = function(event) {

    event.preventDefault();

    var objDiv = document.createElement("div");
    objDiv.setAttribute("id", "profile-div");

    userSec.append(objDiv);

    var userFinish = userArr[Math.floor(Math.random() * userArr.length)];

    var userText = document.createElement("h3")
    var inputStr = nameInput.value.replaceAll(" ", "");
    userText.textContent = inputStr + userFinish;

    objDiv.appendChild(userText);

    var searchStr = animalInput.textContent + persStr.value;

    
    fetch('https://api.giphy.com/v1/gifs/search?q=' + searchStr + '&api_key=2WCCtsAYzLPcXYXldVYiYd41E1x6jlfT')
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(response.data[0]);
        // Create a variable that will select the <div> where the GIF will be displayed
        var imgContainter = document.createElement("div");
        userSec.appendChild(imgContainter);
        // Empty out the <div> before we append a GIF to it
        imgContainter.innerHTML = '';

        var gifImg = document.createElement('img');
        gifImg.setAttribute('src', response.data[0].images.fixed_height.url);

        // Append 'gifImg' to the <div>
        imgContainter.appendChild(gifImg);
    });
};

console.log(persStr.value);

submit.addEventListener("click", submitted);