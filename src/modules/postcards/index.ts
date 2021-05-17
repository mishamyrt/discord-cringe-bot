import { getPostcards } from './api'
import { daysSlug, imageUrlPrefix } from './constants'

/**
 * Get postcards for given day of week
 * @param day - Day of week number
 */
export async function getDayPostcards (day: number) {
  const slug = `dni-nedeli/${daysSlug[day - 1]}`
  // TODO: Download all pages
  const postcards = await getPostcards(slug, 1, 50)
  return postcards.map(i => `${imageUrlPrefix}/${i.image}`)
}
