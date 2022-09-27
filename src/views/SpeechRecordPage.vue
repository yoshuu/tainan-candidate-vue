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

// speech-record
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
