import fetch from 'node-fetch';

const baseUrl = 'https://api.otkritkiok.ru/v0/postcards/get-by'
const imagePrefix = 'https://cdn.otkritkiok.ru/posts/big'

const daysSlug = [
  'ponedelnik',
  'vtornik',
  'sreda',
  'chetverg',
  'pyatnitsa',
  'subbota',
  'voskresenie'
]

const mergeParams = (obj: { [key: string]: string | number }) =>
  Object
    .entries(obj)
    .map(([k, v]) => `${k}=${v}`)
    .join('&')

const getApiUrl = (fullSlug: string) =>
  `${baseUrl}?${mergeParams({
    fullSlug,
    page: 1,
    limit: 50,
  })}`

const getPostcards = (slug: string) =>
  fetch(getApiUrl(slug), {
    headers: {
      AppType: 'web',
      Token: 'ookgroup',
      AppName: 'ru.otkritkiok.www'
    }
  })
    .then(res => res.json())
    .then(d => d.data.postcards)
    .then(p => p.map((i: any) => `${imagePrefix}/${i.image}`) as string[])

export const getDayPostcards = (day: number) =>
  getPostcards(`dni-nedeli/${daysSlug[day - 1]}`)
