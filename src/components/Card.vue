<template>
    <v-card
        hover
        style="height:100%"
    >
        <v-card-title>{{currentCard.name}}</v-card-title>
        <v-card-subtitle>cost: {{currentCard.cost}}</v-card-subtitle>
        <v-card-text>
            <p v-for="effect in currentCard.effects" :key="effect.id">
                {{effect.name}} - {{effect.value}}
            </p>
            <p>
                {{currentCard.uuid}}
            </p>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        props: ['card'],
        name: "Card",
        data: function(){
            return {
                currentCard: this.card
            }
        }
    }
</script>

<style scoped>

</style>