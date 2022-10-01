<script setup>
import { ref } from "vue";

const isPlay = ref(true);
</script>

<template>
  <main class="street-map-page">
    <div class="map-page">
      <div
        :class="isPlay ? 'play-animation' : 'stop-animation'"
        class="street-instruct-sign"
      >
        <div class="district-text-container">
          <p>點擊路線查看掃街紀錄</p>
        </div>
        <div class="white-arrow-container">
          <img src="@/assets/images/white-arrow.png" alt="" />
        </div>
      </div>
      <div
        @mouseenter="isPlay = !isPlay"
        @mouseleave="isPlay = !isPlay"
        class="street-map-container"
      >
        <iframe
          class="street-map-iframe"
          src="https://tainan.olc.tw/lines.html"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
// 1440, 1920 那些時候固定flex-basis，之後就變display:block
.street-map-page {
  height: calc(100vh - 75px - 75px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: center;
    height: calc(100vh - 77px);
    // @media (min-width: 992px) {
    //   margin: 0 10%;
    // }
    // @media (min-width: 1440px) {
    //   margin: 0;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    // }
    // @media (min-width: 1930px) {
    //   display: block;
    //   margin: 0 30%;
    // }
  }
}
.map-page {
  @media (min-width: 992px) {
    padding-top: 5%;
    flex-basis: 50%;
  }

  // padding-top: 40%;
  // @media (min-width: 450px) {
  //   padding-top: 30px;
  // }

  // @media (min-width: 1440px) {
  //   flex-basis: 803px;
  // }

  // @media (min-width: 1920px) {
  //   flex-basis: 1003px;
  // }
  // @media (min-width: 1930px) {
  //   flex-basis: unset;
  // }

  .street-map-container {
    // height: 0;
    // width: 100%;
    position: relative;
    overflow: hidden;
    padding-bottom: calc(657 / 1066 * 100%);
    .street-map-iframe {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      // border: 0;
    }
  }
}

.district-text-container {
  font-size: 16px;
  font-weight: 700;
  color: white;

  @media (min-width: 992px) {
    font-size: 20px;
  }
}

.street-instruct-sign {
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
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
