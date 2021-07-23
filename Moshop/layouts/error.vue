<template>
  <div class="error">
    <section class="error-container">
      <span class="four"><span class="screen-reader-text">4</span></span>
      <span class="zero"><span class="screen-reader-text">0</span></span>
      <span class="four"><span class="screen-reader-text">4</span></span>
    </section>
    <div class="error-link">
      <nuxt-link to="/">Visit Home</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['error'],
}
</script>


<style lang="scss">
.error {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-link {
    text-align: center;
    a {
      text-transform: uppercase;
      font-size: 13px;
      background-color: #de7e85;
      padding: 10px 15px;
      border-radius: 0;
      color: #fff;
      display: inline-block;
      margin-right: 5px;
      margin-bottom: 5px;
      line-height: 1.5;
      text-decoration: none;
      margin-top: 50px;
      letter-spacing: 1px;
    }
  }
}
.error-container {
  text-align: center;
  font-size: 106px;
  font-family: 'Catamaran', sans-serif;
  font-weight: 800;
  margin: 70px 15px;
}
.error-container > span {
  display: inline-block;
  position: relative;
}
.error-container > span.four {
  width: 136px;
  height: 43px;
  border-radius: 999px;
  background: linear-gradient(
      140deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.07) 43%,
      transparent 44%,
      transparent 100%
    ),
    linear-gradient(
      105deg,
      transparent 0%,
      transparent 40%,
      rgba(0, 0, 0, 0.06) 41%,
      rgba(0, 0, 0, 0.07) 76%,
      transparent 77%,
      transparent 100%
    ),
    linear-gradient(to right, #d89ca4, #e27b7e);
}
.error-container > span.four::before,
.error-container > span.four::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 999px;
}
.error-container > span.four::before {
  width: 43px;
  height: 156px;
  left: 60px;
  bottom: -43px;
  background: linear-gradient(
      128deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.07) 40%,
      transparent 41%,
      transparent 100%
    ),
    linear-gradient(
      116deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.07) 50%,
      transparent 51%,
      transparent 100%
    ),
    linear-gradient(to top, #99749d, #b895ab, #cc9aa6, #d7969e, #e0787f);
}
.error-container > span.four::after {
  width: 137px;
  height: 43px;
  transform: rotate(-49.5deg);
  left: -18px;
  bottom: 36px;
  background: linear-gradient(
    to right,
    #99749d,
    #b895ab,
    #cc9aa6,
    #d7969e,
    #e0787f
  );
}

.error-container > span.zero {
  vertical-align: text-top;
  width: 156px;
  height: 156px;
  border-radius: 999px;
  background: linear-gradient(
      -45deg,
      transparent 0%,
      rgba(0, 0, 0, 0.06) 50%,
      transparent 51%,
      transparent 100%
    ),
    linear-gradient(
      to top right,
      #99749d,
      #99749d,
      #b895ab,
      #cc9aa6,
      #d7969e,
      #ed8687,
      #ed8687
    );
  overflow: hidden;
  animation: bgshadow 5s infinite;
}
.error-container > span.zero::before {
  content: '';
  display: block;
  position: absolute;
  transform: rotate(45deg);
  width: 90px;
  height: 90px;
  background-color: transparent;
  left: 0;
  bottom: 0;
}
.error-container > span.zero::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 999px;
  width: 70px;
  height: 70px;
  left: 43px;
  bottom: 43px;
  background: #fdfaf5;
  box-shadow: -2px 2px 2px 0 rgba(0, 0, 0, 0.1);
}

.screen-reader-text {
  position: absolute;
  top: -9999em;
  left: -9999em;
}

@keyframes bgshadow {
  0% {
    box-shadow: inset -160px 160px 0 5px rgba(0, 0, 0, 0.4);
  }
  45% {
    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.1);
  }
  55% {
    box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: inset 160px -160px 0 5px rgba(0, 0, 0, 0.4);
  }
}

.zoom-area {
  max-width: 490px;
  margin: 30px auto 30px;
  font-size: 19px;
  text-align: center;
}
</style>