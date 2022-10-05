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
  <main class="street-map-page">
    <div class="map-page">
      <div
        v-if="isShow"
        :class="{ 'play-animation': isPlay }"
        class="street-instruct-sign"
      >
        <div class="district-text-container">
          <p>點擊路線查看掃街紀錄</p>
        </div>
        <div class="white-arrow-container">
          <img src="@/assets/images/white-arrow.png" alt="" />
        </div>
      </div>
      <div class="street-map-container" @mouseenter="disappeared">
        <iframe
          class="street-map-iframe"
          src="https://tainan.olc.tw/lines.html"
          frameborder="0"
          seamless="seamless"
        ></iframe>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.street-map-page {
  height: calc(100vh - 75px - 75px);
}
.map-page {
  .street-map-container {
    .street-map-iframe {
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

.street-instruct-sign {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  // 為了跟里民的長度一樣
  width: 192px;

  position: absolute;
  top: 15%;
  left: 25%;

  @media (min-width: 500px) {
    left: 30%;
  }

  @media (min-width: 768px) {
    width: 240px;
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
