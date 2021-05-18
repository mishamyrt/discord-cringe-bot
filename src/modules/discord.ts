import fetch, { RequestInit } from 'node-fetch'

const options: RequestInit = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

/**
 * Posts image to Discord webhook
 * @param hookUrl - Discord webhook url address
 * @param imageUrl - Image URL address
 */
export async function postImage (hookUrl: string, imageUrl: string) {
  const res = await fetch(hookUrl, {
    ...options,
    body: JSON.stringify({
      embeds: [{
        image: {
          url: imageUrl
        }
      }]
    })
  })
  return res
}
