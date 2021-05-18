import { randomItem } from '@modules/arrays'
import { postImage } from '@modules/discord'
import { getDayPostcards } from '@modules/postcards'
import { getFileSize } from '@modules/requests'

/**
 * Main app function
 * @param url - Discord webhook URL
 */
export async function main (url: string) {
  const day = new Date().getDay()

  const postcards = await getDayPostcards(day)

  while (true) {
    const postcard = randomItem(postcards)
    const fileSize = await getFileSize(postcard)
    // NOTE: Check if file is not a video and lesser than 400 kb. Anotherwise Discord will not embed it
    if (fileSize < 400 && !postcard.includes('.mp4')) {
      console.log(`URL: ${postcard}`)
      console.log(`File size: ${fileSize}`)
      console.log('Posting...')
      await postImage(url, postcard)
      break
    }
  }
}
