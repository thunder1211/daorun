// store.js
import { reactive } from 'vue'

export const store = reactive({

  menus: [
    {path: '/', name: '首页'},
    {path: '/about', name: '我们是谁'},
    {path: '/whatwedo', name: '我们做什么'},
    {path: '/events', name: '活动列表'},
    {path: '/resource', name: '资源列表'},
    {path: '/contacts', name: '联系我们'},
  ],

  isOpenmenu: false,
  changeOpenmenu(isOpen) {
    if(isOpen === true || isOpen === false) {
      this.isOpenmenu = isOpen
      setOverflow(isOpen)
    } else {
      this.isOpenmenu = !this.isOpenmenu
      setOverflow(this.isOpenmenu)
    }
    function setOverflow(is_Open) {
      if(is_Open) {
        document.querySelector('body').setAttribute('style', `overflow: hidden;`)
      } else {
        document.querySelector('body').setAttribute('style', `overflow: auto;`)
      }
    }
  }
})