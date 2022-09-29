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
      <div
        @mouseenter="isPlay = !isPlay"
        @mouseleave="isPlay = !isPlay"
        class="district-map-container"
      >
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
  // padding: 40% 0;
  // 旁邊有margin手動置中，不使用flex，否則會限縮
  @media (min-width: 992px) {
    margin: 0 10%;
  }
  // 固定要使用flex
  @media (min-width: 1440px) {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  // 超過1920讓他自然長
  @media (min-width: 1930px) {
    display: block;
    margin: 0 30%;
  }
}
.map-page {
  padding-top: 40%;
  @media (min-width: 450px) {
    padding-top: 30px;
  }

  @media (min-width: 1440px) {
    flex-basis: 803px;
  }

  @media (min-width: 1920px) {
    flex-basis: 1003px;
  }
  @media (min-width: 1930px) {
    flex-basis: unset;
  }

  .district-map-container {
    // height: 0;
    // width: 100%;
    position: relative;
    overflow: hidden;
    padding-bottom: calc(657 / 1066 * 100%);

    .district-map-iframe {
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

.district-instruct-sign {
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
