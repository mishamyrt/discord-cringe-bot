#!/bin/sh

curl "https://api.otkritkiok.ru/v0/postcards/page/home?page=1&limit=10" \
  -H "AppType: web" \
  -H "Token: ookgroup" \
  -H "AppName: ru.otkritkiok.www"
