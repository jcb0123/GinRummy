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

function 