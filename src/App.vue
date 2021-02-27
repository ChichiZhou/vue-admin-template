<template>
  <div id="app">
    <!-- 这里显示的是通过 router 过的页面。因为有 redirect，所以这里会显示 dashboard -->
    <!-- 必须用 router-view，否则无法显示这个 vue 组件 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
