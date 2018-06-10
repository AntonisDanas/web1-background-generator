var button = document.getElementById("submitButton");
var input = document.getElementById("inputText");
var list = document.getElementById("itemList");


var CheckIfInputIsEmpty = function()
{
    return input.value.length > 0;
}

var SetInputToEmpty = function()
{
    input.value = "";
}

var InsertElementToList = function(value)
{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(value));
    list.appendChild(li);
}

var InputBySubmit = function()
{
    if (CheckIfInputIsEmpty())
    {
        InsertElementToList(input.value);
        SetInputToEmpty()
    }
}

var InputByEnter = function(event)
{
    if (CheckIfInputIsEmpty() && event.keyCode === 13)
    {
        InsertElementToList(input.value);
        SetInputToEmpty();
    }
}

button.addEventListener("click",InputBySubmit);
input.addEventListener("keypress",InputByEnter);




const array = [1, 2, 3, 4];
console.log(array);
const double = [];
const newArray = array.forEach((num) =>
{
    double.push(num*2);
})

console.log(double);

const mapArray = array.map((num) =>
{
    return num*3;
})

console.log(mapArray);

const filterArray = array.filter(num => num > 2);

console.log(filterArray);

class Player 
{
    constructor(name, type)
    {
        this.name = name;
        this.type = type;
    }

    introduce()
    {
        console.log(`Hi! My name is ${this.name}, I\'m a ${this.type}.`);
    }
}

class Wizard extends Player
{
    constructor(name)
    {
        super(name,"Wizard");
    }

    play()
    {
        console.log("I'm playing!!");
    }
}