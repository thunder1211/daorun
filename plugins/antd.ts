import antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { CaretDownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons-vue';

// <caret-down-outlined />
const iconMap = { CaretDownOutlined, MenuOutlined, CloseOutlined };

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(antd);
  for (let key in iconMap) {
    nuxtApp.vueApp.component(key, (iconMap as any)[key]);
  }
});
