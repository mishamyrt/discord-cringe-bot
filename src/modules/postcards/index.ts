import { appendParams } from '@modules/requests';
import fetch from 'node-fetch';
import { apiUrl, daysSlug, imageUrlPrefix, request } from './constants';
import { Postcard } from './interfaces';


/**
 * Get postcards for given slug
 * @param fullSlug - URL slug
 * @param page - Pagination position
 * @param limit - Elements per page
 */
export async function getPostcards(fullSlug: string, page: number, limit: number) {
  const urlParams = { fullSlug, page, limit }
  const url = appendParams(`${apiUrl}/postcards/get-by`, urlParams)

  const res = await fetch(url, request)
  const cards = await res.json()
  return cards.data.postcards as Postcard[]
}

/**
 * Get postcards for given day of week
 * @param day - Day of week number
 */
export async function getDayPostcards(day: number) {
  const slug = `dni-nedeli/${daysSlug[day - 1]}`
  // TODO: Download all pages
  const postcards = await getPostcards(slug, 1, 50)
  return postcards.map(i => `${imageUrlPrefix}/${i.image}`)
}
