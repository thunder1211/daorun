import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export function useHttp<T> (url: string, options: UseFetchOptions<T> = {}) {
  const userAuth = useCookie('token')
  const config = useRuntimeConfig()
  console.log('useRuntimeConfig:', config)
  const defaults: UseFetchOptions<T> = {
    baseURL: config.baseUrl ?? 'http://localhost:1337',
    // cache request
    key: url,

    // set user token if connected
    headers: userAuth.value
      ? { Authorization: `Bearer ${userAuth.value}` }
      : {},

    onResponse (_ctx) {
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
    },

    onResponseError (_ctx) {
      // throw new myBusinessError()
    }
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(defaults, options)

  return useFetch(url, params)
}
