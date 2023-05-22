<template>
  <div class="SubpageBanner" :style="`background-image: url(${img_aboutBanner01});`"></div>
  <div class="WRAP_MIDDLE">
    <div class="aboutS1">
      <a-row justify-content :gutter="{lg:48, md:48, xs:48}" class="secIn">
        <a-col :lg="11" :md="11" :xs="24" class="imgArea">
          <img :src="img_aboutPic01" />
        </a-col>
        <a-col :lg="13" :md="13" :xs="24" class="txtsArea">
          <h2>道渊学社简介</h2>
          <div class="txts">
            <p>道渊学社(EnArche Institute)是具有国际性的专业服务机构，围绕着六大事工（智库、学术、资源、培训、出版、媒体）提供全方位咨询及服务。</p>
            <p>它有着自己的特色，掌握核心优势，面向全世界成立独特的咨询及执行机构。它同时也服务于世界华人基督教联盟，世界华人基督教联盟(World Chinese Christianity Alliance)是世界福音联盟(World Evangelical Alliance)辖下最大的、最全面的华人事工平台。</p>
            <p>道渊学社不仅是世界华人基督教联盟的“秘书处“，也如同面向世界的“服务器”。</p>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
  <div class="aboutS2">
    <div class="WRAP_MIDDLE">
      <h2>信仰宣言</h2>
      <h3>我们相信：</h3>
      <a-row justify-content :gutter="{lg:64, md:64, xs:64}">
        <a-col :lg="12" :md="12" :xs="24" class="firstCol">
          <div class="txts">
            <p>圣经源自上帝自己，是上帝所默示的，是完全无误的，是全然可信的，是信仰和行为各层面的最高权威。</p>
            <p>上帝是圣父、圣子、圣灵三位一体的独一真神。</p>
            <p>我们的主耶稣基督是道成肉身的神，由童贞女所生，一生无罪，施行神迹，为世人赎罪，以无罪的生命替代罪人而死，身体复活、升天，为世人代祷，并将带着权柄和荣耀，以肉身再临。</p>
          </div>
        </a-col>
        <a-col :lg="12" :md="12" :xs="24">
          <div class="txts">
            <p>失丧罪人无法靠自己行为自救，唯独因着信心，藉着主耶稣基督的宝血而得蒙救赎，藉由圣灵重生。</p>
            <p>圣灵内住在信徒里面，使他们有能力去过圣洁的生活，见证主耶稣基督，服事祂。所有真信徒、教会和基督的肢体在圣灵里合一。</p>
            <p>所有死人的身体最终都要复活，信的人因基督得享永生，不信的人因罪孽得受永罚。</p>
          </div>
        </a-col>
      </a-row>
      <div class="note">*本信仰宣言是根据世界福音联盟（World Evangelical Alliance）翻译</div>
    </div>
  </div>
  <div class="aboutS3">
    <div class="WRAP_MIDDLE">
      <a-row justify-content :gutter="{lg:64, md:64, xs:64}">
        <a-col :lg="12" :md="12" :xs="24" class="secBox">
          <div class="head">
            <img class="icon" src="../../assets/images/icon-user.png" />
            <h3>使命宣言</h3>
          </div>
          <div class="imgArea">
            <img :src="img_aboutPicA01" />
          </div>
          <div class="txts">
            <p>以履行基督大使命为目标，服务全世界为中心，以全球基督教华人、教会、机构等为导向，建立一个国际性的咨询及执行事工平台。</p>
          </div>
        </a-col>
        <a-col :lg="12" :md="12" :xs="24" class="secBox">
          <div class="head">
            <img class="icon" src="../../assets/images/icon-collect.png" />
            <h3>使命宣言</h3>
          </div>
          <div class="imgArea">
            <img :src="img_aboutPicA02" />
          </div>
          <div class="txts">
            <p>期望可以提供最大限度的一站式服务，借由最专业的水准，连结全球华人基督徒，进行资源整合。将不同来源、层次、结构、内容的资源进行激活与有效融合，使其具有较强的系统性、传递性和价值性，并开发出新资源、开拓出新疆界。</p>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
  <div class="aboutS2">
    <div class="WRAP_MIDDLE">
      <h2>我们的价值观</h2>
      <a-row justify-content :gutter="{lg:64, md:64, xs:64}">
        <a-col :lg="24" :md="24" :xs="24">
          <div class="txts">
            <p>任重道远的道渊学社，不仅有谦卑的服事，还有国际化的视野。我们怀抱感恩的心，不断更新，突破过往。力求用更专业的态度和标准联结每个教会、机构，乃至个人。我们通过网站建设、开发课程、线上线下活动等形式集结人才、整合资源。招聚不同领域的专家，共同开创属于全世界华人的基督教合一运动。</p>
            <p>道渊学社将以高效的执行力、强大的推动力以及创新的拓展力打造出华人基督徒神圣的交流平台。使信息多面化、营建专业化、人才全面化、思维全球化、服务知性化。</p>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
  <div class="aboutS3">
    <div class="WRAP_MIDDLE">
      <a-row justify-content :gutter="{lg:64, md:64, xs:64}">
        <a-col :lg="12" :md="12" :xs="24" class="secBox">
          <div class="head">
            <img class="icon" src="../../assets/images/icon-global.png" />
            <h3>国际性咨询与服务</h3>
          </div>
          <div class="imgArea">
            <img :src="img_aboutPicB01" />
          </div>
          <div class="txts">
            <p>道渊学社作为领先的、国际性的服务机构，如同全球性咨询公司，致力于帮助世界各地华人基督徒群体、以使命为导向的教会、机构等。除了提供一流的资源，还向世界提供国际性的咨询与服务。</p>
          </div>
        </a-col>
        <a-col :lg="12" :md="12" :xs="24" class="secBox">
          <div class="head">
            <img class="icon" src="../../assets/images/icon-note.png" />
            <h3>秘书处与服务器</h3>
          </div>
          <div class="imgArea">
            <img :src="img_aboutPicB02" />
          </div>
          <div class="txts">
            <p>道渊学社作为世界华人基督教联盟秘书处和服务器，负责处理其主要委任的各项日常工作及整体的运营和行政工作，任务是向世界华人基督教联盟成员提供高质高效的服务。</p>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import img_aboutBanner01 from '@/assets/images/pics/about-banner01.jpg'
