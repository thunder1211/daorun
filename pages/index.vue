<template>
  <div class="homePage">
    <div class="homeSlide">
      <a-carousel autoplay>
        <div class="slideItem">
          <div class="slideText" style="background-image: url(/images/home-banner01.jpg);">
            <h3>百川汇流  资源互享</h3>
            <p>世界华人基督教联盟是世界福音联盟辖下的第一个世界性华人事工平台，<br/>以百川汇流的概念，与全球华人信徒共同连结，资源互享，建立神国事工。</p>
          </div>
        </div>
        <div class="slideItem">
          <div class="slideText" style="background-image: url(/images/home-banner02.jpg);">
            <h3>百川汇流  资源互享</h3>
            <p>世界华人基督教联盟是世界福音联盟辖下的第一个世界性华人事工平台，<br/>以百川汇流的概念，与全球华人信徒共同连结，资源互享，建立神国事工。</p>
          </div>
        </div>
        <div class="slideItem">
          <div class="slideText" style="background-image: url(/images/home-banner03.jpg);">
            <h3>百川汇流  资源互享</h3>
            <p>世界华人基督教联盟是世界福音联盟辖下的第一个世界性华人事工平台，<br/>以百川汇流的概念，与全球华人信徒共同连结，资源互享，建立神国事工。</p>
          </div>
        </div>
      </a-carousel>
    </div>
    <div class="wrapMid">
      <a-row class="whoWrap" justify="space-between">
        <a-col :lg="12" :md="12" :xs="24" class="secL">
          <div class="secTit">
            <h2>我们是谁</h2>
            <h3>Who we are</h3>
          </div>
          <div class="txt1">世界华人基督教联盟是世界福音联盟辖下的第一个世界性华人事工平台，以百川汇流的概念，与全球华人信徒共同连结，资源互享，建立神国事工。</div>
          <div class="txt2">世界华人基督教联盟透过六大版块，分为三大流域，为全球华人信徒服务。上游：智库中心、学术中心；中游：出版中心、资源中心；下游：培训中心媒体中心，使各地资源集合，为学者、教牧、领袖、信徒等提供整全供应。</div>
          <NuxtLink to="/about" class="moreBtn">了解更多</NuxtLink>
        </a-col>
        <a-col :lg="10" :md="11" :xs="24" class="secR">
          <img src="../public/images/pic-who01.jpg" />
        </a-col>
      </a-row>
    </div>
    <div class="whatdoOut">
      <div class="WRAP_MIDDLE">
        <div class="secTit">
          <h2>我们做什么</h2>
          <h3>What we do</h3>
        </div>
        <a-row class="secWrap" justify="space-between">
          <a-col :lg="7" :md="11" :xs="24" class="secBox  box1">
            <a-row justify="space-between">
              <a-col :md="7" :xs="4" class="iconArea"><img src="../assets/images/icon-what01.png"/></a-col>
              <a-col :md="15" :xs="18" class="txts">
                <h4>智库中心</h4>
                <p>本中心旨在透过调查、分析研究等，藉着会面协谈或文章分析，以圣经原则和理论架构，为教会和社会提供全面、深度、完整的建议和方向，在时局趋势、社会议题、教会发展等提出富深度、前沿、具体的方案。</p>
                <div class="popOut">
                  <h4>智库中心</h4>
                  <p>本中心旨在透过调查、分析研究等，藉着会面协谈或文章分析，以圣经原则和理论架构，为教会和社会提供全面、深度、完整的建议和方向，在时局趋势、社会议题、教会发展等提出富深度、前沿、具体的方案。</p>
                </div>
              </a-col>
            </a-row>
          </a-col>
          <a-col :lg="7" :md="11" :xs="24" class="secBox  box2">
            <a-row justify="space-between">
              <a-col :md="7" :xs="4" class="iconArea"><img src="../assets/images/icon-what02.png"/></a-col>
              <a-col :md="15" :xs="18" class="txts">
                <h4>学术中心</h4>
                <p>供全球学者有一个思考交流课题探讨的平台，藉着研发策略学术文章、讲座论坛等，以圣经、神学、理论、生命为核心，将学术研究或策略远象等发表出来，供全球华人教会参考和研读。</p>
                <div class="popOut">
                  <h4>学术中心</h4>
                  <p>供全球学者有一个思考交流课题探讨的平台，藉着研发策略学术文章、讲座论坛等，以圣经、神学、理论、生命为核心，将学术研究或策略远象等发表出来，供全球华人教会参考和研读。</p>
                </div>
              </a-col>
            </a-row>
          </a-col>
          <a-col :lg="7" :md="11" :xs="24" class="secBox  box3">
            <a-row justify="space-between">
              <a-col :md="7" :xs="4" class="iconArea"><img src="../assets/images/icon-what03.png"/></a-col>
              <a-col :md="15" :xs="18" class="txts">
                <h4>出版中心</h4>
                <p>本中心旨在出版全球华人基督徒的优良书刊，以基于圣经基础的原则，配合华人文化的处境，合宜地回应社会需要、适应时代趋势、建构华人文化、落实天国异象，以最佳的思想结晶，呈献给各地华人信徒使用。</p>
                <div class="popOut">
                  <h4>出版中心</h4>
                  <p>本中心旨在出版全球华人基督徒的优良书刊，以基于圣经基础的原则，配合华人文化的处境，合宜地回应社会需要、适应时代趋势、建构华人文化、落实天国异象，以最佳的思想结晶，呈献给各地华人信徒使用。</p>
                </div>
              </a-col>
            </a-row>
          </a-col>
          <a-col :lg="7" :md="11" :xs="24" class="secBox  box4">
            <a-row justify="space-between">
              <a-col :md="7" :xs="4" class="iconArea"><img src="../assets/images/icon-what04.png"/></a-col>
              <a-col :md="15" :xs="18" class="txts">
                <h4>资源中心</h4>
                <p>本中心旨在凝聚各地华人基督徒资源，藉着网络的空间搜集过往和现今的宝库，分享给全球教会使用，帮助全球教会在布道植堂、栽培训练、策略研究等都有全面的架构，达至开拓视野、激活思考、落实执行的作用。</p>
                <div class="popOut">
                  <h4>资源中心</h4>
                  <p>本中心旨在凝聚各地华人基督徒资源，藉着网络的空间搜集过往和现今的宝库，分享给全球教会使用，帮助全球教会在布道植堂、栽培训练、策略研究等都有全面的架构，达至开拓视野、激活思考、落实执行的作用。</p>
                </div>
              </a-col>
            </a-row>
          </a-col>
          <a-col :lg="7" :md="11" :xs="24" class="secBox  box5">
            <a-row justify="space-between">
              <a-col :md="7" :xs="4" class="iconArea"><img src="../assets/images/icon-what05.png"/></a-col>
              <a-col :md="15" :xs="18" class="txts">
                <h4>培训中心</h4>
                <p>这里是辅助信息文字示本中心旨在为全球华人信徒提供整全的门徒培训计划，造就信徒建立教会。本中心秉持圣经的原则和指导，从圣经与宣教的角度出发，拓展全方位师资培训课程，同时也开发门徒培训课程。例展示，最先显示两行折行</p>
                <div class="popOut">
                  <h4>培训中心</h4>
                  <p>这里是辅助信息文字示本中心旨在为全球华人信徒提供整全的门徒培训计划，造就信徒建立教会。本中心秉持圣经的原则和指导，从圣经与宣教的角度出发，拓展全方位师资培训课程，同时也开发门徒培训课程。例展示，最先显示两行折行</p>
                </div>
              </a-col>
            </a-row>
          </a-col>
          <a-col :lg="7" :md="11" :xs="24" class="secBox  box6">
            <a-row justify="space-between">
              <a-col :md="7" :xs="4" class="iconArea"><img src="../assets/images/icon-what06.png"/></a-col>
              <a-col :md="15" :xs="18" class="txts">
                <h4>媒体中心</h4>
                <p>本中心旨在使用崭新媒体盛载不变真理，迎接时代不断发展，配合科技潮流变化面对新世代需要，传递给各地域、各阶层、各年龄的华人信徒，使他们既认知时局发展，也明白圣经真理，以至生命获得深厚丰盛的结连。</p>
                <div class="popOut">
                  <h4>媒体中心</h4>
                  <p>本中心旨在使用崭新媒体盛载不变真理，迎接时代不断发展，配合科技潮流变化面对新世代需要，传递给各地域、各阶层、各年龄的华人信徒，使他们既认知时局发展，也明白圣经真理，以至生命获得深厚丰盛的结连。</p>
                </div>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="eventsOut">
      <div class="wrapMid">
        <div class="secTit">
          <h2>活动列表</h2>
          <h3>Activity list</h3>
          <div class="moreArea"><NuxtLink to="/events" class="moreLink">更多</NuxtLink></div>
        </div>
        <a-row class="secWrap" justify="space-between">
          <a-col :lg="11" :md="24" :xs="24" class="secBox">
            <a-row justify="space-between" class="secBoxin">
              <a-col :lg="11" :md="6" :xs="8" class="imgArea"><img src="../public/images/huodong-1.jpg"/></a-col>
              <a-col :lg="12" :md="16" :xs="14" class="txts">
                <h4>第二届 属灵领袖传承之旅</h4>
                <div class="time">2022-10-28</div>
                <p>本中心旨在透过调查、分析研究等，藉着会面协谈或文章分析，以圣经原则和理论架构，为教会和社会提供全面、深度、完整的建议和方向，在时局趋势、社会议题、教会发展等提出富深度、前沿、具体的方案。</p>
              </a-col>
            </a-row>
          </a-col>
          <a-col :lg="2" :md="0" :xs="0" class="secDiv"></a-col>
          <a-col :lg="11" :md="24" :xs="24" class="secBox">
            <a-row justify="space-between" class="secBoxin">
              <a-col :lg="11" :md="6" :xs="8" class="imgArea"><img src="../public/images/huodong-2.jpg"/></a-col>
              <a-col :lg="12" :md="16" :xs="14" class="txts">
                <h4>2023年D6 家庭事工大会</h4>
                <div class="time">2022-10-28</div>
                <p>信仰的传承是上帝给我们的定规，摩西在申命记 6:5-7 说：你要尽心、尽性、尽力爱耶和华－你的上帝。我今日吩咐你的这些话都要记在心上，也要殷勤教导你的儿女。</p>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="resourceOut">
      <div class="wrapMid">
        <div class="secTit">
          <h2>资源推荐</h2>
          <h3>Resource recommendation</h3>
          <div class="moreArea"><NuxtLink to="/resource" class="moreLink">更多</NuxtLink></div>
        </div>
        <a-row class="secWrap" justify="space-between" :gutter="{lg: 25, md: 20, xs: 0}">
          <a-col :lg="8" :md="8" :xs="24" class="secBox">
              <div class="imgArea"><img src="../public/images/ziyuan-1.jpg"/></div>
              <div class="txts">
                <h4>成了肉身的“道”与语言文字的“道”</h4>
                <div class="time">2022-10-28</div>
              </div>
          </a-col>
          <a-col :lg="8" :md="8" :xs="24" class="secBox">
              <div class="imgArea"><img src="../public/images/ziyuan-2.jpg"/></div>
              <div class="txts">
                <h4>回首古老故事，面向难明禁令</h4>
                <div class="time">2022-10-28</div>
              </div>
          </a-col>
          <a-col :lg="8" :md="8" :xs="24" class="secBox">
              <div class="imgArea"><img src="../public/images/ziyuan-3.jpg"/></div>
              <div class="txts">
                <h4>我们与上帝是什么关系？</h4>
                <div class="time">2022-10-28</div>
              </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.homePage{
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.homeSlide{
  .slideItem{
    position: relative;
    height: 470px;
    .slideText{
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      background-repeat: no-repeat;
      background-position: center top;
      background-size: cover;
      h3{
        font-size: 48px;
        color: #fff;
      }
      p{
        font-size: 18px;
        color: #ffff;
      }
    }
    .slideImg{
      width: 100%;
      vertical-align: top;
    }
  }
}
.wrapMid {
  max-width: $maxWidth;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
}
.secTit{
  display: flex;
  flex-direction: row;
  align-items: baseline;
  h2{
    margin-right: 20px;
    font-size: 34px;
    color: $colorMainText;
  }
  h3{
    font-size: 30px;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #ccc;
  }
  .moreArea{
    flex: 1;
    text-align: right;
    .moreLink{
      color: #394666;
    }
  }
}
.whoWrap{
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 70px 0;
  &::before{
    content: '';
    position: absolute;
    right: 25px;
    top: 15px;
    width: 100%;
    height: 100%;
    background-image: url("../assets/images/logo-white-alpha.png");
    background-repeat: no-repeat;
    background-position: right center;
    background-size: contain;
  }
  .secL{
    .txt1{
      margin-bottom: 20px;
      line-height: 1.8em;
      font-size: 20px;
      color: #000;
    }
    .txt2{
      margin-bottom: 30px;
      line-height: 1.8em;
      font-size: 18px;
      color: #666;
    }
    .moreBtn{
      display: inline-block;
      height: 44px;
      line-height: 44px;
      width: 140px;
      text-align: center;
      font-size: 17px;
      border-radius: 5px;
      color: #fff;
      background: $colorMainText;
    }
  }
  .secR{
    img{
      width: 100%;
      border-radius: 20px;
    }
  }
}

.whatdoOut{
  padding: 70px 0 20px;
  background-color: #efefef;

  .secTit{
    display: flex;
    flex-direction: row;
    align-items: baseline;
    h2{
      margin-right: 20px;
      font-size: 34px;
      color: $colorMainText;
    }
  }
  .secWrap{
    margin-top: 50px;
    .secBox{
      position: relative;
      margin-bottom: 70px;
      .txts{
        .popOut{
          display: none;
        }
      }
      .txts{
        &:hover{
          &::before{
            position: absolute;
            top: 3em;
            right: 100%;
            content: '';
            display: inline-block;
            width: 0;
            height: 0;
            border: 18px solid transparent;
            border-right-color: #fff;
          }
          .popOut{
            display: block;
            position: absolute;
            top: 0;
            z-index: 20;
            padding: 2em;
            margin: 0 -2em 0 0;
            border-radius: 10px;
            background: #fff;
            p{
              height: auto;
              overflow: visible;
            }
          }
        }
      }
      &:nth-child(4),&:nth-child(5),&:nth-child(6){
        .txts{
          &:hover{
            .popOut{
              top: auto;
              bottom: 0;
            }
          }
        }
      }
    }
    .iconArea{
      img{
        width: 100%;
      }
    }
    .txts{
      h4{
        font-size: 26px;
        color: #000;
      }
      p{
        overflow: hidden;
        height: 4em * 1.8;
        font-size: 18px;
        line-height: 1.8em;
        color: #666;
      }
    }
  }
}
.eventsOut{
  padding-bottom: 50px;
  .secTit{
    padding-top: 30px;
    margin-bottom: 50px;
    border-bottom: 1px solid #c6c9d3;
    h2, h3{
      margin-bottom: 10px;
    }
  }
  .secDiv{
    position: relative;
    &::before{
      content: '';
      position: absolute;
      height: 95%;
      left: 50%;
      top: 0;
      border-left: 1px solid #c6c9d3;
    }
  }
  .secBox{
    .imgArea{
      img{
        width: 100%;
      }
    }
    .txts{
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      h4{
        font-size: 24px;
        color: #282728;
      }
      .time{
        font-size: 14px;
        color: #999;
        margin-bottom: 20px;
      }
      p{
        margin-bottom: 0;
        line-height: 1.8em;
        font-size: 18px;
        color: #666;
      }
    }
  }
}
.resourceOut{
  padding: 0 0 60px;
  background-color: #394666;
  .secTit{
    padding-top: 40px;
    margin-bottom: 20px;
    h2, h3{
      margin-bottom: 0;
    }
    h2{
      color: #a7b1c9;
    }
    h3{
      color: #6e768b;
    }
    .moreArea{
      .moreLink{
        color: #a7b1c9;
      }
    }
  }
  .secBox{
    .imgArea{
      img{
        width: 100%;
      }
    }
    .txts{
      padding: 20px;
      background-color: #fff;
      h4{
        margin-bottom: 5px;
        line-height: 1.25em;
        font-size: 24px;
        color: #282728;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .time{
        font-size: 16px;
        color: #394666;
      }
    }
  }
}
/* START -------------------- 响应式布局样式： 小屏幕 -------------------- */
@media screen and (max-width: 992px) {
  .wrapMid{
    padding: 0 10px;
  }
  .secTit{
    position: relative;
    .moreArea{
      position: absolute;
      right: 0;
      bottom: 10px;
    }
  }
  .whoWrap{
    padding-top: 30px;
    .secL{
      margin-bottom: 30px;
    }
    .secR{
      text-align: center;
      img{
        max-width: 500px;
      }
    }
  }
  .whatdoOut{
    .secWrap{
      .secBox{
        &:nth-child(4){
          .txts{
            &:hover{
              .popOut{
                top: 0;
                bottom: auto;
              }
            }
          }
        }
      }
    }
  }
  .eventsOut{
    .secTit{
      padding-top: 30px;
      margin-bottom: 30px;
    }
    .secBox{
      margin-bottom: 30px;
    }
  }
  .resourceOut{
    .secBox{
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width: 768px) {
  .eventsOut .secBox .txts{
    h4{
      font-size: 20px;
    }
    .time{
      font-size: 12px;
    }
    p{
      font-size: 16px;
    }
  }
  .resourceOut{
    .secWrap{
      max-width: 400px;
      margin: 0 auto;
    }
    .secBox .txts h4{
      font-size: 20px;
    }
  }
  .whatdoOut{
    padding: 40px 10px;
    .secTit{
      h2{
        font-size: 24px;
      }
    }
    .secWrap{
      margin-top: 20px;
      .secBox{
        margin-bottom: 20px;
        .txts{
          &:hover{
            &::before{
              display: none;
            }
            .popOut{
              display: none;
            }
          }
        }

      }
      .txts{
        h4{
          font-size: 20px;
        }
        p{
          height: auto;
          overflow: visible;
          font-size: 16px;
        }
      }
    }
  }
}
@media screen and (max-width: 576px) {
  .homeSlide{
    .slideItem{
      height: 300px;
      .slideText{
        h3{
          font-size: 36px;
        }
        p{
          font-size: 14px;
        }
      }
    }
  }
  .secTit{
    flex-direction: column;
    h2{
      margin-bottom: 0;
      font-size: 28px;
    }
    h3{
      font-size: 24px;
    }
  }
  .whoWrap .secL{
    .txt1{
      font-size: 18px;
    }
    .txt2{
      font-size: 16px;
    }
  }
  .eventsOut .secTit{
    padding-top: 15px;
    h2, h3{
      margin-bottom: 0;
    }
  }
  .resourceOut .secTit{
    padding-top: 20px;
    h3{
      font-size: 18px;
    }
    .moreArea{
      bottom: 0.25em;
    }
  }
}
/* END -------------------- 响应式布局样式： 小屏幕 -------------------- */
</style>

<!-- 覆盖三方样式 -->
<style lang="scss">
.homeSlide{
  .slick-dots li.slick-active{
    width: 30px;
    button{ 
      background: #d86f4b;
    }
  }
  .slick-dots li{
    width: 9px;
    height: 9px;
    margin: 0 10px;
    button{
      height: 9px;
      border-radius: 20px;
      opacity: 1;
    }
  }
}
</style>