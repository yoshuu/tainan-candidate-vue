<script setup></script>

<template>
  <main class="past-works-page">
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
          <h2 class="past-works-topic">過去作品</h2>
          <div class="past-works"></div>
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

// past-works

@media (min-width: 768px) {
  .past-works:after {
    content: " ";
    display: block;
    clear: both;
  }
}

h2.past-works-topic {
  margin: 14px 0 33px;
  font-weight: 700;
  text-align: center;
  font-size: 16px;

  @media (min-width: 992px) {
    margin: 24px 0 54px;
    font-size: 36px;
  }
}

.past-works {
  margin: 0 40px;

  p {
    font-size: 14px;
    font-weight: 500;
  }

  .project {
    margin-bottom: 10px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 21px;

    @media (min-width: 992px) {
      width: 40%;
      border-radius: 5px;
      margin: 0 5% 40px 5%;
      overflow: hidden;
    }

    @media (min-width: 1232px) {
      width: 31.3%;
      float: left;
      border-radius: 5px;

      overflow: hidden;
      margin: 0 1% 40px 1%;
    }

    .project-img {
      width: 100%;
    }
    .project-content {
      padding: 16px;

      .theme {
        display: flex;
        align-items: center;
        h3 {
          font-size: 16px;
          font-weight: 500;
          color: #0275d8;
        }

        img {
          width: 17px;
          height: 15px;
          margin-left: 3px;
        }
      }

      .bottom-line {
        width: 100%;
        height: 1px;
        margin-top: 8px;
        background-color: #d9d9d9;
      }

      .news-title {
        margin: 8px 0;
        font-size: 14px;
        font-weight: 400;
        color: #666;
      }

      .news-box {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .news-item {
          padding: 8px 15px;
          font-size: 14px;
          font-weight: 400;
          background-color: #28c8c8;
          color: #fff;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>
