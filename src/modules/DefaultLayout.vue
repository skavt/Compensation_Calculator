<template>
  <div class="row content-wrapper">
    <div class="col-md-8 col-sm-12 content">
      <h1>Quam Tristique Condimentum</h1>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        <span class="curabitur-blandit">Curabitur blandit</span>
        tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
        porta felis euismod semper.
      </p>
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <h2>Fringilla Euismod Adipiscing Ipsum</h2>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus
            mollis
            interdum. Aenean lacinia bibendum nulla sed.
          </p>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-img class="image" src="assets/main-image.png"/>
        </div>
      </div>
      <ul class="list">
        <li>Tellus Ullamcorper Inceptos</li>
        <li>Magna Condimentum
          <ul class="child-list">
            <li>Mattis Tristique</li>
            <li>Pharetra Pellentesque Dapibus</li>
          </ul>
        </li>
        <li>Aenean Inceptos</li>
        <li>Parturient Bibendum</li>
      </ul>
    </div>
    <div class="col-md-4 col-sm-12 calculator">
      <div class="calculator-content">
        <h4>Compensation Calculator</h4>
        <b-form class="calculator-form">
          <label>Average income</label>
          <b-input-group append="€">
            <b-input v-model="income"></b-input>
          </b-input-group>
          <label>Days on sick-leave</label>
          <b-input-group append="days">
            <b-input v-model="sickDays"></b-input>
          </b-input-group>
          <b-checkbox v-model="haveTuberculosis">I have tuberculosis</b-checkbox>
          <b-button class="calculate-button mt-2" @click="onCalculateClick" :disabled="!sickDays || !income">
            Calculate
          </b-button>
        </b-form>
        <hr/>
        <div class="row result">
          <div class="col-6">
            <p class="compensate-header">The employer compensates<br/><b>{{ employerCompensateDays }} days</b></p>
            <p class="compensate mb-0">{{ employerCompensate | round }}€</p>
            <p class="daily-allowance mb-0">Daily allowance <br/>{{ dailyAllowance | round }} €</p>
          </div>
          <div class="col-6">
            <p class="compensate-header">Health Insurance compensates<br/><b>{{ insuranceCompensateDays }} days</b></p>
            <p class="compensate mb-0">{{ insuranceCompensate | round }}€</p>
            <p class="daily-allowance mb-0">Daily allowance <br/>{{ dailyAllowance | round }} €</p>
          </div>
        </div>
        <hr/>
        <p class="total-compensation-title mb-0">Compensation total for {{ totalSickDays }} days (net)</p>
        <p class="total-compensation">{{ totalCompensation | round }}€</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DefaultLayout",
  }
</script>

<style lang="scss">

  #app {
    background: linear-gradient(90deg, #2B303A 0%, #3F4756 100%);
    height: 100%;
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 0;
  }

  .content-wrapper {
    padding: 100px;
  }

  .content {
    padding-right: 50px;

    h1 {
      font-family: 'Sora';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
      letter-spacing: -0.02em;
      color: #FFFFFF;
    }

    h2 {
      font-family: 'Sora';
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 35px;
      letter-spacing: -0.02em;
      color: #FFFFFF;
    }

    p {
      font-family: 'Sora';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      color: #FFFFFF;
    }

    .image {
      border-radius: 4px;
      width: 240px;
      height: 180px;
    }

    .list {
      padding-left: 0;
      list-style-type: none;
      font-family: 'Sora';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      color: #FFFFFF;

      li::before {
        padding-right: 4px;
        content: "-";
        width: 16px;
        height: 4px;
        font-size: 30px;
        background-image: linear-gradient(90deg, #911812 0%, #E1261C 100%);;
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
      }

      .child-list {
        list-style-type: none;

        li::before {
          padding-right: 4px;
          content: "-";
          width: 12px;
          height: 4px;
          font-size: 30px;
          background-image: linear-gradient(90deg, #D3DAE8 0%, #A7B7D8 100%);;
          background-size: 100%;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
        }
      }
    }

    .curabitur-blandit {
      text-decoration: underline;
      color: #E1261C;
    }
  }

  .calculator {
    .calculator-content {
      height: 755px;
      background: #FFFFFF;
      clip-path: polygon(5% 0, 95% 0, 100% 3%, 115% 90%, 95% 100%, 10% 102%, 0 97%, 0 3%);

      h4 {
        padding: 80px 20px 8px 20px;
        font-family: 'Sora';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 25px;
        letter-spacing: -0.02em;
        color: #111317;
      }

      label {
        font-family: 'Sora';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #111317;
        margin-bottom: 2px;
        margin-top: 8px;
      }

      .calculate-button {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 20px 40px;
        gap: 10px;
        background: linear-gradient(90deg, #911812 0%, #E1261C 100%);
        border-radius: 30px;
        border-color: unset;
        font-family: 'Sora';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        color: #FFFFFF;
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
        flex: none;
        order: 0;
        flex-grow: 0;
      }
    }
  }

  .compensate-header {
    font-family: 'Sora';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    text-align: center;
    color: #111317;
  }

  .compensate {
    font-family: 'Sora';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    color: #111317;
  }

  .daily-allowance {
    font-family: 'Sora';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #7A818E;
  }

  .total-compensation-title {
    font-family: 'Sora';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    align-items: center;
    text-align: center;
    color: #111317;
  }

  .total-compensation {
    font-family: 'Sora';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    align-items: center;
    text-align: center;
    color: #111317;
  }

  .calculator-form {
    padding: 0 20px 0 20px;
  }

  .result {
    padding: 0 20px 0 20px;
  }

  .input-group-text {
    border-left: unset;
    border-right: 1px solid #ced4da;
    border-bottom: 1px solid #ced4da;
    border-top: 1px solid #ced4da;
    background-color: unset;
    font-weight: bold;
    color: #111317;
  }

  .form-control {
    border-right: unset;
    border-left: 1px solid #ced4da;
    border-bottom: 1px solid #ced4da;
    border-top: 1px solid #ced4da;

    &:focus {
      box-shadow: unset;
      outline: none;
      border-color: #ced4da;
    }
  }

  @media screen and (max-width: 1000px) {
    .content-wrapper {
      padding: 50px;
    }

    .list {
      padding-top: 10px;
    }
  }

  @media screen and (max-width: 767px) {
    .content {
      padding-right: 0;
    }

    .calculator {
      padding-top: 25px;
      padding-bottom: 50px;
    }
  }
</style>