$("document").ready(function() {


    function returnString(params) {
        var split = params.split(" ");
        for (var i = 0; i < split.length; i++) {
            if (split[i] >= "a" && split[i] <= "z") {
                return split[i];
            }
        }

    }


    function generateNewRandom(tags, className) {

        var i = 0;
        while (i != 4) {
            var index = Math.floor(Math.random() * 4)
            if (tags[index] != "") {
                console.log(tags[index])
                $(className).append(tags[index])
                tags[index] = ""
                i++;
            } else {
                while (tags[index] == "") {
                    index = Math.floor(Math.random() * 4)
                }
            }
        }

    }




    const tag = [`<img src="https://image.shutterstock.com/image-photo/red-apple-on-white-background-260nw-158989157.jpg" width="50px" height="50px" id="apple" />`, `
    <img src="https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg" width="50px" height="50px" id="banana" />`,
        `<img src="https://image.shutterstock.com/image-photo/orange-fruit-slices-leaves-isolated-260nw-1386912362.jpg" width="50px" height="50px" id="orange" />`,
        `<img src="data:image/jpeg;base64,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"
            width="50px" height="50px" id="pineapple" />`,
        `<img src="https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-strawberrie-558x600.jpg" width="50px" height="50px" id="strawberry" />`
    ]

    generateNewRandom(tag, ".fruits");


    const draggg = [`<div id="apple-drop" style="font-size:1px">
    <img src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&w=1000&q=80" width="50px" height="50px" /> apple
</div>`,
        `<div id="banana-drop" style="font-size:1px">
        <img src="https://thumbs-prod.si-cdn.com/GQWa1qJUrzp6l27gnhxhwMAtkpI=/fit-in/1600x0/https://public-media.si-cdn.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg" width="50px" height="50px" />banana
    </div>`,
        ` <div id="orange-drop" style="font-size:1px">
        <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/272/272782/oranges-in-a-box.jpg" width="50px" height="50px" /> orange
    </div>`,
        `<div id="pineapple-drop" style="font-size:1px">
        <img src="https://i.ndtvimg.com/mt/cooks/2014-11/pineapple-annanas.jpg" width="50px" height="50px" /> pineapple
    </div>`,
        `  <div id="strawberry-drop" style="font-size:1px">
        <img src="data:image/jpeg;base64,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" width="50px" height="50px" /> strawberry
    </div>`

    ]

    generateNewRandom(draggg, ".drop");




    var score = 0;
    var name = prompt("Please enter your name");
    var attempt = 0;


    var draggable = ["#apple", "#banana", "#orange", "#pineapple"];

    for (var i = 0; i < draggable.length; i++) {
        $(draggable[i]).draggable({
            // revert: true
            container: '#drop',
        });
    }

    var dropable = ["#apple-drop", "#banana-drop", "#orange-drop", "#pineapple-drop"];

    for (var i = 0; i < dropable.length; i++) {
        // console.log(dropable[i])
        $(dropable[i]).droppable({
            drop: function(Event, ui) {

                var anotherElement = Event.toElement.id.toString();
                // console.log(returnString($(this).text()));
                var current = returnString($(this).text());
                var getValue = "";

                for (var j = 0; j < anotherElement.length; j++) {
                    getValue += current[j];

                }

                console.log(getValue, anotherElement.length)
                if (anotherElement === getValue) {
                    var audioplay = new Audio("yey.mp3")
                    audioplay.play()
                    score++;
                    $("#score").html(`<h1> score: ${score}`);
                    attempt++;
                    if (attempt == 4) {
                        alert("Game over your score is : " + score);
                        window.location = `index.php?score=${score}&name=${name}`;
                    }
                    // ui.draggable.draggable('option', 'revert', true);
                } else {
                    ui.draggable.draggable('option', 'revert', false);
                    attempt++;
                    var audioplay = new Audio("oo.mp3")
                    audioplay.play()
                    if (attempt == 4) {
                        alert("Game over your score is : " + score);
                        window.location = `index.php?score=${score}&name=${name}`;
                    }
                }

                $(`#${Event.toElement.id}`).draggable('disable');
                $(this).droppable('disable');

            }
        })


    }

    var min = 1;
    var sec = 60;


    const timer = setInterval(function() {
        if (min <= 0 && sec <= 0) {
            $(".fruits").html("TIMES UP!");
            $(".drop").html("BETTER LUCK NEXT TIME");
            clearInterval(timer)
        }
        sec -= 1;
        $("#timer").html(`${min}:${sec}`)
        if (sec == 0 && min > 0) {
            min -= 1;
            sec = 60;
        }

    }, 1000)





})