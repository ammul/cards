import DefaultDeck from '../data/decks/default'
import CardService from "./CardService";

export default{
    config: {
      maxHand: 5
    },
    deck: {
        hand: [],
        library: [],
        graveyard: [],
        exile: []
    },
    setDeck: function(deck){
        this.deck = deck;
    },
    getDeck: function(){
        return this.deck;
    },
    loadDeck: function(deck){
        let currentDeck = null;

        switch(deck){
            case 'default':
                currentDeck = DefaultDeck;
                break;
        }

        for(let card of currentDeck.hand){
            this.deck.hand.push(CardService.load(card));
        }
        for(let card of currentDeck.library){
            this.deck.library.push(CardService.load(card));
        }
        for(let card of currentDeck.graveyard){
            this.deck.graveyard.push(CardService.load(card));
        }
        for(let card of currentDeck.exile){
            this.deck.exile.push(CardService.load(card));
        }

        console.log("loadDeck",this.deck);
    },
    shuffle: function(){
        let a = this.deck.library;

        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    },
    draw: function(amount){
        for(let i = 0; i < amount; i++){
            if(this.canDraw()){
                let card = this.deck.library.shift();
                this.deck.hand.push(card);
            }
        }
        return this.deck.hand;
    },
    canDraw: function(){
         if(this.deck.hand.length < this.config.maxHand){
             if(this.deck.library.length == 0 ){
                 this.reshuffle();
                 return true;
             }
             return true;
         }
         return false;
    },
    reshuffle: function(){
        for(let i = 0; i < this.deck.graveyard.length; i++){
            this.deck.library.push(this.deck.graveyard.shift())
        }
        this.shuffle()
    },
    getGraveyard: function(){
        return this.deck.graveyard;
    },
    getLibrary: function(){
        return this.deck.library;
    }
}