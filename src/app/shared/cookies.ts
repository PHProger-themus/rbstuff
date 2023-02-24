import { HOUR } from './datetime'
import { getAfterChar } from './strings'

interface ICookieOptions {
  name: string,
  value: string,
  expireDays?: number,
  path?: string,
  session?: boolean,
  secure?: boolean
}

export const getCookie = (name: string): string | boolean => {
  return document.cookie.split(';')
    .filter(c => c.trim().startsWith(`${name}=`))
    .map(c => getAfterChar(c, '='))[0] || false
}

export const setCookie = (params: ICookieOptions) => {
  const date: Date = new Date()
  date.setTime(date.getTime() + (params.expireDays || 1) * 24 * HOUR)

  document.cookie = `${params.name}=${params.value};
    ${(params.session ? '' : 'expires=' + date.toUTCString() + ';')}
    path=${params.path || '/'};
    ${(location.protocol === 'https:' && params.secure ? 'secure' : '')}`
}

export const deleteCookie = (name: string) => {
  setCookie({ name, value: '', expireDays: -1 })
}
