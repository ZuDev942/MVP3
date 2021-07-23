<template>
  <fieldset class="result border">
    <legend class="result__box">Kết quả công việc</legend>
    <div class="option">
      <button class="option__btn">Hôm nay</button>
      <button class="option__btn">Tuần này</button>
      <button class="option__btn">Tháng này</button>
      <button class="option__btn">Tùy chọn</button>
    </div>
    <table class="result__data">
      <thead>
        <tr>
          <th>KH tương tác</th>
          <th>KH có SĐT</th>
          <th>KH đã gọi</th>
          <th>ĐH đã chốt</th>
          <th>Tỷ lệ chốt</th>
          <th>ĐH thành công</th>
          <th>ĐH hoàn</th>
          <th>Doanh thu</th>
          <th>Phí hoàn</th>
          <th>
            Thời gian <br />
            phản hồi TB
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>100</td>
          <td>100</td>
          <td>80</td>
          <td>70</td>
          <td>70%</td>
          <td>60</td>
          <td>10</td>
          <td>12.000.000</td>
          <td>300.000</td>
          <td>10m34s</td>
        </tr>
      </tbody>
    </table>
    <table class="result__total">
      <tbody>
        <tr>
          <th rowspan="2"><a href="#">Gói thu nhập 1</a></th>
          <th>Số ngày công</th>
          <th>Lương cứng</th>
          <th>Thưởng</th>
          <th>Tổng thu nhập</th>
        </tr>
        <tr>
          <td>26</td>
          <td>8.000.000</td>
          <td>7.000.000</td>
          <td><a href="#">15.000.000</a></td>
        </tr>
      </tbody>
    </table>
  </fieldset>
</template>

<style lang="scss">
.result {
  border: 1px solid #cccccc;
  border-radius: 1rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  font-size: 1.6rem;
  margin-top: 5rem;
  padding: 2rem 4rem 4rem 4rem;
  &__data,
  &__total {
    border-collapse: collapse;
    border: 1px solid #cccccc;
    border-radius: 1rem;
    margin-top: 3rem;
    table-layout: fixed;
    width: 100%;
  }
  &__data {
    th,
    td {
      vertical-align: middle;
      font-weight: 400;
      width: calc(100% / 10);
      height: 5rem; /* not ok*/
      border: 1px solid #cccccc;
      text-align: center;
    }
    th {
      font-weight: 500;
    }
  }
  &__total {
    a {
      color: #069255;
      font-weight: 500;
      text-decoration: underline;
    }
    th,
    td {
      position: relative;
      width: calc(100% / 5);
      vertical-align: middle;
      font-size: 1.6rem;
      font-weight: 400;
      text-align: center;
      padding: 1.6rem 0;
    }
    th {
      font-weight: 500;
      &:not(:last-child)::before {
        position: absolute;
        content: '';
        right: 0;
        width: 0.1rem;
        height: 7rem;
        background-color: #cccccc;
      }
      &:first-child::before {
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>