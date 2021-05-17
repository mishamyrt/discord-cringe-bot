import 'module-alias/register';
// import { getDayPostcards } from '@modules/postcards';
import { randomItem } from '@modules/arrays';
import { postMessage } from '@modules/discord';
import { getDayPostcards } from '@modules/postcards';

const url = process.env.WEBHOOK_URL

function handleError (err: Error): never {
  console.error(err)
  process.exit(1)
}

if (!url) {
  handleError(
    new Error('Please specify a WEBHOOK_URL environment variable')
  )
}

const day = new Date().getDay()

getDayPostcards(day)
  .then(randomItem)
  .then(postMessage(url))
  .catch(handleError)
