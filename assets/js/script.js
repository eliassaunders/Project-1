var inputForm = document.querySelector('#input-form');
var userSec = document.querySelector('#user-sec');
var nameInput = document.querySelector('#name-input');
var submit = document.querySelector('#sbmt-btn');
var animalInput = document.querySelector("#animal-input");
var persStr = document.querySelector("#pers");

var userArr = ["Inator", "Killer", "Cutter", "Swagger", "Michael", "Robot", "droid", "wizard", "raptor", "flower", "sun", "lover", "fighter", "hater"];

var submitted = function (event, objDiv) {

    event.preventDefault();

    var objDiv = document.createElement("div");
    objDiv.setAttribute("id", "profile-div");
    objDiv.setAttribute("class", "card");
    objDiv.setAttribute("height", "400px");
    objDiv.setAttribute("wdith", "300px");

    userSec.append(objDiv);

    var userFinish = userArr[Math.floor(Math.random() * userArr.length)];

    var userText = document.createElement("h3")
    var inputStr = nameInput.value.replaceAll(" ", "");
    userText.setAttribute("class", "card-header");
    userText.textContent = inputStr + userFinish;

    objDiv.appendChild(userText);

    var searchStr = persStr.value + "+" + animalInput.value;

    console.log(searchStr)

    fetch('https://api.giphy.com/v1/gifs/search?q=' + searchStr + '&api_key=2WCCtsAYzLPcXYXldVYiYd41E1x6jlfT')
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response.data[0]);
            // Create a variable that will select the <div> where the GIF will be displayed 

            var imgContainter = document.createElement("div");
            var profText = document.createElement("h3");
            profText.textContent = "Your profile gif:"
            objDiv.appendChild(profText);
            objDiv.appendChild(imgContainter);

            // Empty out the <div> before we append a GIF to it
            imgContainter.innerHTML = '';

            var gifImg = document.createElement('img');
            gifImg.setAttribute("height", "200px");
            gifImg.setAttribute("width", "200px");
            gifImg.setAttribute('src', response.data[0].images.fixed_height.url);

            // Append 'gifImg' to the <div>
            imgContainter.appendChild(gifImg);

            var buttonG = document.createElement("button");
            buttonG.textContent = "Give me an interest"
            buttonG.setAttribute("class", "card-button")

            fetch("https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*")
                .then(function (response) {
                    console.log(response);
                    response.json().then(function (article) {
                        var diplayEl = document.createElement("p");
                        console.log(article);
                        diplayEl.textContent = article.query.random[0].title;

                        objDiv.appendChild(diplayEl);
                    })

                })

        });
};



submit.addEventListener("click", submitted);