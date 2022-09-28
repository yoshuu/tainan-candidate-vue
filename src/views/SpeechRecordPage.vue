<script setup></script>

<template>
  <main>
    <div class="past-record-container">
      <div class="toggle-box">
        <a href="#past-record-page-router" class="toggle-speech-record"
          >演講紀錄</a
        >
        <a href="#past-works-page-router" class="toggle-past-works">過去作品</a>
        <a href="#related-news-page-router" class="toggle-related-news"
          >相關新聞</a
        >
      </div>
      <div class="sticky-notes">
        <div class="speech-record">
          <h2>演講紀錄</h2>
          <div class="speech-record-topic">
            <h3>活動主題</h3>
            <h3>活動名稱</h3>
            <h3>日期</h3>
            <h3>相關資源</h3>
          </div>
          <div class="speech-record-container"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/layout/past-record-page";
@import "../assets/scss/components/sticky-notes";

.speech-record {
  padding: 14px 20px;

  @media (min-width: 992px) {
    padding: 24px 40px;
  }

  h2 {
    font-weight: 700;
    text-align: center;
    margin-bottom: 33px;
    font-size: 16px;

    @media (min-width: 992px) {
      font-size: 36px;
    }
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }

  // 針對past-speech-record

  &-topic {
    display: none;

    @media (min-width: 992px) {
      margin-top: 53px;
      display: grid;
      grid-template-columns: 2fr 2fr 1fr 3fr;
      gap: 30px;

      h3 {
        font-size: 16px;
        font-weight: 700;
      }
    }
  }

  &-desktop {
    display: none;

    @media (min-width: 992px) {
      display: block;

      .speech-record-content {
        display: grid;
        grid-template-columns: 2fr 2fr 1fr 3fr;
        align-items: center;
        border-bottom: white 1px solid;
        padding: 20px 0;
        gap: 30px;

        .resources-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }
  }

  &-mobile {
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-bottom: #0000001a 1px solid;
    padding: 20px 0;

    @media (min-width: 992px) {
      display: none;
    }

    h3 {
      font-size: 14px;
      font-weight: 700;
    }

    .speech-record-topicNcontent {
      display: grid;
      grid-template-columns: 1fr 3fr;
    }

    .speech-record-resources-topicNcontent {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .resources-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
}
</style>
