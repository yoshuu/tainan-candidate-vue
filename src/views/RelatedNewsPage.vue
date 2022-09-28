<script setup></script>

<template>
  <main>
    <div class="container p-0">
      <div class="past-record-container">
        <div class="toggle-box">
          <RouterLink class="toggle-speech-record" to="/SpeechRecordPage"
            >演講紀錄</RouterLink
          >

          <RouterLink class="toggle-past-works" to="/PastWorksPage"
            >過去作品</RouterLink
          >

          <RouterLink class="toggle-related-news" to="/RelatedNewsPage"
            >相關新聞</RouterLink
          >
        </div>
        <div class="sticky-notes">
          <div class="related-news">
            <h2>相關新聞</h2>
            <div class="related-news-container"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "../assets/scss/layout/past-record-page";
@import "../assets/scss/components/sticky-notes";

.related-news {
  padding: 14px 20px;
  @media (min-width: 768px) {
    padding: 24px 40px;
  }

  h2 {
    font-weight: 700;
    text-align: center;
    margin-bottom: 33px;
    font-size: 16px;

    @media (min-width: 768px) {
      margin-bottom: 54px;
      font-size: 36px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 500;
  }

  &-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 8px;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 16px;
    }

    .news-item {
      align-self: flex-start;
      padding: 10px 15px;
      font-size: 14px;
      font-weight: 400;
      background-color: #28c8c8;
      color: #fff;
      border-radius: 4px;

      &:hover {
        background-color: $primary;
      }
      span {
        display: block;
      }
    }
  }
}
</style>
