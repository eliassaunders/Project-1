var inputForm = document.querySelector('#input-form');
var userSec = document.querySelector('#user-sec');
var nameInput = document.querySelector('#name-input');
var submit = document.querySelector('#sbmt-btn');
var animalInput = document.querySelector("#animal-input");
var persStr = document.querySelector("#pers");
var ratingEl = document.querySelector("#rating");

var userArr = ["Inator", "Killer", "Cutter", "Swagger", "Michael", "Robot", "Droid", "Wizard", "raptor", "Flower", "Sun", "Lover", "Fighter", "Hater"];

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

            var bio1 = document.createElement("p");
            bio1.textContent = "Hello I am " + inputStr + ". " + inputStr + " loves to run through fields and " + inputStr + " enjoys the presence of other people and animals." + inputStr + 
            " likes candy, horses and botox" ;
            bio1.setAttribute("class", "card-text");

            var bio2 = document.createElement("p");
            bio2.textContent = "Hello I am " + inputStr + ". " + inputStr + " loves cartoon violence, mild thematic elements and anything that strays from g rated content." + inputStr + 
            " I love to fish, hunt and look for minerals. " + inputStr + "'s fave show is Avatar: The Last Airbender";
            bio2.setAttribute("class", "card-text");

            var bio3 = document.createElement("p");
            bio3.textContent = "Hello I am " + inputStr + ". " + inputStr + " is out here wildin and shit. Go Bears! " + inputStr + " enjoys firearms, tobacco, using minor swear words, and gambling. Patriots fucking suck!";
            bio3.setAttribute("class", "card-text");

            var bio4 = document.createElement("p");
            bio4.textContent = "Hello I am " + inputStr + ". " + inputStr + "can now say fuck indiscriminetly. This bio will be very fucking vile. " + inputStr + " enjoys hard drugs, partying and adultury" + inputStr + "is an Aquarius in bed";
            bio4.setAttribute("class", "card-text");

            if (ratingEl.value === "g") {
                objDiv.appendChild(bio1);
            } else if (ratingEl.value === "pg") {
                objDiv.appendChild(bio2);
            } else if (ratingEl.value === "pg-13"){
                objDiv.appendChild(bio3);
            } else if (ratingEl.value === "r") {
                objDiv.appendChild(bio4);
            }
            fetch("https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*")
                .then(function (response) {
                    console.log(response);
                    response.json().then(function (article) {
                        var diplayEl = document.createElement("p");
                        console.log(article);
                        diplayEl.textContent = "My interest: " + article.query.random[0].title;

                        objDiv.appendChild(diplayEl);
                    })

                })

        });
};



submit.addEventListener("click", submitted);