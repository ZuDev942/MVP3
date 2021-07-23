<template>
  <div class="staff-profile">
    <div class="container-fluid">
      <StaffAbout />
      <StaffResult />
      <div class="staff-profile__flex">
        <StaffInfo />
        <StaffHistory />
      </div>
    </div>
  </div>
</template>

<script>
import StaffAbout from '@/modules/StaffManage/StaffProfile/StaffAbout.vue'
import StaffResult from '@/modules/StaffManage/StaffProfile/StaffResult.vue'
import StaffInfo from '@/modules/StaffManage/StaffProfile/StaffInfo.vue'
import StaffHistory from '@/modules/StaffManage/StaffProfile/StaffHistory.vue'

export default {
  components: { StaffAbout, StaffResult, StaffInfo, StaffHistory },
  validate({ params }) {
    // eslint-disable-next-line no-console
    return /^[a-zA-Z0-9_-]*$/.test(params.id)
  },
  data() {
    return {
      token: ''
    }
  },
  mounted() {
    this.login()
  },
  methods: {
    async login() {
      await this.$axios
        .post('https://x.ghtk.vn/api/fulfilment/auth/login', {
          username: 'hncp7@gmail.com',
          password: 'Reset0103',
        })
        .then((response) => {
          alert(response.data.message)
          this.token = response.data.data.access_token
        })
    },
    async testGetData() {
      await this.$axios
        .get(
          'https://x.ghtk.vn/api/v2/staff/detail?shop_user_id=0777c5e5-8986-4631-b51f-f7b969f960df',
          { headers: { Authorization: `Bearer ${this.token}` } }
        )
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response.data)
        })
    },
  },
}
</script>

<style lang="scss">
.staff-profile {
  margin-top: 10rem;
  .container-fluid {
    max-width: 100%;
    width: 155rem;
  }
  &__flex {
    margin-top: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
