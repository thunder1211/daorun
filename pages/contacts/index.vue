<template>
  <div class="SubpageBanner" style="background-image: url(/images/contacts-banner01.jpg);"></div>
  <div class="WRAP_MIDDLE sec01">
    <h2>约束声明</h2>
    <dl>
      <dt>网站使用者不可作出以下行为：</dt>
      <dd>1、侵害本网站或第三者的知识财产权、有害隐私或信用等行为。</dd>
      <dd>2、透过本网站内容，冒用名誉或盗用内容，发布电脑病毒等有害的程序等行为。</dd>
      <dd>3、违反法律、公众秩序及善良风俗的行为。</dd>
      <dd>4、妨害本网站运作的行为。</dd>
      <dd>5、有损上帝之名，违背圣经教导的言论与资料。</dd>
    </dl>
    <p>选择成为本网站会员，即表示您愿意收到本网站的电子邮件或消息等。本网站有权按实际执行情况，增加、修改或终止相关活动，并选择最适当方式通知会员。</p>
    <p>如欲转载本网站内容（包括资料与照片等），作为本网站活动以外用途，需先向本网站提出申请，可电邮询问：<a href="mailto:info@eai.sg">info@eai.sg</a>。本网站对违反规定者保留法律诉讼权利。</p>
  </div>
  <div class="contactInfosOut">
    <div class="WRAP_MIDDLE">
      <div class="contactInfos">
        <div class="phoneCol">
          <div class="icon_phone">
            <img src="../../assets/images/icon-phone.png" style="width: 100%;" />
          </div>
          <div class="txts">
            <h4>联系电话</h4>
            <div>+65 63043772</div>
          </div>
        </div>
        <div class="divBar"></div>
        <div class="middleCol">
          <div class="txts">
            联系地址：ENARCHE INSTITUTE LTD., 7 Armenian Street, #03-08E, Bible House, Singapore 179932 
          </div>
        </div>
        <div class="divBar"></div>
        <div class="lastCol">
          <div class="txts">
            <div>联系电邮：<a href="mailto:info@eai.sg">info@eai.sg</a></div>
            <div>联系传真：+65 66342909</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.sec01{
  padding: 50px 10px;
  font-size: 22px;
  color: $textColor;
  a{
    color: #111;
  }
  h2{
    font-size: 34px;
  }
  dl{
    margin-bottom: 30px;
    font-size: 22px;
    dt{
      line-height: 2em;
    }
    dd{
      line-height: 2em;
    }
  }
}
.contactInfosOut{
  background-image: url(../../assets/images/bg-contacts-page.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.contactInfos{
  position: relative;
  height: 234px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 18px;
  a{
    color: #fff;
  }
  .phoneCol{
    position: relative;
    display: flex;
    flex-direction: row;
    font-size: 28px;
    h4{
      margin: 0;
      font-size: 20px;
      font-weight: normal;
      color: #fff;
    }
    .icon_phone{
      width: 2.5em;
      margin-right: 0.5em;
    }
  }
  .middleCol{
    position: relative;
    display: flex;
    justify-content: center;
    width: 350px;
  }
  .lastCol{
    display: flex;
    justify-content: flex-end;
    .txts{
      display: inline-block;
    }
  }
  .divBar{
    height: 50%;
    width: 1px;
    margin: 0 30px;
    background-color: rgba(255,255,255,0.25);
  }
}
/* START -------------------- 响应式布局样式： 小屏幕 -------------------- */
@media screen and (max-width: 992px) {
}

@media screen and (max-width: 768px) {
  .sec01{
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 18px;
    h2{
      font-size: 24px;
    }
    dl{
      font-size: 18px;
      dt, dd{
        line-height: 1.5em;
      }
    }
  }
  .contactInfos{
    justify-content: center;
    .phoneCol{
      position: relative;
      display: flex;
      flex-direction: row;
      font-size: 18px;
      line-height: 1em;
      h4{
        font-size: 12px;
      }
      .icon_phone{
        width: 2em;
      }
    }
    flex-direction: column;
    padding: 2em 0;
    font-size: 16px;
    .middleCol{
      margin: 1em 0;
      text-align: center;
      font-size: 14px;
    }
    .lastCol{
      display: flex;
      justify-content: flex-end;
      .txts{
        display: flex;
        flex-direction: row;
        font-size: 14px;
        > div{
          margin: 0 0.5em;
        }
      }
    }
  }
  .divBar{
    display: none;
  }
}
</style>