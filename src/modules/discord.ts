import fetch from 'node-fetch';

export const postMessage = (webhookUrl: string) =>
    (content: string) =>
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content })
        })