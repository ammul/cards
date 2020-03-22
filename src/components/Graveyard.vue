<template>
    <v-card
            outlined
            style="height:100%"
    >
        <v-card-title>Graveyard</v-card-title>
        <v-card-subtitle>{{graveyard.length}}</v-card-subtitle>
        <v-card-text>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Graveyard",
        props: ["graveyard"],
        data: function(){
            return {
                currentGraveyard: this.graveyard
            }
        }
    }
</script>

<style scoped>

</style>