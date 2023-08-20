function genrateRandom(){
    var n = Math.random(0,6);
    n = n*6+1;
    n = Math.floor(n);
    return n;
}


function rollDicee1(){
    var score1 = genrateRandom();
     var imageElement1 = document.getElementById("img1");
     if(score1 === 1){
        imageElement1.src = "images/dice1.png"; 
     }else if (score1 === 2){
        imageElement1.src = "images/dice2.png";
     }else if (score1 === 3){
        imageElement1.src = "images/dice3.png";
     }else if (score1 === 4){
        imageElement1.src = "images/dice4.png";
     }else if (score1 === 5){
        imageElement1.src = "images/dice5.png";
     }else if (score1 === 6){
        imageElement1.src = "images/dice6.png";
     }
     return score1;
}

function rollDicee2(){
    var score2 = genrateRandom();
    var imageElement2 = document.getElementById("img2");
    if(score2 === 1){
       imageElement2.src = "images/dice1.png"; 
    }else if (score2 === 2){
       imageElement2.src = "images/dice2.png";
    }else if (score2 === 3){
       imageElement2.src = "images/dice3.png";
    }else if (score2 === 4){
       imageElement2.src = "images/dice4.png";
    }else if (score2 === 5){
       imageElement2.src = "images/dice5.png";
    }else if (score2 === 6){
       imageElement2.src = "images/dice6.png";
    }
    return score2
}

function play(){
    var player1 = rollDicee1();
    var player2 = rollDicee2();
    var title = document.getElementById("title");
    if(player1 > player2){
        title.innerHTML = 'player 1 Win !';
        console.log("player 1 win.");
    }
    else if(player1 < player2){
        title.innerHTML = 'player 2 Win';
        console.log("player 2 win.");
    }else{
        title.innerHTML = 'its a Draw !';
    }

}

