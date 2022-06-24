let multi = 1;

let box1Count = 1;
let box2Count = 1;
let box3Count = 1;
let box4Count = 1;
let box5Count = 1;
let box6Count = 1;
let box7Count = 1;

let gameOn = true;

function restart(){
    multi = 1;

    box1Count = 1;
    box2Count = 1;
    box3Count = 1;
    box4Count = 1;
    box5Count = 1;
    box6Count = 1;
    box7Count = 1;

    gameOn = true;
    document.getElementById("multi").innerHTML = "1X";
    document.getElementById("pointDeath").innerHTML = "";

    document.getElementById("multiBet").innerHTML = "";
    document.getElementById("box1").innerHTML = "1X";
    document.getElementById("box2").innerHTML = "1X";
    document.getElementById("box3").innerHTML = "1X";
    document.getElementById("box4").innerHTML = "1X";
    document.getElementById("box5").innerHTML = "1X";
    document.getElementById("box6").innerHTML = "1X";
    document.getElementById("box7").innerHTML = "1X";

    document.getElementById("box1").style.backgroundColor = "antiquewhite";
    document.getElementById("box2").style.backgroundColor = "antiquewhite";
    document.getElementById("box3").style.backgroundColor = "antiquewhite";
    document.getElementById("box4").style.backgroundColor = "antiquewhite";
    document.getElementById("box5").style.backgroundColor = "antiquewhite";
    document.getElementById("box6").style.backgroundColor = "antiquewhite";
    document.getElementById("box7").style.backgroundColor = "antiquewhite";

    document.getElementById("box1").style.color = "black";
    document.getElementById("box2").style.color = "black";
    document.getElementById("box3").style.color = "black";
    document.getElementById("box4").style.color = "black";
    document.getElementById("box5").style.color = "black";
    document.getElementById("box6").style.color = "black";
    document.getElementById("box7").style.color = "black";

    document.getElementById("prize").innerHTML = "";
}

