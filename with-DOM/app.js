document.addEventListener("DOMContentLoaded", function () {
    //create a button that when clicked will alert a nice message:
    let btn = document.createElement("button");
    btn.innerText = "Click me to hear something nice";
    document.body.appendChild(btn);

    btn.addEventListener('click', function () {
        alert("damn, ur cool");
    });

    //create a button & textbox in the HTML
    //whenever the button is clicked create an alert with the textbox input:
    document.getElementById('newBtn').addEventListener('click', function () {
        let message = document.getElementById('textBox').value;
        alert(message);
    });

    //create a div in HTML
    let myDiv = document.createElement('div')
    myDiv.id = "test";
    myDiv.innerText = "this is my cute div";
    document.body.appendChild(myDiv)
    myDiv.className = 'div';


    //without using css:hover, make the background color change when you hover the div
    //div should return to original color when not hovered:
    document.getElementById("test").addEventListener("mouseover", over);
    document.getElementById("test").addEventListener("mouseout", out);

    function over() {
        document.getElementById("test").style.backgroundColor = "pink";
    };
    function out() {
        document.getElementById("test").style.backgroundColor = "white";
    };


    //create a paragraph in the HTML with some text
    let p = document.createElement("p");
    p.id = "para";
    p.innerText = "I am a paragraph. If you click on me then I will change color. That's pretty cool. Yeah. Thanks. Ok.";
    document.body.appendChild(p);

    //create a function that makes the paragraph text color change when clicked:
    let colors = [
        "cornflowerBlue",
        "bisque",
        "coral",
        "darkOrange",
        "tomato",
        "orangeRed",
        "indianRed",
        "peachPuff",
        "lemonChiffon",
        "papayaWhip",
    ];

    function randomColor() {
        let newColor = colors[Math.floor(Math.random() * colors.length)];
        return newColor;
    }
    p.addEventListener("click", function () {
        let newColor = randomColor();
        p.style.color = newColor;
    });

    //add a button & an empty div:
    let btn2 = document.createElement("button");
    btn2.innerText = "click for my name!";
    btn2.className = "btn2";
    document.body.appendChild(btn2)
    let div2 = document.createElement("div");
    div2.className = "div2";
    div2.id = "div2.id";
    document.body.appendChild(div2);

    //create span with your name when button is clicked:

    btn2.addEventListener("click", function () {
        let newSpan = document.createElement("span");
        newSpan.id = "mySpan";
        newSpan.innerText = "ellen branks";
        (div2).appendChild(newSpan);
    });

    //create an array of friends and a button that turns each friend into an unordered list item:
    let myFriends = [
        "Devon",
        "Bethany",
        "Liz",
        "Jessica",
        "Haden",
        "Blu",
        "Taylor",
        "Michael",
        "Sarah",
        "Laine",
    ];

    let btn3 = document.getElementById('myFriendsBtn')
    let i = 0;
    btn3.addEventListener("click", function () {
        let ul = document.getElementById('list');
        if (i < myFriends.length) {
            let friend = myFriends[i];
            let li = document.createElement("li");
            li.textContent = friend;
            ul.appendChild(li);
            i++;
        } else if (i = myFriends.length) {
            alert("i don't have anymore friends :( ")
        }
    });
});


