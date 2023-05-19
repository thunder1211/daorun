<template>
  <div class="SubpageBanner" style="background-image: url(/images/whatwedo-banner01.jpg);"></div>
  <div class="WRAP_MIDDLE">
    <!-- <pre>{{ data }}</pre> -->
    <!-- <pre>{{ dataList }}</pre> -->
    <a-row justify="space-between">
      <a-col :lg="17" :md="17" :xs="24" class="mainContents">
        <div class="listTop">
          <h2>资源列表</h2>
        </div>
        <a-row v-for="item in dataList" class="listItem" justify="space-between">
          <a-col :lg="11" :md="11" :xs="24">
            <NuxtLink :to="`/resource/${item.id}`" class="imgArea">
              <img :src="item.img" />
            </NuxtLink>
          </a-col>
          <a-col :lg="12" :md="12" :xs="24">
            <div class="txtArea">
              <NuxtLink :to="`/resource/${item.id}`" class="tit">{{ `${item.title}` }}</NuxtLink>
              <div class="infos">
                <span class="info">来源：<span class="sp">{{ `${item.source}` }}</span></span>
                <span class="info">作者：<span class="sp">{{ `${item.author}` }}</span></span>
                <span class="info">时间：{{ `${item.time}` }}</span>
              </div>
              <div class="summary">一个领导者的长久价值由其继承者决定。一位领袖的历史地位有赖于顺利地传承。犹如多年苦心经营的老店面临各种冲击，后劲不足且后继无人</div>
            </div>
          </a-col>
        </a-row>
        <div class="morePage">
          <span class="moreBtn">更 多</span>
        </div>
      </a-col>
      <a-col :lg="6" :md="6" :xs="24" class="sideContents">
        <div class="listTop">
          <h2>文章推荐</h2>
        </div>
        <div class="lists">
          <div v-for="(item, index) in dataList2" class="listItem">
            <div><div class="number">{{ index+1 }}</div></div>
            <NuxtLink :to="`/resource/${item.id}`" class="tit">{{ `${item.title}` }}</NuxtLink>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let dataList: any = [
  {id: 1, title: '第二届 属灵领袖传承之旅', source: '道渊学社', author: '管理员', time: '2023年4月12日', img: '/images/resource-pic01.jpg'},
  {id: 2, title: '第二届 属灵领袖传承之旅', source: '道渊学社', author: '管理员', time: '2023年4月12日', img: '/images/resource-pic02.jpg'},
  {id: 3, title: '第二届 属灵领袖传承之旅', source: '道渊学社', author: '管理员', time: '2023年4月12日', img: '/images/resource-pic03.jpg'},
  {id: 4, title: '第二届 属灵领袖传承之旅', source: '道渊学社', author: '管理员', time: '2023年4月12日', img: '/images/resource-pic04.jpg'},
]
let dataList2 = [
  {id: 1, title: '五十年巨变后的华文教会'},
  {id: 2, title: '“似乎是死了，却是活着”'},
  {id: 3, title: '第二届 属灵领袖传承之旅'},
  {id: 4, title: '第二届 属灵领袖传承之旅'},
]

// const { data } = await useHttp<object>('/api/resources?pagination[pageSize]=2&populate[author][fields][0]=name&populate[img][fields][0]=url')
// console.log(data.value.data)
// dataList = data.value.data.map(item => {
//   return {
//     id: item.id,
//     ...item.attributes,
//     author: `${item.attributes.author.data.attributes.name}`,
//     img: `//localhost:1337${item.attributes.img.data.attributes.url}`
//   }
// })


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
        margin-bottom: 0.25em;
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