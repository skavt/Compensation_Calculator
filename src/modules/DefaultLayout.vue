<template>
  <div id="menu-content-wrapper" class="d-flex justify-content-between">
    <div class="content">
      <h1>Quam Tristique Condimentum</h1>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        <span class="curabitur-blandit">Curabitur blandit</span>
        tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
        porta felis euismod semper.
      </p>
      <div class="d-flex justify-content-between">
        <div>
          <h2>Fringilla Euismod Adipiscing Ipsum</h2>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus
            mollis
            interdum. Aenean lacinia bibendum nulla sed.
          </p>
        </div>
        <b-img class="image" src="assets/main-image.png"/>
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
    <div class="calculator">

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
    height: 100%;
    display: flex;
    overflow: hidden;
    margin-top: 0;
  }

  #menu-content-wrapper {
    background: linear-gradient(90deg, #2B303A 0%, #3F4756 100%);
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .content {
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
</style>