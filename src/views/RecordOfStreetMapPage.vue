<script setup></script>

<template>
  <main class="record-of-street-map-page">
    <div class="container p-0">
      <div class="map-page">
        <div class="street-instruct-sign">
          <div class="district-text-container">
            <p>點擊路線查看掃街紀錄</p>
          </div>
          <div class="white-arrow-container">
            <img src="@/assets/images/white-arrow.png" alt="" />
          </div>
        </div>
        <div class="street-map-container">
          <iframe
            class="street-map-iframe"
            src="https://tainan.olc.tw/lines.html"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
%flexCenter {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  max-width: 1920px;
}
.record-of-street-map-page .container {
  @media (min-width: 992px) {
    height: calc(100vh - 77px);
    overflow: hidden;
  }
  @extend %flexCenter;
}
.map-page {
  padding-top: 30px;
  margin: auto 0;
  flex-basis: 803px;
  align-self: flex-start;
  flex-direction: column;

  @media (min-width: 1920px) {
    flex-basis: 1003px;
  }

  .street-map-container {
    position: relative;
    overflow: hidden;
    padding-top: calc(657 / 1066 * 100%);

    .street-map-iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
}

.district-text-container {
  font-size: 20px;
  font-weight: 700;
  color: white;
}

.street-instruct-sign {
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
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
