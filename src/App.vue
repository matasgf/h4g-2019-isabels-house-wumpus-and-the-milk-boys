<template>
    <div id="app">
        <header>
            <nav class="main-nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/notifications">Notifications</router-link> |
                <router-link to="/saved">Saved</router-link>
            </nav>
        </header>
        <main>
            <transition name="router-anim">
                <router-view/>
            </transition>
        </main>
    </div>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html, div, body{
    margin: 0;
    padding: 0;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    main{
        width: 100%;
    }
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        // &.router-link-exact-active {
        //   color: #42b983;
        // }
    }
}
</style>
