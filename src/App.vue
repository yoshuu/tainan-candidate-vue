<script setup>
import { ref, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import FrontPage from "./views/FrontPage.vue";
import DistrictMapPage from "./views/DistrictMapPage.vue";
import RecordOfStreetMapPage from "./views/RecordOfStreetMapPage.vue";
import SpeechRecordPage from "./views/SpeechRecordPage.vue";
import PastWorksPage from "./views/PastWorksPage.vue";
import RelatedNewsPage from "./views/RelatedNewsPage.vue";
import TainanThreePage from "./views/TainanThreePage.vue";
</script>

<template>
  <header>
    <div class="container p-0">
      <nav class="navbar-desktop navbar navbar-expand-lg">
        <div class="container-fluid p-0">
          <a class="navbar-brand candidate-logo" href="#front-page-router"
            ><img
              src="@/assets/images/navbar-candidate-logo.png"
              alt="navbar-candidate-logo"
          /></a>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mb-2 mb-lg-0 me-2 mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" to="#/">誰是江明宗</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" to="#/district-map-page">選區里民資料</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#record-of-street-map-page-router"
                  >掃街紀錄</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#past-record-page-router">過往紀錄</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#tainan-three-page-router"
                  >台南三江街講</a
                >
              </li>
              <li class="nav-item">
                <a
                  target="_blank"
                  class="nav-link"
                  href="https://www.facebook.com/k.olc.tw/"
                  >透過臉書聯絡江明宗</a
                >
              </li>
            </ul>
            <a
              class="navbar-brand party-logo"
              href="https://www.tpp.org.tw/"
              target="_blank"
              ><img
                src="@/assets/images/navbar-party-logo.png"
                alt="navbar-candidate-logo"
            /></a>
          </div>
        </div>
      </nav>
      <nav class="navbar-mobile navbar">
        <div class="brand-container">
          <a class="navbar-brand candidate-logo" href="#front-page-router"
            ><img
              src="@/assets/images/navbar-candidate-logo.png"
              alt="navbar-candidate-logo"
          /></a>
          <a class="navbar-brand party-logo" href="https://www.tpp.org.tw/"
            ><img
              src="@/assets/images/navbar-party-logo.png"
              alt="navbar-candidate-logo"
          /></a>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#front-page-router"
              >誰是江明宗</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#district-map-page-router"
              >選區里民資料</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#record-of-street-map-page-router"
              >掃街紀錄</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#past-record-page-router">過往紀錄</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#tainan-three-page-router"
              >台南三江街講</a
            >
          </li>
          <li class="nav-item">
            <a
              target="_blank"
              class="nav-link"
              href="https://www.facebook.com/k.olc.tw/"
              >透過臉書聯絡江明宗</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <FrontPage></FrontPage>
    <DistrictMapPage></DistrictMapPage>
    <RecordOfStreetMapPage></RecordOfStreetMapPage>
    <PastWorksPage></PastWorksPage>
    <SpeechRecordPage></SpeechRecordPage>
    <RelatedNewsPage></RelatedNewsPage>
    <TainanThreePage></TainanThreePage>
  </main>
  <RouterView />
</template>

<style lang="scss" scoped>
.container {
  max-width: 1920px;
}

header {
  // 一起的設定
  background-color: $header;

  .container .navbar-nav .nav-link {
    font-weight: 700;
    font-size: 14px;
    color: black;
    padding: 5px 15px;

    &:hover {
      background-color: #30363a;
      color: white;
    }

    @media (min-width: 992px) {
      padding: 15px 20px;
      font-size: 18px;
    }
  }
  .navbar-brand {
    margin: 0;
    padding: 0;
    display: inline-block;
    height: 56px;

    img {
      object-fit: contain;
      height: 100%;
    }

    .candidate-logo {
      width: 130px;
    }

    .party-logo {
      @media (min-width: 992px) {
        display: inline-block;
      }
    }
  }

  .navbar-desktop {
    display: none;
    @media (min-width: 992px) {
      display: flex;
    }

    background-color: $header;
    padding: 10px 40px;

    .navbar-collapse {
      justify-content: end;
    }
  }

  // 手機的設定
  .navbar-mobile {
    display: block;
    @media (min-width: 992px) {
      display: none;
    }

    &.navbar {
      padding: 0;
    }

    .brand-container {
      display: flex;
      justify-content: space-between;
      padding: 7px 12px;
    }

    .navbar-nav {
      flex-direction: row;
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }

      .nav-item {
        flex-shrink: 0;
      }
    }
  }
}
</style>
