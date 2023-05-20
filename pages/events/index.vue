<template>
  <div class="SubpageBanner" :style="`background-image: url(${img_whatwedoBanner01});`"></div>
  <div class="WRAP_MIDDLE">
    <a-row justify="space-between">
      <a-col :lg="14" :md="14" :xs="24" class="mainContents">
        <div class="listTop">
          <h2>活动列表</h2>
        </div>
        <a-row v-for="item in dataList" class="listItem" justify="space-between">
          <a-col :lg="7" :md="7" :xs="7">
            <NuxtLink :to="`/events/${item.id}`" class="imgArea">
              <img :src="item.img" />
            </NuxtLink>
          </a-col>
          <a-col :lg="15" :md="15" :xs="16">
            <div class="txtArea">
              <NuxtLink :to="`/events/${item.id}`" class="tit">{{ `${item.title}` }}</NuxtLink>
              <div class="infos">
                <span class="info">来源：<span class="sp">{{ `${item.source}` }}</span></span>
                <span class="info">作者：<span class="sp">{{ `${item.author}` }}</span></span>
                <span class="info">时间：{{ `${item.time}` }}</span>
              </div>
              <div class="summary">{{ item.summary }}</div>
            </div>
          </a-col>
        </a-row>
        <div class="morePage">
          <span class="moreBtn">更 多</span>
        </div>
      </a-col>
      <a-col :lg="9" :md="9" :xs="24" class="sideContents">
        <div class="listTop">
          <h2>文章推荐</h2>
        </div>
        <div class="lists">
          <div v-for="(item, index) in dataList2" class="listItem">
            <div><div class="number">{{ index+1 }}</div></div>
            <NuxtLink :to="`/events/${item.id}`" class="tit">{{ `${item.title}` }}</NuxtLink>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import img_whatwedoBanner01 from '@/assets/images/pics/whatwedo-banner01.jpg'
import { ref } from 'vue'

let dataList = [
  {id: 1, title: '我们与上帝是什么关系？', source: '道渊学社', author: '管理员', time: '2023年4月12日', img: '/images/huodong-1.jpg', summary: '一个领导者的长久价值由其继承者决定。一位领袖的历史地位有赖于顺利地传承。犹如多年苦心经营的老店面临各种冲击，后劲不足且后继无人，不得己要化为一声叹息;基督信仰、属灵文化、领导力、委身意识、属灵遗产、统合综效的能力等，也在面临“失传失承”的危机，薪火相传仿佛也显得遥不可及。'},
  {id: 2, title: '五十年巨变后的华文教会', source: '道渊学社', author: '管理员', time: '2023年4月12日', img: '/images/huodong-1.jpg', summary: '一个领导者的长久价值由其继承者决定。一位领袖的历史地位有赖于顺利地传承。犹如多年苦心经营的老店面临各种冲击，后劲不足且后继无人，不得己要化为一声叹息;基督信仰、属灵文化、领导力、委身意识、属灵遗产、统合综效的能力等，也在面临“失传失承”的危机，薪火相传仿佛也显得遥不可及。'},
  {id: 3, title: '上帝与人同在——圣诞的真谛', source: '道渊学社', author: '管理员', time: '2023年4月12日', img: '/images/huodong-1.jpg', summary: '一个领导者的长久价值由其继承者决定。一位领袖的历史地位有赖于顺利地传承。犹如多年苦心经营的老店面临各种冲击，后劲不足且后继无人，不得己要化为一声叹息;基督信仰、属灵文化、领导力、委身意识、属灵遗产、统合综效的能力等，也在面临“失传失承”的危机，薪火相传仿佛也显得遥不可及。'},
  {id: 4, title: '“似乎是死了，却是活着”', source: '道渊学社', author: '管理员', time: '2023年4月12日', img: '/images/huodong-1.jpg', summary: '一个领导者的长久价值由其继承者决定。一位领袖的历史地位有赖于顺利地传承。犹如多年苦心经营的老店面临各种冲击，后劲不足且后继无人，不得己要化为一声叹息;基督信仰、属灵文化、领导力、委身意识、属灵遗产、统合综效的能力等，也在面临“失传失承”的危机，薪火相传仿佛也显得遥不可及。'},
]
let dataList2 = [
  {id: 1, title: '五十年巨变后的华文教会'},
  {id: 2, title: '“似乎是死了，却是活着”'},
  {id: 3, title: '第二届 属灵领袖传承之旅'},
  {id: 4, title: '第二届 属灵领袖传承之旅'},
]

const current = ref(1)
</script>

<style lang="scss" scoped>
.mainContents{
  .listTop{
    margin-top: 1em;
    padding: 1.5em 0;
    line-height: 1em;
    border-bottom: 1px solid #000;
    h2{
      margin-bottom: 0;
      font-size: 22px;
      font-weight: normal;
    }
  }
  .listItem{
    margin: 2em 0;
    padding-bottom: 2em;
    border-bottom: 1px solid #eee;
    &:last-child{
      border-bottom: none;
    }
    .imgArea{
      img{
        width: 100%;
      }
    }
    .txtArea{
      .tit{
        display: inline-block;
        margin: 0.25em 0;
        font-size: 30px;
        line-height: 1.2em;
        color: #282728;
        &:hover{
          color: #d86f4b;
        }
      }
      .infos{
        margin-bottom: 1.5em;
        font-size: 14px;
        color: #a9a9a9;
        .info{
          margin-right: 1em;
          .sp{
            color: #333;
          }
        }
      }
      .summary{
        line-height: 2em;
        font-size: 16px;
        color: #5f5f5f;
      }
    }
  }
}
.morePage{
  margin: 1em 0 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .moreBtn{
    width: 12em;
    height: 3em;
    line-height: 3em;
    text-align: center;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 7px;
    background-color: #eee;
    cursor: pointer;
    &:hover{
      background-color: #fff;
    }
  }
}
.sideContents{
  .listTop{
    margin-top: 1em;
    padding: 1.5em 0;
    line-height: 1em;
    border-bottom: 1px solid #ddd;
    h2{
      margin-bottom: 0;
      font-size: 22px;
      font-weight: normal;
    }
  }
  .lists{
    margin-top: 1.5em;
    margin-bottom: 3em;
    .listItem{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 1em 0;
      border-bottom: 1px solid #ddd;
      .number{
        width: 38px;
        height: 38px;
        line-height: 38px;
        margin-right: 0.5em;
        text-align: center;
        font-size: 22px;
        border-radius: 5px;
        background-color: #999;
        color: #fff;
      }
      .tit{
        font-size: 22px;
        color: #282728;
      }
      &:hover{
        .tit{
          color: #2f3954;
        }
        .number{
          background-color: #2f3954;
        }
      }
    }
  }
}
/* START -------------------- 响应式布局样式： 小屏幕 -------------------- */
@media screen and (max-width: 992px) {
  .mainContents{
    .listItem{
      .txtArea{
        .tit{
          font-size: 24px;
        }
        .infos{
          margin-bottom: 1em;
          font-size: 12px;
        }
        .summary{
          line-height: 1.8em;
          /* font-size: 14px; */
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .mainContents{
    .listItem{
      .txtArea{
        margin-top: 0.5em;
      }
    }
  }
}
</style>