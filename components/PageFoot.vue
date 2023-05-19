<template>
  <div class="footWrap">
    <div class="wrapMid">
      <div class="footIn">
        <div class="LogoWrap"></div>
        <div class="footNav">
          <NuxtLink class="navItem"
              :to="menu.path" v-for="menu in menus"
            >{{ menu.name }}</NuxtLink>
        </div>
        <div class="contactInfos">
          <span>邮箱  info@eai.sg</span>
          <span>电话 +65 63043772</span>
          <span>传真 +65 66342909</span>
        </div>
      </div>
    </div>
  </div>
  <div class="copyright">
    <div class="copyrightIn">
      <span>© 2023 OLIVET UNIVERSITY. All Rights Reserved.</span>
      <span>36401 Tripp Flats Rd. Anza, CA 92539 Tel. 951.763.0500</span>
      </div>
  </div>
</template>

<script setup>
import { store } from '../store.js'

const menus = store.menus
</script>

<style lang="scss" scoped>
.footWrap {
  padding: 30px 0;
  color: #666;
  background-color: #e6e6e6;
  a{
    color: #666;
  }
  .footIn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .LogoWrap{
    display: inline-block;
    width: 231px;
    height: 85px;
    background-image: url("../assets/images/logo-foot.png");
    background-repeat: no-repeat;
    background-position: center top;
    background-size: contain;
  }
  .footNav{
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    .navItem{
      margin: 0 22px;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .languageOption{
    font-size: 12px;
  }
}
.contactInfos{
  font-size: 10px;
  text-align: center;
  span{
    margin: 0 20px;
  }
}
.copyright{
  max-width: 1024;
  margin: 0 auto;
  padding: 20px 0;
  border-top: 1px solid #ccc;
  text-align: center;
  font-size: 10px;
  background-color: #e6e6e6;
}
.wrapMid {
  max-width: $maxWidth;
  margin: 0 auto;
}
@media screen and (max-width: 860px) {
  .footWrap{
    .LogoWrap{
      height: 40px;
    }
    .footNav{
      /* flex-direction: column; */
      .navItem{
        font-size: 18px;
        margin: 0 10px;
      }
    }
  }
  .contactInfos{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .copyrightIn{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
