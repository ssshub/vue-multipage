<template>
  <div id="app">
      <router-view></router-view>
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
@import 'common/font/font.scss';
#app {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.cube-tip {
  animation: none !important;
}
</style>
