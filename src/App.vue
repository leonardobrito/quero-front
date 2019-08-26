<template>
  <div id="app">
    <Header />
    <SubHeader />
    <Breadcrumbs />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/index.vue';
import SubHeader from './components/SubHeader/index.vue';
import Breadcrumbs from './components/Breadcrumbs/index.vue';
import Footer from './components/Footer/index.vue';

export default {
  name: 'app',
  components: {
    Header,
    SubHeader,
    Breadcrumbs,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html,
body,
#app {
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  text-align: center;
  text-rendering: optimizeLegibility;
  width: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
