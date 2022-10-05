<script setup>
import { ref } from "vue";

const isPlay = ref(true);
const isShow = ref(true);

const disappeared = () => {
  setTimeout(() => {
    isShow.value = false;
  }, 5000);
};
</script>

<template>
  <main class="district-map-page">
    <div class="map-page">
      <div
        v-if="isShow"
        :class="{ 'play-animation': isPlay }"
        class="district-instruct-sign"
      >
        <div class="district-text-container">
          <p>點擊地圖查看各區里民資訊</p>
        </div>
        <div class="white-arrow-container">
          <img src="@/assets/images/white-arrow.png" alt="" />
        </div>
      </div>
      <div class="district-map-container" @mouseenter="disappeared">
        <iframe
          class="district-map-iframe"
          src="https://tainan.olc.tw"
          frameborder="0"
          allowfullscreen
          seamless="seamless"
        ></iframe>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.district-map-page {
  height: calc(100vh - 75px - 75px);
}
.map-page {
  .district-map-container {
    .district-map-iframe {
      bottom: 0;
      width: 100%;
      height: calc(100vh - 75px);

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
  top: 15%;
  left: 25%;

  @media (min-width: 500px) {
    left: 30%;
  }

  @media (min-width: 768px) {
    left: 47%;
  }

  @media (min-width: 1920px) {
    top: 20%;
    left: 47%;
  }
}

.play-animation {
  animation-name: bounce;
  animation-duration: 1s;
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