function spin(){
    document.getElementById("point1").innerHTML = "";
    document.getElementById("point2").innerHTML = "";
    document.getElementById("point3").innerHTML = "";
    document.getElementById("point4").innerHTML = "";
    document.getElementById("point5").innerHTML = "";
    document.getElementById("point6").innerHTML = "";
    document.getElementById("point7").innerHTML = "";


    let bet = $("#bet").val()
    document.getElementById("multiBet").innerHTML = bet;

    let random = Math.floor(Math.random() * 8);

    //Death
    if (random === 0){
    gameOn = false
        let prize = multi*bet;
        let parsePrize = parseInt(prize);
        document.getElementById("prize").innerHTML = "=" + parsePrize;
        document.getElementById("pointDeath").innerHTML = "_";
    }

    //Boxes
if(gameOn === true){
//Box1
    if(random === 1){
        document.getElementById("point1").innerHTML = "_";
        box1Count++

        if(box1Count === 2){
            multi++;
            document.getElementById("box1").innerHTML = "10X";
            document.getElementById("box1").style.backgroundColor = "#ffdf8f";
        }

        if(box1Count === 3){
            multi+=10;
            document.getElementById("box1").innerHTML = "25X";
            document.getElementById("box1").style.backgroundColor = "#ff922b";
        }

        if(box1Count === 4){
            multi+=25;
            document.getElementById("box1").innerHTML = "100X";
            document.getElementById("box1").style.backgroundColor = "#ff3f21";
        }

        if(box1Count === 5){
            multi+=100;
            document.getElementById("box1").innerHTML = "250X";
            document.getElementById("box1").style.backgroundColor = "#710000";
            document.getElementById("box1").style.color = "white";
        }

        if(box1Count > 5){
            multi+=250;
        }

    }

    //Box2
    if(random === 2){
        document.getElementById("point2").innerHTML = "_";
        box2Count++

        if(box2Count === 2){
            multi++;
            document.getElementById("box2").innerHTML = "10X";
            document.getElementById("box2").style.backgroundColor = "#ffdf8f";
        }

        if(box2Count === 3){
            multi+=10;
            document.getElementById("box2").innerHTML = "25X";
            document.getElementById("box2").style.backgroundColor = "#ff922b";
        }

        if(box2Count === 4){
            multi+=25;
            document.getElementById("box2").innerHTML = "100X";
            document.getElementById("box2").style.backgroundColor = "#ff3f21";
        }

        if(box2Count === 5){
            multi+=100;
            document.getElementById("box2").innerHTML = "250X";
            document.getElementById("box2").style.backgroundColor = "#710000";
            document.getElementById("box2").style.color = "white";
        }

        if(box2Count > 5){
            multi+=250;
        }

    }

    //Box3
    if(random === 3){
        document.getElementById("point3").innerHTML = "_";
        box3Count++

        if(box3Count === 2){
            multi++;
            document.getElementById("box3").innerHTML = "10X";
            document.getElementById("box3").style.backgroundColor = "#ffdf8f";
        }

        if(box3Count === 3){
            multi+=10;
            document.getElementById("box3").innerHTML = "25X";
            document.getElementById("box3").style.backgroundColor = "#ff922b";
        }

        if(box3Count === 4){
            multi+=25;
            document.getElementById("box3").innerHTML = "100X";
            document.getElementById("box3").style.backgroundColor = "#ff3f21";
        }

        if(box3Count === 5){
            multi+=100;
            document.getElementById("box3").innerHTML = "250X";
            document.getElementById("box3").style.backgroundColor = "#710000";
            document.getElementById("box3").style.color = "white";
        }

        if(box3Count > 5){
            multi+=250;
        }

    }

    //Box4
    if(random === 4){
        document.getElementById("point4").innerHTML = "_";
        box4Count++

        if(box4Count === 2){
            multi++;
            document.getElementById("box4").innerHTML = "10X";
            document.getElementById("box4").style.backgroundColor = "#ffdf8f";
        }

        if(box4Count === 3){
            multi+=10;
            document.getElementById("box4").innerHTML = "25X";
            document.getElementById("box4").style.backgroundColor = "#ff922b";
        }

        if(box4Count === 4){
            multi+=25;
            document.getElementById("box4").innerHTML = "100X";
            document.getElementById("box4").style.backgroundColor = "#ff3f21";
        }

        if(box4Count === 5){
            multi+=100;
            document.getElementById("box4").innerHTML = "250X";
            document.getElementById("box4").style.backgroundColor = "#710000";
            document.getElementById("box4").style.color = "white";
        }

        if(box4Count > 5){
            multi+=250;
        }

    }

    //Box5
    if(random === 5){
        document.getElementById("point5").innerHTML = "_";
        box5Count++

        if(box5Count === 2){
            multi++;
            document.getElementById("box5").innerHTML = "10X";
            document.getElementById("box5").style.backgroundColor = "#ffdf8f";
        }

        if(box5Count === 3){
            multi+=10;
            document.getElementById("box5").innerHTML = "25X";
            document.getElementById("box5").style.backgroundColor = "#ff922b";
        }

        if(box5Count === 4){
            multi+=25;
            document.getElementById("box5").innerHTML = "100X";
            document.getElementById("box5").style.backgroundColor = "#ff3f21";
        }

        if(box5Count === 5){
            multi+=100;
            document.getElementById("box5").innerHTML = "250X";
            document.getElementById("box5").style.backgroundColor = "#710000";
            document.getElementById("box5").style.color = "white";
        }

        if(box5Count > 5){
            multi+=250;
        }

    }

    //Box6
    if(random === 6){
        document.getElementById("point6").innerHTML = "_";
        box6Count++

        if(box6Count === 2){
            multi++;
            document.getElementById("box6").innerHTML = "10X";
            document.getElementById("box6").style.backgroundColor = "#ffdf8f";
        }

        if(box6Count === 3){
            multi+=10;
            document.getElementById("box6").innerHTML = "25X";
            document.getElementById("box6").style.backgroundColor = "#ff922b";
        }

        if(box6Count === 4){
            multi+=25;
            document.getElementById("box6").innerHTML = "100X";
            document.getElementById("box6").style.backgroundColor = "#ff3f21";
        }

        if(box6Count === 5){
            multi+=100;
            document.getElementById("box6").innerHTML = "250X";
            document.getElementById("box6").style.backgroundColor = "#710000";
            document.getElementById("box6").style.color = "white";
        }

        if(box6Count > 5){
            multi+=250;
        }

    }

    //Box7
    if(random === 7){
        document.getElementById("point7").innerHTML = "_";
        box7Count++

        if(box7Count === 2){
            multi++;
            document.getElementById("box7").innerHTML = "10X";
            document.getElementById("box7").style.backgroundColor = "#ffdf8f";
        }

        if(box7Count === 3){
            multi+=10;
            document.getElementById("box7").innerHTML = "25X";
            document.getElementById("box7").style.backgroundColor = "#ff922b";
        }

        if(box7Count === 4){
            multi+=25;
            document.getElementById("box7").innerHTML = "100X";
            document.getElementById("box7").style.backgroundColor = "#ff3f21";
        }

        if(box7Count === 5){
            multi+=100;
            document.getElementById("box7").innerHTML = "250X";
            document.getElementById("box7").style.backgroundColor = "#710000";
            document.getElementById("box7").style.color = "white";
        }

        if(box7Count > 5){
            multi+=250;
        }

    }
}
    let multiPrint = parseInt(multi);
    document.getElementById("multi").innerHTML = multiPrint + "X";

}
