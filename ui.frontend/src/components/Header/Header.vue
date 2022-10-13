<template>
  <header>{{ title }}</header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      Default: 'Page title'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');

header {
  margin: 2vw 0 0 2vw;
  text-align: left;
  font-size: 24px;
  font-family: Inconsolata;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: -0.08em;
}
</style>
