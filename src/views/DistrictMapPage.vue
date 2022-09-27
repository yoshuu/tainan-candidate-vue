<template>
  <main class="district-map-page">
    <div class="container p-0">
      <div class="map-page">
        <div class="district-instruct-sign">
          <div class="district-text-container">
            <p>點擊地圖查看各區里民資訊</p>
          </div>
          <div class="white-arrow-container">
            <img src="../images/white-arrow.png" alt="" />
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
    </div>
  </main>
</template>
