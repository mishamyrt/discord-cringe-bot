import fetch, { RequestInit } from 'node-fetch'

const options: RequestInit = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

/**
 * Posts message to Discord webhook
 * @param url - Discord webhook url
 */
export const postMessage = (url: string) =>
  async function (content: string) {
    const res = await fetch(url, {
      ...options,
      body: JSON.stringify({ content })
    })
    return res.ok
  }
