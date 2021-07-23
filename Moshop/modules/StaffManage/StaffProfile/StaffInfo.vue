<template>
  <fieldset class="info-work">
    <legend>Thông tin công việc</legend>
    <div class="info-work__show">
      <label>Nơi bắt đầu làm việc</label>
      <input type="date" readonly />
    </div>
    <div class="info-work__show">
      <label>Nơi làm việc</label>
      <input type="text" readonly value="56 Phan Huy Tuong" />
    </div>
    <div class="working-time">
      <h4 class="working-time__heading font-bold">Thời gian làm việc</h4>
      <div class="working-time__box">
        <span class="working-time__title">1. Từ</span>
        <input type="time" />
        <span class="working-time__title">đến</span>
        <input type="time" />
      </div>
      <div class="repeat-date">
        <span>Lặp lại</span>
        <button class="repeat-date__item">Thứ 2</button>
        <button class="repeat-date__item">Thứ 3</button>
        <button class="repeat-date__item">Thứ 4</button>
        <button class="repeat-date__item">Thứ 5</button>
        <button class="repeat-date__item">Thứ 6</button>
        <button class="repeat-date__item">Thứ 7</button>
        <button class="repeat-date__item">Chủ nhật</button>
      </div>
    </div>
    <div class="screen-used">
      <h4 class="screen__heading font-bold">Màn hình được sử dụng</h4>
      <div class="screen__container">
        <div>
          <label class="screen__box">
            <span class="screen__page">Chats chốt đơn</span>
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </label>
          <div class="screen__child">
            <label  v-for="i in 3" :key="i" class="screen__box">
              <span class="screen__page">
                <img src="~/assets/image/avatar.png" alt="thumnail-avatar" />
                Chats chốt đơn
              </span>
              <input type="checkbox" checked="checked" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <label v-for="ii in 5" :key="ii" class="screen__box" >
          <span class="screen__page">Chats chốt đơn</span>
          <input type="checkbox" checked="checked" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  </fieldset>
</template>

<style lang="scss" scoped>
.info-work {
  width: calc(50% - 2rem);
  height: max-content;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 4rem;
  &__show {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    label {
      width: 16em;
      font-weight: 500;
    }
    input {
      width: 100%;
      background: #efefef;
      border-radius: 5px;
      border: 0;
      outline: 0;
      padding: 1rem 0 1rem 2rem;
    }
  }
}
.working-time {
  margin-bottom: 2rem;
  &__heading {
    margin-top: 4rem;
  }
  &__box {
    margin-top: 2rem;
    input {
      border: 1px solid #bdbdbd;
      border-radius: 0.5rem;
      width: 17.5rem;
      padding: 0.7rem;
      margin: 0 1rem;
      outline: 0;
    }
  }
}
.repeat-date {
  margin-top: 2rem;
  &__item {
    font-size: 13.8px;
    background: #fff;
    border-radius: 2rem;
    border: 1px solid #bdbdbd;
    color: #bdbdbd;
    padding: 0.5rem;
    margin: 0 0.2rem 0.5rem 0.2rem;
  }
}
.screen {
  &__heading {
    margin-bottom: 1.5rem;
  }
  &__box {
    display: block;
    position: relative;
    margin-bottom: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 2.4rem;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      &:checked ~ .checkmark {
        transition: all 0.2s ease-in-out;
        background: rgba(6, 146, 85, 0.58);
        border-radius: 5px;
        border: 0;
      }
      &:checked ~ .checkmark::after {
        display: block;
        transition: all 0.2s ease-in-out;
      }
    }
    img {
      width: 2.5rem;
      height: 2.5rem;
      border: 50%;
      overflow: hidden;
      margin-right: 1rem;
    }
  }
  &__page {
    padding-left: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__child {
    margin-left: 3rem;
  }
}

.checkmark {
  position: absolute;
  height: 2.4rem;
  width: 2.4rem;
  top: 0;
  left: 0;
  background: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  &::after {
    content: '';
    position: absolute;
    display: none;
    left: 8px;
    top: 2px;
    width: 0.9rem;
    height: 1.5rem;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
</style>