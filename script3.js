let myImage = document.getElementById("myPhoto");
let myButton = document.getElementById("btnAnalyse");
let results = document.getElementById("myText");

let imageURL = myImage.src;

results.innerHTML = imageURL;

myButton.addEventListener("click", function () {
    ImageAPI.analyseFaces(imageURL, function(data) {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            let age = data[i].faceAttributes.age;
            resultsTxt = '<p>Face '+ (i+1) + ' Age: ' + age + '</p>';
            results.innerHTML += resultsTxt;
        }
    });
});


