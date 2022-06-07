let button = document.getElementById("btnOne");
let div = document.getElementById("box")

//onevent

//addeventlistener
button.addEventListener(
    "click",
    function() {
        alert("hello");
    }
);

div.addEventListener(
    "click",
    function () {
        this.style.backgroundColor = 'green';
    }
);





