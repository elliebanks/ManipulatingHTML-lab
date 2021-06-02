document.addEventListener("DOMContentLoaded", function () {
    let btn = $('<button id="newBtn">issa button with a NICE message</button>');
    $('body').append(btn);

    let $submitBtn = $('#showInput');
    let $textInput = $('#textInput');

    //create a nice alert message when button is clicked
    $(document).ready(function () {
        btn.click(function (event) {
            alert("hello beautiful coder");
        });

        //when button is clicked display alert msg with the text input
        $submitBtn.click(function (event) {
            alert($("#textInput").val());
        });

        //create a div in html
        let myDiv = $('<div id="newDiv">issa div</div>');
        $('body').append(myDiv);

        //make div background change when hovered (without using hover)
        //make div background return to normal when not hovered

        $(myDiv).mouseover(function () {
            $(myDiv).css("background-color", "pink");
        });

        $(myDiv).mouseout(function () {
            $(myDiv).css("background-color", "white");
        });

        //create a paragraph with some text
        //make the paragraph text color red on click...and then comment it out.
        let p = $('<p></p>');
        $('body').append(p);
        $(p).text("this is a paragraph. i made it with jquery. i'm tired and want to take a nap, but i have to finish this lab. plz click me.");

        /*$(p).click(function () {
            $(p).css("color", "red");
        }); */

        //make the paragraph a random color
        let colors = [
            "cornflowerBlue",
            "papayaWhip",
            "cadetBlue",
            "crimson",
            "darkSeaGreen",
            "darkSalmon",
            "darkSlateGray",
            "darkTurquoise",
            "coral",
            "lightSeaGreen",
            "lightCoral",
            "powderBlue",
            "rosyBrown",
            "paleGoldenrod",

        ];

        $(p).click(function () {
            $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);

        });

        //make a button and an empty div
        let btn2 = $('<button>hello i forgot my name</button>');
        $('body').append(btn2)
        let div2 = $('<div></div>');
        $('body').append(div2);

        //when button is clicked create a span with your name & place in the empty div
        btn2.click(function () {
            let span = $('<span>');
            span.text('oh yes, it is ellen banks');
            (div2).append(span);
        });

        //create array of 10 friends
        let myFriends = [
            "mr. ben franklin",
            "dr. steve brule",
            "lil nas x",
            "little wayne",
            "matthew",
            "mark",
            "luke",
            "john",
            "julius caesar",
            "katy perry's baby",
        ];
        
        let i = 0;
        //when html btn3 is clicked, each friend's name should appear as a list item in the ul
        $('#btn3').click(function () {
            if (i < myFriends.length) {
                let friend = myFriends[i];
                $('#addItem').append('<li>' + friend + '</li>');
                i++;
            }
        });

    });
});