import img_aboutPic01 from '@/assets/images/pics/about-pic01.jpg'

import img_aboutPicA01 from '@/assets/images/pics/about-picA-01.jpg'
import img_aboutPicA02 from '@/assets/images/pics/about-picA-02.jpg'
import img_aboutPicB01 from '@/assets/images/pics/about-picB-01.jpg'
import img_aboutPicB02 from '@/assets/images/pics/about-picB-02.jpg'

// console.log('img_aboutBanner01:', img_aboutBanner01)
</script>

<style lang="scss" scoped>
.aboutS1{
  margin: 50px 0;
  /* box-shadow: 0 10px 15px rgba(0,0,0,0.05); */
  .imgArea{
    img{
      width: 100%;
      vertical-align: top;
    }
  }
  .txtsArea{
    h2{
      margin-top: 0.5em;
      font-size: 38px;
    }
    .txts{
      p{
        margin-bottom: 2em;
        line-height: 1.8em;
        font-size: 20px;
        color: $textColor;
        &:last-child{
          margin-bottom: 0;
        }
      }
    }
  }
}
.aboutS2{
  padding: 30px 0;
  background-color: #f3f3f3;
  h2{
    font-size: 38px;
    line-height: 2em;
    text-align: center;
  }
  h3{
    margin-bottom: 2em;
    font-size: 22px;
    color: $textColor;
  }
  .txts{
    max-width: 1000px;
    margin: 0 auto;
  }
  p{
      margin-bottom: 2em;
      font-size: 20px;
      color: $textColor;
  }
  .firstCol{
    border-right: 1px solid #ddd;
  }
  .note{
    letter-spacing: 0.1em;
    line-height: 2em;
    margin: 1em 0;
    padding: 0 1em;
    text-align: center;
    font-size: 22px;
    color: $textColor;
    font-weight: bold;
  }
}
.aboutS3{
  padding: 3em 0 2em;
  .secBox{
    margin-bottom: 1em;
  }
  .head{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 1em;
    font-size: 24px;
    .icon{
      height: 1.5em;
      margin-right: 10px;
      vertical-align: top;
    }
    h3{
      line-height: 1em;
      margin-bottom: 0;
      font-weight: normal;
    }
  }
  .imgArea{
    margin-bottom: 1em;
    img{
      width: 100%;
      vertical-align: top;
    }
  }
  .txts{
    font-size: 16px;
    line-height: 1.8em;
  }
}
/* START -------------------- 响应式布局样式： 小屏幕 -------------------- */
@media screen and (max-width: 992px) {
  .aboutS1{
    .imgArea{
      margin-bottom: 20px;
      text-align: center;
    }
    .txtsArea{
      h2{
        font-size: 24px;
      }
      .txts{
        p{
          font-size: 16px;
        }
      }
    }
  }
  .aboutS3 .head{
    font-size: 18px;
  }
}

@media screen and (max-width: 768px) {
  .aboutS1{
    .imgArea{
      img{
        max-width: 50%;
      }
    }
  }
  .aboutS2{
      .firstCol{
        border-right: none;
      }
      h2{
        font-size: 22px;
      }
      h3{
        margin-bottom: 1em;
        font-size: 16px;
      }
      p{
        margin-bottom: 1em;
        font-size: 16px;
      }
      .note{
        font-size: 16px;
      }
    }
  }
</style>