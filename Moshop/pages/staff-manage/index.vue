<template>
  <div class="staff-manage">
    <div class="container-fluid">
      <div class="staff-manage__header">
        <div class="staff-manage__row">
          <div class="staff-manage__heading">
            <h1>Quản lí nhân viên</h1>
            <div class="staff-manage__active"></div>
            <i class="staff-manage__live">
              Live(<span>Cập nhật 12:12</span> )
            </i>
          </div>
          <button class="staff-manage__btn">
            <i class="fas fa-cog"></i>
            KPIs nhân viên
          </button>
        </div>
        <div class="staff-manage__row">
          <div class="option">
            <button class="option__btn">Hôm nay</button>
            <button class="option__btn">Tuần này</button>
            <button class="option__btn">Tháng này</button>
            <button class="option__btn">Tùy chọn</button>
          </div>
          <button class="staff-manage__btn">
            <i class="fas fa-plus"></i>
            Thêm nhân viên
          </button>
        </div>
      </div>
      <StaffBoard />
      <nuxt-link to="/staff-manage/0777c5e5-8986-4631-b51f-f7b969f960df"
        >sendDirect</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import StaffBoard from '@/modules/StaffManage/StaffBoard/StaffBoard.vue'
export default {
  components: { StaffBoard },
}
</script>

<style lang="scss" scoped>
.staff-manage {
  .container-fluid {
    max-width: 100%;
    width: 155rem;
  }
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  &__btn {
    width: 18rem;
    height: 4rem;
    border: 0;
    border-radius: 10rem;
    background: #069255;
    color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-weight: 500;
  }
  &__heading {
    display: flex;
    align-items: center;
    h1 {
      font-size: 4rem;
      font-weight: 700;
      padding-right: 2rem;
    }
  }
  &__live {
    font-size: 1.6rem;
    font-style: italic;
  }
  &__active {
    width: 0.8rem;
    height: 0.8rem;
    background-color: #ff0000;
    border-radius: 5rem;
    position: relative;
    margin-right: 1rem;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      animation: fade 2s forwards infinite linear;
    }
  }
  @keyframes fade {
    to {
      transform: scale(2.2);
      opacity: 0;
    }
  }
}
</style>
