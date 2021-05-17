import 'module-alias/register'
import { randomItem } from '@modules/arrays'
import { postMessage } from '@modules/discord'
import { getDayPostcards } from '@modules/postcards'

const url = process.env.WEBHOOK_URL

const envError = 'Please specify a WEBHOOK_URL environment variable'

function handleError (err: Error): never {
  console.error(err)
  process.exit(1)
}

if (!url) {
  handleError(new Error(envError))
}

const day = new Date().getDay()

getDayPostcards(day)
  .then(randomItem)
  .then(postMessage(url))
  .catch(handleError)
