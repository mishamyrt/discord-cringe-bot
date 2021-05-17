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
