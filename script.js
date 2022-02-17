var p1 = "Player 1";
var p2 = "Player 2";
  
//change player's name
function editPlayerNames() {
    p1 = prompt("Enter 1st Player's Name:");
    p2 = prompt("Enter 2nd player's Name:");
  
    document.querySelector("p.player1").innerHTML = p1;
    document.querySelector("p.player2").innerHTML = p2;
}
  
//to roll dice 
function roll() {
    setTimeout(function () {
        var player1 = Math.floor(Math.random() * 6) + 1;
        var player2 = Math.floor(Math.random() * 6) + 1;
  
        document.querySelector(".img1").setAttribute("src",
            "dice/dice" + player1 + ".png");
  
        document.querySelector(".img2").setAttribute("src",
            "dice/dice" + player2 + ".png");
  
        if (player1 === player2) {
            document.querySelector("h3").innerHTML = "Draw!";
            const para = document.createElement("div");
            const node = document.createTextNode("Draw");
            para.appendChild(node);
            const element = document.getElementById("history");
            element.appendChild(para);
        }
  
        else if (player1 < player2) {
            document.querySelector("h3").innerHTML = (p2 + " WINS!");
            const para = document.createElement("div");
            const node = document.createTextNode(p2 + " Wins!");
            para.appendChild(node);
            const element = document.getElementById("history");
            element.appendChild(para);
        }
  
        else {
            document.querySelector("h3").innerHTML = (p1 + " WINS!");
            const para = document.createElement("div");
            const node = document.createTextNode(p1 + " Wins");
            para.appendChild(node);
            const element = document.getElementById("history");
            element.appendChild(para);
        }
    }, 0);
}