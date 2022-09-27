<template>
  <main class="record-of-street-map-page">
    <div class="container p-0">
      <div class="map-page">
        <div class="street-instruct-sign">
          <div class="district-text-container">
            <p>點擊路線查看掃街紀錄</p>
          </div>
          <div class="white-arrow-container">
            <img src="../images/white-arrow.png" alt="" />
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
