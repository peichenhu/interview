<template>
    <div id="app">
        <Pandora />
    </div>
</template>

<script>
import Pandora from "./pandora/index.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    components: {
        Pandora
    },
    data() {
        return {};
    },
    computed: {},
    mounted() {}
};
</script>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    background: white;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    // margin-top: 60px;
}
</style>
