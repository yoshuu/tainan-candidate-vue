<script setup>
import { ref } from "vue";

const isPlay = ref(true);
</script>

<template>
  <main class="district-map-page">
    <div class="map-page">
      <div
        :class="isPlay ? 'play-animation' : 'stop-animation'"
        class="district-instruct-sign"
      >
        <div class="district-text-container">
          <p>點擊地圖查看各區里民資訊</p>
        </div>
        <div class="white-arrow-container">
          <img src="@/assets/images/white-arrow.png" alt="" />
        </div>
      </div>
      <div class="district-map-container">
        <iframe
          class="district-map-iframe"
          src="https://tainan.olc.tw"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.district-map-page {
  height: calc(100vh - 75px - 75px);
  // display: flex;
  // flex-direction: column;
  // justify-content: center;

  // @media (min-width: 768px) {
  //   flex-direction: row;
  //   justify-content: center;
  //   height: calc(100vh - 77px);
  // }
}
.map-page {
  // position: relative;

  // @media (min-width: 768px) {
  //   padding-top: 5%;
  //   flex-basis: 50%;
  // }

  .district-map-container {
    // position: relative;
    // overflow: hidden;
    // padding-bottom: calc(657 / 1066 * 100%);

    .district-map-iframe {
      // position: absolute;
      // top: 0;
      bottom: 0;
      width: 100%;
      height: calc(100vh - 75px);
      // overflow: hidden;
      // z-index: 2;

      @media (min-width: 992px) {
        height: calc(100vh - 77px);
      }
    }
  }
}

.district-text-container {
  font-size: 16px;
  font-weight: 700;
  color: white;

  @media (min-width: 768px) {
    font-size: 20px;
  }
}

.district-instruct-sign {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  position: absolute;
  top: 10%;
  left: 47%;

  @media (min-width: 1920px) {
    top: 20%;
    left: 47%;
  }

  // position: absolute;
  // z-index: 3;
  // top: -40%;
  // left: 25%;
  // @media (min-width: 400px) {
  //   top: -40%;
  //   left: 25%;
  //   right: 25%;
  //   bottom: 100%;
  // }

  // @media (min-width: 450px) {
  //   position: unset;
  //   padding-bottom: 15px;
  // }
}

.play-animation {
  animation-name: bounce;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

.stop-animation {
  animation-name: bounce;
  animation-duration: 0s;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  from {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }

  50% {
    transform: translateY(-3px);
    animation-timing-function: ease-in;
  }

  to {
    transform: translateY(0px);
    animation-timing-function: ease-in-out;
  }
}
</style>
