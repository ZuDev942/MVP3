<template>
  <fieldset class="history-work">
    <legend class="history-work__heading">Lịch sử hoạt động</legend>
    <div class="option">
      <button class="option__btn">Hôm nay</button>
      <button class="option__btn">Tuần này</button>
      <button class="option__btn">Tháng này</button>
      <button class="option__btn">Tùy chọn</button>
    </div>
    <div class="history-work__container">
      <table class="history-work__table">
        <tbody v-for="inde in 3" :key="inde">
          <tr>
            <th class="history-work__timeline" colspan="3">
              Hôm nay - Thứ Tư, ngày 14/4/2021
            </th>
          </tr>
          <tr v-for="index in 8" :key="index">
            <th class="row__hour">15:15 <span>14/04/2021</span></th>
            <th class="row__desc">Đã đăng thành công 120 ĐH</th>
          </tr>
        </tbody>
      </table>
    </div>
  </fieldset>
</template>

<style lang="scss">
.history-work {
  border: 1px solid #cccccc;
  border-radius: 1rem;
  width: calc(50% - 2rem);
  height: max-content;
  padding: 2rem 0 0 4rem;
  &__container {
    width: 100%;
    height: 60rem;
    overflow: auto;
    margin-top: 1rem;
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #bdbdbd;
    }
  }
  &__timeline {
    font-weight: 500;
  }
  &__table {
    width: 100%;
    th {
      padding: 1.2rem 0;
      text-align: start;
      vertical-align: middle;
    }
    span {
      padding-left: 0.5rem;
    }
  }
}
</style>