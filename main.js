
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var colorPrint = document.getElementById("colorPrint");


var ChangeBackground = function () {
    body.style.background = "linear-gradient(to right, "
                            + color1.value 
                            + ", "
                            + color2.value 
                            + ")";
    colorPrint.textContent = color1.value + " " + color2.value;
};

color1.addEventListener("input", ChangeBackground);

color2.addEventListener("input", ChangeBackground);