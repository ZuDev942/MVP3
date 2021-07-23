<template>
  <header class="header">
    <div class="container-fluid">
      <div class="header__logo">
        <img src="~/assets/image/logo-moshop-03.png" alt="" />
      </div>
      <div class="header__account">
        <span>nghiant@ghtk.vn </span>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
      <nav class="header__menu">
        <ul class="header__list">
          <li class="header__item">
            <nuxt-link to="/">
              <ion-icon name="cellular-outline"></ion-icon>
              <span class="header__item--name">Tổng quan</span>
            </nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/test">
              <ion-icon name="chatbox-ellipses-outline"></ion-icon>
              <span class="header__item--name">Chats</span>
            </nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/tes">
              <ion-icon name="cube-outline"></ion-icon>
              <span class="header__item--name">Kho và sản phẩm</span>
            </nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/staff-manage">
              <ion-icon name="people-outline"></ion-icon>
              <span class="header__item--name">Nhân viên</span>
            </nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/tes">
              <ion-icon name="reader-outline"></ion-icon>
              <span class="header__item--name">Đơn hàng</span>
            </nuxt-link>
          </li>
          <li class="header__item">
            <nuxt-link to="/tes">
              <ion-icon name="cloud-upload-outline"></ion-icon>
              <span class="header__item--name"> Đăng đơn</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
  // display: none !important;
  position: fixed;
  z-index: 998;
  top: 0;
  width: 100%;
  color: #fff;
  background-color: #069255;
  font-size: 2.5rem;
  font-weight: 500;
  overflow: hidden;
  .container-fluid {
    display: flex;
    align-items: center;
  }
  &__logo {
    position: relative;
    margin: 0 1rem;
    padding-right: 5rem;
    &::before {
      position: absolute;
      content: '';
      top: 15%;
      left: 18rem;
      width: 0.4rem;
      height: 3rem;
      background-color: #fff;
    }
  }
  &__account {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 4rem;
    span {
      padding-right: 0.5rem;
    }
  }
  &__item {
    span {
      padding-left: 0.5rem;
    }
    a {
      padding: 2rem 3.5rem;
      display: flex;
      align-items: center;
      color: #fff;
      width: 100%;
      &.nuxt-link-exact-active {
        color: #069255;
        background: #fff;
      }
      &:hover {
        color: #069255;
        background: #fff;
      }
    }
    &:last-child {
      color: #fff !important;
      background-color: #eb5757 !important;
    }
  }
  @media (max-width: 1320px) {
    font-size: 1.7rem;
    &__item {
      font-size: 2.5rem;
      a {
        padding: 1rem 2rem;
      }
      &--name {
        display: none;
      }
    }
  }
}
</style>
