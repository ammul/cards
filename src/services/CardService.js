import DefaultCards from '../data/cards/default.js'
import uuid from "../helpers/uuid";

export default{
    cards: [],
    setCards: function(cards){
        this.cards = cards
    },
    getCards: function(){
        return this.cards
    },
    importCardsFromJson: function(){
        this.setCards(DefaultCards);
    },
    load: function (id) {
        let resultingCard = {};

        let card = this.cards.filter(function(i){
            return i.id == id
        })[0];

        resultingCard = Object.assign({}, card);
        resultingCard.uuid = uuid.uuidv4();
        return resultingCard;
    }
}