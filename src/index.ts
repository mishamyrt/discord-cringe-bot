import 'module-alias/register'
import { main } from './app'

function handleError (err: Error): never {
  console.error(err)
  process.exit(1)
}

async function app () {
  const urlInput = process.env.WEBHOOK_URL
  if (!urlInput) {
    handleError(new Error(
      'Please specify a WEBHOOK_URL environment variable'
    ))
  }
  const urls = urlInput.split(',')

  for (const url of urls) {
    try {
      await main(url)
    } catch (err) {
      handleError(err)
    }
  }
}

app()
