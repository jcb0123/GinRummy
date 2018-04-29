var deck = new Array();
var suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var player1 = new Array();
var player2 = new Array();

function createDeck(){
    for(var i=0; i < suits.length; i++){
        for(var j=0; j < values.length; i++){
            var card = {value: values[j], suit: suits[j]};
            deck.push(card);
        }
    }
    return deck;
}

function shuffle(){
    
    for(var i=0; i<1000; i++){
        var card1 = Math.floor(Math.random() * deck.length);
        var card2 = Math.floor(Math.random() * deck.length);
    
        var tmp = deck[card1];
        deck[card1] = deck[card2];
        deck[card2] = tmp;
    }
}

function deal(){

var count = 0;

    while(count <= 10){
        var card = deck.pop();
        player1.push(card);
        var card = deck.pop();
        player2.push(card);
        count++;
    }
}

function pickCard(var card, player){
    if(card.suit = Spades){
        switch(card.values){
            case "A":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("AS");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/AS.png");
                document.getElementById("AS").appendChild("image");
                break;
            case "2":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("2S");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/2S.png");
                document.getElementById("2S").appendChild("image");
                break;
            case "3":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("3S");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/3S.png");
                document.getElementById("3S").appendChild("image");
                break;
            case "4":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("4S");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/4S.png");
                document.getElementById("4S").appendChild("image");
                break;
            case "5":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("5S");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/5S.png");
                document.getElementById("5S").appendChild("image");
                break;
            case "6":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("6S");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/6S.png");
                document.getElementById("6S").appendChild("image");
                break;
            case "7":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("7S");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/7S.png");
                document.getElementById("7S").appendChild("image");
                break;
            case "8":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("8S");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/8S.png");
                document.getElementById("8S").appendChild("image");
                break;
            case "9":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("9S");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/9S.png");
                document.getElementById("9S").appendChild("image");
                break;
            case "10":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("10S");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/10S.png");
                document.getElementById("10S").appendChild("image");
                break;
            case "J":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("JS");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/JS.png");
                document.getElementById("JS").appendChild("image");
                break;
            case "Q":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("QS");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/QS.png");
                document.getElementById("QS").appendChild("image");
                break;
            case "K":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("KS");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/KS.png");
                document.getElementById("KS").appendChild("image");
                break;
        }   //end of Spades Switch statement
    }       //end of Spades if statement
    
    else if(card.suit == "Diamonds"){
        switch(card.values){
            case "A":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("AD");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/AD.png");
                document.getElementById("AD").appendChild("image");
                break;
            case "2":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("2D");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/2D.png");
                document.getElementById("2D").appendChild("image");
                break;
            case "3":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("3D");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/3D.png");
                document.getElementById("3D").appendChild("image");
                break;
            case "4":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("4D");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/4D.png");
                document.getElementById("4D").appendChild("image");
                break;
            case "5":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("5D");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/5D.png");
                document.getElementById("5D").appendChild("image");
                break;
            case "6":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("6D");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/6D.png");
                document.getElementById("6D").appendChild("image");
                break;
            case "7":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("7D");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/7D.png");
                document.getElementById("7D").appendChild("image");
                break;
            case "8":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("8D");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/8D.png");
                document.getElementById("8D").appendChild("image");
                break;
            case "9":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("9D");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/9D.png");
                document.getElementById("9D").appendChild("image");
                break;
            case "10":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("10D");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/10D.png");
                document.getElementById("10D").appendChild("image");
                break;
            case "J":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("JD");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/JD.png");
                document.getElementById("JD").appendChild("image");
                break;
            case "Q":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("QD");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/QD.png");
                document.getElementById("QD").appendChild("image");
                break;
            case "K":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("KD");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/KD.png");
                document.getElementById("KD").appendChild("image");
                break;
        }   //end of Diamonds Switch statement
    }       //end of Diamonds if statement
    
    else if(card.suit == "Clubs"){
        switch (card.values){
            case "A":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("AC");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/AC.png");
                document.getElementById("AC").appendChild("image");
                break;
            case "2":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("2C");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/2C.png");
                document.getElementById("2C").appendChild("image");
                break;
            case "3":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("3C");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/3C.png");
                document.getElementById("3C").appendChild("image");
                break;
            case "4":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("4C");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/4C.png");
                document.getElementById("4C").appendChild("image");
                break;
            case "5":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("5C");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/5C.png");
                document.getElementById("5C").appendChild("image");
                break;
            case "6":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("6C");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/6C.png");
                document.getElementById("6C").appendChild("image");
                break;
            case "7":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("7C");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/7C.png");
                document.getElementById("7C").appendChild("image");
                break;
            case "8":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("8C");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/8C.png");
                document.getElementById("8C").appendChild("image");
                break;
            case "9":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("9C");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/9C.png");
                document.getElementById("9C").appendChild("image");
                break;
            case "10":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("10C");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/10C.png");
                document.getElementById("10C").appendChild("image");
                break;
            case "J":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("JC");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/JC.png");
                document.getElementById("JC").appendChild("image");
                break;
            case "Q":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("QC");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/QC.png");
                document.getElementById("QC").appendChild("image");
                break;
            case "K":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("KC");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/KC.png");
                document.getElementById("KC").appendChild("image");
                break;
        }   //end of Clubs switch statement
    }       //end of Clubs if statement
    
    else if(card.suit == "Hearts"){
        swtich (card.values){
            case "A":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("AH");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/AH.png");
                document.getElementById("AH").appendChild("image");
                break;
            case "2":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("2H");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/2H.png");
                document.getElementById("2H").appendChild("image");
                break;
            case "3":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("3H");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/3H.png");
                document.getElementById("3H").appendChild("image");
                break;
            case "4":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("4H");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/4H.png");
                document.getElementById("4H").appendChild("image");
                break;
            case "5":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("5H");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/5H.png");
                document.getElementById("5H").appendChild("image");
                break;
            case "6":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("6H");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/6H.png");
                document.getElementById("6H").appendChild("image");
                break;
            case "7":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("7H");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/7H.png");
                document.getElementById("7H").appendChild("image");
                break;
            case "8":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("8H");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/8H.png");
                document.getElementById("8H").appendChild("image");
                break;
            case "9":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("9H");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/9H.png");
                document.getElementById("9H").appendChild("image");
                break;
            case "10":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("10H");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/10H.png");
                document.getElementById("10H").appendChild("image");
                break;
            case "J":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("JH");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/JH.png");
                document.getElementById("JH").appendChild("image");
                break;
            case "Q":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("QH");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/QH.png");
                document.getElementById("QH").appendChild("image");
                break;
            case "K":
                var button = document.createElement("button");
                button.type = ("button");
                button.id = ("KH");
                if(player == 1){
                    document.getElementById("hand1").appendChild("button");
                }
                else if(player == 2){
                    document.getElementById("hand2").appendChild("button");
                }
                var image = document.createElement("img");
                image.src = ("src", "images/KH.png");
                document.getElementById("KH").appendChild("image");
                break;
        }   //end of Hearts switch statement
    }       //end of Hearts if statement
}

function displayHands(){
    for(var i=0; i<player1.length; i++){
        var card1 = player1[i].card;
        pickCard(card1.suit, 1);
    }
    
    for(var j=0; j<player2.length; i++){
        var card2 = player2[i].card;
        pickCard(card2.suit, 2);
    }
    
}

function discard1(){
    
}

function discard2(){
    
}

function loadGame{
    createDeck();
    shuffle();
    deal();
    displayHands();
}

window.addEventListener(load, loadGame)