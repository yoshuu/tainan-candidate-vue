<script setup></script>

<template>
  <main>
    <div class="container p-0">
      <div class="past-record-container">
        <div class="toggle-box">
          <a href="#past-record-page-router" class="toggle-speech-record"
            >演講紀錄</a
          >
          <a href="#past-works-page-router" class="toggle-past-works"
            >過去作品</a
          >
          <a href="#related-news-page-router" class="toggle-related-news"
            >相關新聞</a
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
.container {
  max-width: 1920px;
}
.past-record-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 20px;
  gap: 41px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 40px;
  }
}

.toggle-box {
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: column;
    align-self: flex-start;
    width: 233px;
  }
  @media (min-width: 768px) {
    a + a {
      margin-top: 38px;
    }
  }

  .toggle-speech-record,
  .toggle-past-works,
  .toggle-related-news {
    min-width: 98px;
    min-height: 53px;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: 700;
    color: #30363a;
    background-color: #e3eaea;
    border: 5px solid #a7ced4;
    border-radius: 10px;
    border-bottom-right-radius: 0;
    &:hover {
      color: #fff;
      background-color: #a7ced4;
      border: 5px solid #e3eaea;
    }
    @media (min-width: 768px) {
      font-size: 28px;
      font-weight: 700;
      text-align: center;
      width: 182px;
      height: 80px;
      line-height: 50px;
    }
  }
}

// sticky notes

.sticky-notes {
  width: 100%;
  background: linear-gradient(to right bottom, transparent 50%, #fff 0)
      no-repeat 0% 0 / 50px 50px,
    linear-gradient(135deg, transparent 35px, #ffffffcc 0);
  font-family: Noto Sans TC;

  @media (min-width: 992px) {
    background: linear-gradient(to right bottom, transparent 50%, #fff 0)
        no-repeat 0% 0 / 100px 100px,
      linear-gradient(135deg, transparent 70px, #ffffffcc 0);

    width: 977px;
  }
}
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
