var words = ["Santa", "Easter Bunny", "Batman", "Jack Frost", "tooth fairy", "Uncle Sam"];
var score = 0;
var guesses = 0;
var highScore = 0;
var correct = 0;
var word = "";
var dashes = "";
var letters = "";

function drawToScreen()
{
    document.getElementById("letters").innerText = letters;
    document.getElementById("score").innerText = score;
    document.getElementById("guesses").innerText = guesses;
    document.getElementById("dashes").innerText = dashes;
}

function fillInBlanks(x)
{
    for(var i =0; i < word.length; i++)
    {
        if(word.indexOf(i) == x)
        {
            word = word.slice(0,i) + x + word.slice(i,word.length);
            correct++;
        }
    }
}

function pickWord()
{
    letters = "";
    correct = 0;
    if(words.length > 0)
    {
        var rand = Math.floor(Math.random()*words.length);
        word = words[rand]
        for(var i = 0; i < word.length; i++)
        {
            if(word.indexOf(i) == " ")
            {
                dashes += " "; 
                correct++;
            }
            else
            {
                dashes += "_";
            }
        }
        words.splice(rand, 1);
        drawToScreen();
    }
    else
    {
        window.alert("YOU WON!");
    }
}

document.onkeyup = function(event)
{
    var keyPressed = event.key;
    if(correct == word.length)
    {
        window.alert("You got it!\nthe word was:" + word);
        score++;
        if(score > highScore)
        {
            highScore = score;
        }
        pickWord();
    }
    if ((event.keyCode > 64 && event.keyCode < 91) && !letters.includes(keyPressed))
    {
        console.log(keyPressed);
        if(word.includes(keyPressed))
        {
            fillInBlanks(keyPressed);
        }
        else
        {
            guesses--;
        }
        letters += keyPressed;
        drawToScreen();
    }
}

window.onload = function()
{
    pickWord();
}