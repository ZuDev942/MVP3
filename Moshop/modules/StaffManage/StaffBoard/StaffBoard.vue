<template>
  <section class="staff-board">
    <table>
      <thead>
        <tr>
          <th colspan="3">Nhan vien</th>
          <th>KH tương tác <i class="fas fa-sort"></i></th>
          <th>KH có sđt<i class="fas fa-sort"></i></th>
          <th>KH đã gọi<i class="fas fa-sort"></i></th>
          <th>ĐH đã chốt<i class="fas fa-sort"></i></th>
          <th>Tỷ lệ chốt<i class="fas fa-sort"></i></th>
          <th>ĐH thành công<i class="fas fa-sort"></i></th>
          <th>ĐH hoàn<i class="fas fa-sort"></i></th>
          <th>Doanh thu<i class="fas fa-sort"></i></th>
          <th>Phí hoàn<i class="fas fa-sort"></i></th>
          <th>TG phản hồi TB<i class="fas fa-sort"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="3">
            <div class="staff-board__box">
              <div class="staff-board__status">
                <div class="d-flex flex-column align-items-center">
                  <div class="staff-board__avatar">
                    <img
                      src="https://images.pexels.com/photos/7242497/pexels-photo-7242497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="thumnail-avatar"
                    />
                  </div>
                  <select>
                    <option value="">Dang lam viec</option>
                  </select>
                </div>
                <ul>
                  <li>Dang don</li>
                  <li>Dang don</li>
                  <li>Dang don</li>
                  <li>Dang don</li>
                </ul>
              </div>
            </div>
            <nuxt-link class="staff-board__detail" to="">Xem</nuxt-link>
          </td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.staff-board {
  table {
    border-collapse: collapse;
    border: 1px solid #cccccc;
    border-radius: 1rem;
    margin-top: 3rem;
    table-layout: fixed;
    width: 100%;
    th {
      font-weight: 500;
      padding: 1.5rem 0;
      i {
        color: #bdbdbd;
        padding-left: 0.5rem;
      }
    }
    th,
    td {
      border: 1px solid #cccccc;
      vertical-align: middle;
      text-align: center;
    }
  }
  &__box {
    display: flex;
    flex-wrap: wrap;
    padding-top: 1.5rem;
    ul {
      width: 12rem;
      display: flex;
      flex-direction: column;
      list-style-type: disc;
      li {
        line-height: 1.9rem;
        color: #808080;
      }
    }
    select {
      width: 118px;
      height: 24px;
      border: 1px solid #069255;
      background-color: #fff;
      box-sizing: border-box;
      border-radius: 100rem;
      color: #069255;
      font-size: 1.3rem;
    }
  }
  &__avatar {
    width: 6.4rem;
    height: 6.4rem;
    position: relative;
    margin-bottom: 1rem;
    overflow: hidden;
    border-radius: 50%;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
    }
  }
  &__status {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  &__detail {
    border: 1px solid #219653;
    border-radius: 10rem;
    color: #219653;
    height: 2rem;
    width: 5.7rem;
    font-size: 1.4rem;
    padding: 0.4rem 1.4rem;
    &:hover {
      background-color: #219653;
      color: #fff;
    }
  }
}
</style>
