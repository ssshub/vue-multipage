<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import 'common/scss/index.scss';
@import "~common/scss/mixin";
@import 'common/font/font.scss';

#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}


</style>
