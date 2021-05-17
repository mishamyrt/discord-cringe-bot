import { getForDay } from './modules/postcards';
import { getRandomItem } from './modules/arrays';
import { postMessage } from './modules/discord';

const url = process.env.WEBHOOK_URL

if (!url) {
    process.exit(1)
}

getForDay(new Date().getDay())
    .then(getRandomItem)
    .then(postMessage(url))