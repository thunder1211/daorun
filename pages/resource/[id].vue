<template>
  <div class="WRAP_MIDDLE">
    <div class="breadCrumbs">
      <ul>
        <li><NuxtLink to="/">首页</NuxtLink><span class="arrow">  >  </span></li>
        <li><NuxtLink to="/resource">活动列表</NuxtLink><span class="arrow">  >  </span></li>
        <li><span class="current">文章</span></li>
      </ul>
    </div>
    <div class="articleWrap">
      <h1 class="title">{{ dataArticle.title }}</h1>
      <div class="infos">
        <span class="info">来源：<span class="sp">{{ dataArticle.source }}</span></span>
        <span class="info">作者：<span class="sp">{{ dataArticle.author }}</span></span>
        <span class="info">时间：{{ dataArticle.time }}</span>
      </div>
      <div class="articleContents">
        {{ dataArticle.contents }}
      </div>
    </div>
  </div>
  <div class="moreArticle">
    <div class="WRAP_MIDDLE">
      <div class="secTitle">
        <h2>更多文章</h2>
      </div>
      <a-row class="listItem" justify="space-between">
        <a-col :lg="11" :md="11" :sm="11" v-for="item in dataMore">
          <a-row justify="space-between" class="oneItem">
            <a-col :lg="11" :md="11" :xs="9" class="imgArea">
              <img :src="item.img" />
            </a-col>
            <a-col :lg="12" :md="12" :xs="14" class="txtSide">
              <h3>{{ item.title }}</h3>
              <div class="infos">
                <span class="info">来源：<span class="sp">{{ item.source }}</span></span>
                <span class="info">作者：<span class="sp">{{ item.author }}</span></span>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
console.log('config:', config)
const {app = {baseURL: '/'}} = config

const dataArticle = {
  title: '新加坡华文福音事工的再思：谁是我们的邻舍？',
  source: '道渊学社',
  author: '管理员',
  time: '2023年4月12日',
  contents: `有鉴于华人社群对基督教所存的一种普遍成见或 “非我族类” 的陌生感和疏异感，加上组屋区内有近半数居民是信奉佛教或道教，教会与组屋区之间的文化隔阂是不言而喻。不少基督徒对租屋区的生活世界始终感到格格不入、不自在和无法融入——这不单是对那些住在私人公寓或有地住宅的基督徒而言，一些在组屋区长大的信徒也是如此。因此，面对华人社群时，华文教会虽在语言上比英文教会占优势，但与华人社群之间仍彼此存在一种传统观念所造成的鸿沟。
    对教会而言，将组织性传福音行动视为教会见证基督的唯一或主要途径，这在基督徒中是一个已经根深蒂固的传统观点。继承了这个传统的教会往往有意无意地沿用过去西方宣教组织常见的一种视角来定位自己与社会的关系，那就是为基督征服世界。面对其它宗教信仰者或是无神论者，热心的信徒往往会以 “传福音叫人得救” 的角度来建立自己与他人的关系。
    教会的社区关怀事工一旦以传福音为目标，归信人数自然就成为事工的“回报率”和衡量标准，“成功率” 高的活动成为重点，有长期意义但“回报率”低的事工则往往被标签为 “预工”（意指那还不是福音见证的一部分）。
    本文取自林德平博士《视野与踪迹：再思新加坡华文教会的福音见证》，载自《信仰心·当代情：三一神学院华文部讲师文集》（新加坡：三一神学院，2013）。内容经作者稍加修改。
    `,
}

let dataMore = [
  {id: 1, title: '成了肉身的“道”与语言文字的“道”', source: '道渊学社', author: '管理员', time: '2023年4月12日', img: `${app.baseURL}/images/moreArticle-01.jpg`},
  {id: 2, title: '成了肉身的“道”与语言文字的“道”', source: '道渊学社', author: '管理员', time: '2023年4月12日', img: `${app.baseURL}/images/moreArticle-02.jpg`},
  {id: 3, title: '成了肉身的“道”与语言文字的“道”', source: '道渊学社', author: '管理员', time: '2023年4月12日', img: `${app.baseURL}/images/moreArticle-03.jpg`},
  {id: 4, title: '成了肉身的“道”与语言文字的“道”', source: '道渊学社', author: '管理员', time: '2023年4月12日', img: `${app.baseURL}/images/moreArticle-04.jpg`},
]


const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
const id = route.params.id
</script>

<style lang="scss" scoped>
.breadCrumbs{
  margin: 3em 0 1.5em;
  padding: 0.5em 0;
  border-top: 1px solid #111;
  border-bottom: 1px solid #eee;
  font-size: 16px;
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    li{
      display: inline-block;
      color: #999;
      a{
        color: #999;
      }
      .arrow{
        margin: 0 0.5em;
      }
      .current{
        color: #111;
      }
    }
  }
}
.articleWrap{
  .title{
    margin-top: 1em;
    line-height: 1.5em;
    font-size: 50px;
    font-weight: normal;
  }
  .infos{
    color: #a9a9a9;
    .info{
      margin-right: 2em;
    }
    .sp{
      color: #111;
    }
  }
  .articleContents{
    max-width: 800px;
    margin: 2em auto 3em;
    font-size: 22px;
    line-height: 2.5em;
    font-weight: 300;
    color: #222;
  }
}
.moreArticle{
  .secTitle{
    border-top: 5px solid #111;
    padding-top: 1em;
    h2{
      margin-bottom: 0;
      line-height: 3em;
      font-size: 22px;
    }
  }
  .listItem{
    margin-bottom: 2em;
    .oneItem{
      margin-bottom: 2em;
      .imgArea{
        img{
          width: 100%;
        }
      }
      .txtSide{
        h3{
          margin-top: 0.5em;
          font-size: 18px;
        }
        .infos{
          color: #999;
          .info{}
        }
      }
    }
  }
}
/* START -------------------- 响应式布局样式： 小屏幕 -------------------- */
@media screen and (max-width: 768px) {
  .breadCrumbs{
    margin-top: 2em;
  }
  .articleWrap{
    .title{
      margin-top: 0.5em;
      font-size: 30px;
    }
    .infos{
      .info{
        margin-right: 1em;
      }
    }
    .articleContents{
      margin: 2em auto 3em;
      font-size: 18px;
      line-height: 2em;
    }
  }
  .moreArticle{
    .listItem{
      .oneItem{
        .txtSide{
          h3{
            margin-top: 0;
            font-size: 16px;
          }
          .infos{
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>