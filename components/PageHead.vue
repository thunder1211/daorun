<template>
  <a-affix :style="{ zIndex: 20, width: '100% !important', position: 'relative'}">
    <div class="headWrap" :class="{openmenu: store.isOpenmenu}">
      <div class="wrapMid">
        <div class="headIn">
          <div class="menuIcon" @click="onClickMenuicon" ref="menuIconRef">
            <close-outlined v-show="store.isOpenmenu" />
            <menu-outlined v-show="!store.isOpenmenu" />
          </div>
          <div class="LogoWrap"><NuxtLink to="/" class="logo"></NuxtLink></div>
          <div class="headNav" ref="navAreaRef">
            <NuxtLink class="navItem"
              :class="{'router-link-active': $route.path.startsWith(menu.path) && menu.path !== '/'}"
              :to="menu.path" v-for="menu in menus"
              @click="onClickNav"
            >{{ menu.name }}</NuxtLink>
            <!-- :class="{'router-link-active': isParent_MatchPath(menu.path)}" -->
            <div class="languageOption">
              <span>英语</span>
              <span>中文</span>
            </div>
          </div>
          <div class="languageOption">
            <a-dropdown :trigger="['click']">
              <a class="ant-dropdown-link" @click.prevent>
                英语
                <caret-down-outlined />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item key="1">中文</a-menu-item>
                  <a-menu-item key="2">英语</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
      </div>
    </div>
  </a-affix>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { store } from '../store.js'

const menuIconRef = ref(null)
const navAreaRef = ref(null)

const menus = store.menus

onMounted(() => {
  document.addEventListener('click', function(event) {
    const target = event.target
    if (target !== menuIconRef.value && !menuIconRef.value.contains(target) // 排除导航icon点击的时候
      &&
      (target !== navAreaRef && !navAreaRef.value.contains(target)) // 排除导航栏点击的时候
    ) {
      store.changeOpenmenu(false)
    }
  });
})

// 判断一级导航path是否匹配多级路由
function isParent_MatchPath(topPath) {
  if(path.length > topPath.length && (path.indexOf(topPath) == 0)) {
    console.log('path,topPath:', path, topPath)
    return true
  } else {
    return false
  }
}

function onClickMenuicon() {
  store.changeOpenmenu()
}
function onClickNav() {
  store.changeOpenmenu(false)
}
</script>

<style lang="scss" scoped>
$headHeight: 124px;
.headWrap {
  height: $headHeight;
  width: 100%;
  background-color: $colorPrimary-10;
  color: #fff;
  background-image: url("../assets/images/bg-head.jpg");
  /* background-repeat: no-repeat; */
  background-position: left top;
  a{
    color: #fff;
  }
  .menuIcon{
    display: none;
  }
  .headIn{
    display: flex;
    height: $headHeight;
    align-items: center;
    justify-content: space-between;
  }
  .LogoWrap{
    flex: 1;
    .logo{
      display: inline-block;
      width: 199px;
      height: 74px;
      background-image: url("../assets/images/logo-white.png");
      background-repeat: no-repeat;
      background-position: center top;
      background-size: contain;
      vertical-align: top;
    }
  }
  .headNav{
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    .languageOption{
      display: none;
    }
    .navItem{
      font-size: 20px;
      margin: 0 25px;
      &:hover{
        color: #d86f4b;
      }
    }
    .router-link-active{
      color: #d86f4b;
      position: relative;
      &::after{
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        border-radius: 10px;
        background-color: #d86f4b;
        position: absolute;
        left: 0;
        bottom: -5px;
      }
    }
  }
  .languageOption{
    font-size: 16px;
  }
}
.wrapMid {
  max-width: $maxWidth;
  margin: 0 auto;
}

/* START -------------------- 响应式布局样式： 小屏幕 -------------------- */
@media screen and (max-width: 1080px) {
  .headWrap{
    .headIn{
      position: relative;
    }
    .LogoWrap{
      flex: inherit;
    }
    .headNav{
      flex: 1;
      justify-content: space-between;
      padding: 0 50px;
      margin-right: 0;
      .navItem{
        display: block;
        margin: 0 10px;
        font-size: 16px;
      }
    }
  }
}
@media screen and (max-width: 860px) {
  .headWrap{
    height: 60px;
    a{
      color: #333;
    }
    .headIn{
      justify-content: center;
      height: 60px;
      .menuIcon{
        display: block;
        position: absolute;
        z-index: 22;
        left: 10px;
        top: 50%;
        padding: 0 10px;
        font-size: 20px;
        line-height: 50px;
        margin-top: -25px;
        cursor: pointer;
      }
    }
    .LogoWrap{
      flex: inherit;
      position: fixed;
      z-index: 21;
      left: 0;
      top: 0;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url("../assets/images/bg-head.jpg");
      /* background-repeat: no-repeat; */
      background-position: left top;
      .logo{
        height: 40px;
      }
    }
    .headNav{
      display: none;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.9);
      z-index: 20;
      height: 100%;
      padding: 80px 10px 20px;
      box-sizing: border-box;
      overflow: auto;
      backdrop-filter: blur(5px);
      .router-link-active::after{
        display: none;
      }
      .navItem{
        line-height: 2em;
        font-size: 24px;
      }
      .languageOption{
        display: flex;
        flex-direction: column;
        border-top: 1px solid #eee;
        color: #333;
        margin-top: 10px;
        padding-top: 10px;
        span{
          display: block;
          margin: 0 10px;
          font-size: 20px;
          line-height: 2em;
        }
      }
    }
    .languageOption{
      display: none;
    }
  }
  .openmenu{
    &.headWrap{
      .headNav{
        display: block;
      }
    }
  }
}
</style>
