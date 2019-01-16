<!--  -->
<template>

  <div  :class="{'v-cloak' : !pageLoad}">
      hello!
  </div>

</template>

<script>
  import Vue from 'vue'
  import { getList} from 'api/task'
  import {dateToString, Num} from 'common/js/utl'



  export default {
    components: {
    },
    data () {
      return {
        pageLoad: false,
      }
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {


      })
    },
    beforeRouteLeave (to, from, next) {
      next()
    }
  }
</script>

<style lang="scss" scoped>
  @import "~common/scss/variable";
  @import "~common/scss/mixin";

  body, html {
    background: $color-background;
  }

</style>
