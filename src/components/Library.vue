<template>
    <v-card
            outlined
            style="height:100%"
    >
        <v-card-title>Library</v-card-title>
        <v-card-subtitle>{{currentLib.length}}</v-card-subtitle>
        <v-card-text>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "Library",
        props: ["lib"],
        data: function(){
            return {
                currentLib: this.lib
            }
        }
    }
</script>

<style scoped>

</style>