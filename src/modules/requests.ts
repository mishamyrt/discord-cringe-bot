import fetch from 'node-fetch'

type ParamMap = { [key: string]: string | number }

/**
 * Transforms params object to URL params
 * @param obj - URL parameters object
 */
export const appendParams = (url: string, obj: ParamMap) =>
  `${url}?` + Object
    .entries(obj)
    .map(([k, v]) => `${k}=${v}`)
    .join('&')

/**
 * Returns remote file size in kilobytes
 * @param url - Remote file path
 * @returns
 */
export const getFileSize = (url: string) =>
  fetch(url, { method: 'HEAD' })
    .then(resp => resp.headers.get('content-length'))
    .then(v => v ? Math.floor(parseInt(v, 10) / 8 / 1024) : 0)
