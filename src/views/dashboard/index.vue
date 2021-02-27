<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name: {{name}}</div> -->
    <div class="dashboard-text">HEZHO CHARGE!</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  // 这里有一个 computed，所以会返回 ...mapGetters([]) 的结果
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
