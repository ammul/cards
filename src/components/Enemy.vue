<template>
    <v-card
        hover
    >
        <v-card-title>{{currentEnemy.name}}</v-card-title>
        <v-card-subtitle>health: {{currentEnemy.health}} / {{currentEnemy.maxHealth}}</v-card-subtitle>
        <v-card-text>
            <p v-for="ability in currentEnemy.abilities" :key="ability.id">
                {{ability.name}} - {{ability.value}}
            </p>
            <p>
                {{currentEnemy.uuid}}
            </p>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        props: ["enemy"],
        name: "Enemy",
        data: function(){
            return {
                currentEnemy: this.enemy
            }
        }
    }
</script>

<style scoped>

</style>