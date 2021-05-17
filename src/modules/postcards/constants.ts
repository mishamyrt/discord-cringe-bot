import { RequestInit } from 'node-fetch';

/**
 * otkritkiok.ru days of week names
 */
export const daysSlug = [
  'ponedelnik',
  'vtornik',
  'sreda',
  'chetverg',
  'pyatnitsa',
  'subbota',
  'voskresenie'
]

/**
 * The necessary headers. Without them the request will not succeed.
 */
export const request: RequestInit = {
  headers: {
    AppType: 'web',
    Token: 'ookgroup',
    AppName: 'ru.otkritkiok.www'
  }
}

export const apiUrl =
  'https://api.otkritkiok.ru/v0'

export const imageUrlPrefix =
  'https://cdn.otkritkiok.ru/posts/big'
