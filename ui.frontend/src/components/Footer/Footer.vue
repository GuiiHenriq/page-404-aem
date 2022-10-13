<template>
  <footer>
    <p>
      created by <a :href="linkUser" target="_blank">{{ username }}</a> - devChallenges.io
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    username: {
      type: String
    },
    linkUser: {
      type: String
    }
  }
}
</script>

<style lang="scss">
footer {
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #bdbdbd;
    font-family: 'Space Mono', monospace;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.04em;
  }

  a {
    color: #bdbdbd;
    font-weight: 700;
  }
}
</style>
