import 'module-alias/register'
import { main } from './app'

function handleError (err: Error): never {
  console.error(err)
  process.exit(1)
}

const url = process.env.WEBHOOK_URL
if (!url) {
  handleError(new Error(
    'Please specify a WEBHOOK_URL environment variable'
  ))
}

main(url)
  .then(console.log)
  .catch(handleError)
