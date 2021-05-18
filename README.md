<p align="center">
  <img height="217px" width="389px" src="./assets/logo@2x.png" alt="Logo" />
  <br>
  <a href="https://github.com/mishamyrt/discord-cringe-bot/actions/workflows/api.yaml">
    <img src="https://github.com/mishamyrt/discord-cringe-bot/actions/workflows/api.yaml/badge.svg" alt="API availability" />
  </a>
  <a href="https://github.com/mishamyrt/discord-cringe-bot/actions/workflows/test.yaml">
    <img src="https://github.com/mishamyrt/discord-cringe-bot/actions/workflows/test.yaml/badge.svg" alt="Quality assurance" />
  </a>
</p>

Бот, который отправляет открытки с сайта [открыткиок](https://otkritkiok.ru) в канал Discord через веб–хук. Для отправки используется запуск по расписанию GitHub Actions.

## Пример использования

<p align="center">
  <img width="389px" height="217px" src="./assets/example@2x.jpg" alt="Example" />
</p>

## Настройка

### 1. Создайте веб–хук

Процесс описан в [инструкции Discord](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks). Нужно дойти до шага с кнопкой «Copy Webhook URL». Скопируйте (а лучше сохраните) ссылку, которая копируется при нажатии на эту кнопку.

На аватарку можете поставить [котика](./assets/avatar.jpg) (как в примере).

### 2. Форкните этот репозиторий

Нажмите «Fork» в верхней части [странице проекта на GitHub](https://github.com/mishamyrt/cross-code-review).

### 3. Пропишите URL веб–хука

Откройте настройки secrets вашего репозитория (форка) и добавьте переменную с названием `DISCORD_WEBHOOK` и ключом из полученной ранее ссылки на веб–хук.

### 3. Настройте расписание

Внесите изменение crontab в файл `.github/workflows/post.yaml`.
