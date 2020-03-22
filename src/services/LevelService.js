import DefaultLevels from '../data/levels/default.js'
import uuid from "../helpers/uuid";
import EnemyService from "./EnemyService";

export default{
    levels: [],
    currentLevel: null,
    currentStage: 0,
    currentStageEntity: null,
    begin: function(){
        this.importLevelsFromJson();
        this.load(0)
        this.currentLevel = this.getLevel(0);
        this.startStage(this.currentStage);
    },
    setLevels: function(levels){
        this.levels = levels
    },
    getLevels: function(){
        return this.levels
    },
    getLevel: function(level){
        return this.levels[level]
    },
    importLevelsFromJson: function(){
        this.setLevels(DefaultLevels);
    },
    load: function (id) {
        let resultingLevel = {};

        let level = this.getLevels().filter(function(i){
            return i.id == id
        })[0];

        resultingLevel = Object.assign({}, level);
        resultingLevel.uuid = uuid.uuidv4();
        return resultingLevel;
    },
    startStage: function(stage){
        this.currentStageEntity = this.currentLevel.stages[stage];
    },
    getCurrentStage: function(){
        return this.currentStageEntity
    },
    loadCurrentStageEnemies: function(){
        let enemies = this.currentStageEntity.enemies;
        let resultingEnemies = [];
        for (let i = 0; i < enemies.length; i++){
            let resultingEnemy = EnemyService.load(enemies[i]);
            resultingEnemies.push(resultingEnemy);
        }
        console.log(resultingEnemies)
        return resultingEnemies;
    },
    getCurrentLevel: function(){
        return this.currentLevel;
    }
}