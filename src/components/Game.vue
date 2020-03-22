<template>
    <v-container style="height: 100%; max-width: unset;">
        <v-row style="height: 20%">
            {{currentLevel.name}}
        </v-row>
        <v-row style="height: 40%" justify="space-around">
            <Enemy v-for="enemy in enemies" :key="enemy.uuid" v-bind:enemy="enemy"></Enemy>
        </v-row>
        <v-row style="height: 30%">
            <v-col>
                <Graveyard v-bind:graveyard="graveyard"></Graveyard>
            </v-col>
            <v-col
                v-for="card in hand" :key="card.uuid"
            >
                <Card v-bind:card="card"></Card>
            </v-col>
            <v-col>
                <Library v-bind:lib="library"></Library>
            </v-col>
        </v-row>
        <v-row style="height: 10%">
        </v-row>
    </v-container>
</template>

<script>
    import DeckService from "../services/DeckService";
    import CardService from "../services/CardService";
    import Card from "./Card";
    import Graveyard from "./Graveyard";
    import Library from "./Library";
    import Enemy from "./Enemy";
    import LevelService from "../services/LevelService";
    import EnemyService from "../services/EnemyService";

    export default {
        name: "Game",
        components: {
            Library,
            Graveyard,
            Card,
            Enemy
        },
        data: function(){
            return{
                hand: [],
                graveyard: [],
                library: [],
                currentLevel: null,
                stage: null,
                enemies: []
            }
        },
        created: function(){
            EnemyService.importEnemiesFromJson();

            LevelService.begin();
            this.currentLevel = LevelService.getCurrentLevel();
            this.stage = LevelService.getCurrentStage();
            this.enemies = LevelService.loadCurrentStageEnemies();
            console.log(this.enemies)

            CardService.importCardsFromJson();
            DeckService.loadDeck('default');
            DeckService.shuffle();

            this.graveyard = DeckService.getGraveyard();
            this.library = DeckService.getLibrary();
            this.hand = DeckService.draw(5);
        }
    }
</script>

<style scoped>

</style>