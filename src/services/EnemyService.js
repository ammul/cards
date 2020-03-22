import DefaultEnemies from '../data/enemies/default.js'
import uuid from "../helpers/uuid";

export default{
    enemies: [],
    setEnemies: function(cards){
        this.enemies = cards
    },
    getEnemies: function(){
        return this.enemies
    },
    importEnemiesFromJson: function(){
        this.setEnemies(DefaultEnemies);
    },
    load: function (id) {
        let resultingEnemy = {};

        let enemy = this.enemies.filter(function(i){
            return i.id == id
        })[0];

        resultingEnemy = Object.assign({}, enemy);
        resultingEnemy.uuid = uuid.uuidv4();

        return resultingEnemy;
    }
}