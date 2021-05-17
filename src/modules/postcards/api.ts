import { appendParams } from '@modules/requests'
import fetch from 'node-fetch'
import { apiUrl, request } from './constants'
import { Postcard } from './interfaces'

/**
 * Get postcards for given slug
 * @param fullSlug - URL slug
 * @param page - Pagination position
 * @param limit - Elements per page
 */
export async function getPostcards (fullSlug: string, page: number, limit: number) {
  const urlParams = { fullSlug, page, limit }
  const url = appendParams(`${apiUrl}/postcards/get-by`, urlParams)

  const res = await fetch(url, request)
  const cards = await res.json()
  return cards.data.postcards as Postcard[]
}
