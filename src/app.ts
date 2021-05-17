import { randomItem } from '@modules/arrays'
import { postMessage } from '@modules/discord'
import { getDayPostcards } from '@modules/postcards'

/**
 * Main app function
 * @param url - Discord webhook URL
 */
export function main (url: string) {
  const day = new Date().getDay()
  return getDayPostcards(day)
    .then(randomItem)
    .then(postMessage(url))
}
