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
        if(word[i] == x)
        {
            dashes = dashes.slice(0,i) + x + dashes.slice(i+1,dashes.length);
            correct++;
        }
    }
}

function pickWord()
{
    letters = "";
    dashes = "";
    correct = 0;
    if(words.length > 0)
    {
        var rand = Math.floor(Math.random()*words.length);
        word = words[rand].toLowerCase();
        for(var i = 0; i < word.length; i++)
        {
            if(word[i] == " ")
            {
                dashes += " ";
                correct++;
            }
            else
            {
                dashes += "_";
            }
        }
        console.log(word);
        guesses = Math.floor(word.length * 0.75);
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
    var keyPressed = event.key.toLowerCase();

    if ((event.keyCode > 64 && event.keyCode < 91) && !letters.includes(keyPressed))
    {
        letters += keyPressed;
        if(word.toLowerCase().includes(keyPressed))
        {
            fillInBlanks(keyPressed);
            if(correct == word.length)
            {
                window.alert("You got it!\nthe word was:" + word);
                score++;
                if(score > highScore)
                {
                    highScore = score;
                    document.getElementById("high-score").innerText = highScore;
                }
                pickWord();
            }
        }
        else
        {
            guesses--;
        }
        
        if(guesses < 1)
        {
            score = 0;
            window.alert("you lost");
            pickWord();
        }
        drawToScreen();
    }
}

window.onload = function()
{
    pickWord();
}
