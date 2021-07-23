<template>
  <div class="wrapper">
    <DefaultHeader />
    <div class="wrapper__child">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import DefaultHeader from '@/components/Header/DefaultHeader.vue'
export default {
  components: { DefaultHeader },
}
</script>

<style lang="scss">
.wrapper{
  &__child{
    margin-top: 6rem;
  }
}
</style>