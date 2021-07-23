<template>
  <div class="staff-info">
    <div class="staff__pos">
      <button class="staff__pos--back">
        <nuxt-link to="/staff-manage"
          ><i class="fas fa-chevron-left"></i
        ></nuxt-link>
      </button>
      <button class="staff__pos--edit">Sửa</button>
    </div>
    <div class="staff__about">
      <div class="staff__avatar">
        <img src="~/assets/image/avatar.png" alt="thumnail-avatar" />
      </div>
      <div class="staff__name">
        <p>Nguyễn Ngọc Khánh <span>/</span> 0983112233</p>
      </div>
      <div class="staff__status">
        <span>Trạng thái</span>
        <select class="staff__status--select">
          <option value="">Đang làm việc</option>
          <option value="">Đang nghỉ</option>
          <option value="">Đang ghét</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style lang="scss">
.staff {
  &-info {
    position: relative;
    display: flex;
    justify-content: center;
  }
  &__pos {
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    &--back {
      border: 0;
      background-color: #fff;
      i {
        font-size: 1.8rem;
        color: #069255 !important;
      }
    }
    &--edit {
      color: #069255;
      border: 2px solid #069255;
      border-radius: 5rem;
      background-color: #fff;
      font-size: 1.6rem;
      font-weight: 500;
      padding: 0.8rem 5rem;
    }
  }
}
</style>
