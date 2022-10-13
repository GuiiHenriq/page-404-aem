<template>
  <main>
    <div id="image">
      <img :src="thumbnail" :alt="title" />
    </div>
    <div id="text">
      <h1>{{ title }}</h1>
      <p>
        {{ description }}
      </p>
      <button>{{ button }}</button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Content',
  props: {
    thumbnail: {
      type: String
    },
    title: {
      type: String,
      Default: 'Erro 404'
    },
    description: {
      type: String,
      Default: 'Try again!'
    },
    button: {
      type: String
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 24px;
    margin: 5% 0;

    @media (min-width: 1025px) {
      width: 100vw;
      flex-direction: row;
      padding: 0;
    }

    #image {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 80vw;

        @media (min-width: 1025px) {
          max-width: 35vw;
        }
      }
    }

    #text {
      display: flex;
      flex-direction: column;
      align-content: center;
      gap: 3vw;

      h1 {
        font-family: Space Mono;
        font-size: 48px;
        font-weight: 700;
        line-height: 71px;
        letter-spacing: -0.035em;
        text-align: left;
        margin: 0;

        @media (min-width: 1025px) {
          max-width: 35vw;
          font-size: 64px;
          line-height: 95px;
        }
      }

      p {
        font-family: Space Mono;
        font-size: 18px;
        font-weight: 400;
        line-height: 26.66px;
        letter-spacing: -0.035em;
        text-align: left;
        margin: 0;

        @media (min-width: 1025px) {
          max-width: 23vw;
          font-size: 24px;
          line-height: 36px;
        }
      }

      button {
        width: 216px;
        height: 68px;
        background: #333333;
        color: #fff;
        font-family: Space Mono;
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: -0.035em;
      }
    }
  }
}
</style>
