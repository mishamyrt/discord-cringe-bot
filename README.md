<p align="center">
  <img height="159px" width="317px" src="./assets/logo@2x.png" alt="Logo" />
</p>

Бот, который отправляет открытки с сайта [открыткиок](https://otkritkiok.ru) в канал Discord через веб–хук. Для отправки используется запуск по расписанию GitHub Actions.

## Пример использования

<p align="center">
  <img width="477px" height="331px" src="./assets/example@2x.jpg" alt="Example" />
</p>

## Настройка

### 1. Создайте веб–хук

Процесс описан в [инструкции Discord](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks). Нужно дойти до шага с кнопкой «Copy Webhook URL». Скопируйте (а лучше сохраните) ссылку, которая копируется при нажатии на эту кнопку.

### 2. Форкните этот репозиторий

Нажмите «Fork» в верхней части [странице проекта на GitHub](https://github.com/mishamyrt/cross-code-review).

### 3. Пропишите URL веб–хука

Откройте настройки secrets вашего репозитория (форка) и добавьте переменную с названием `DISCORD_WEBHOOK` и ключом из полученной ранее ссылки на веб–хук.

### 3. Настройте расписание

Внесите изменение crontab в файл `.github/workflows/post.yaml`.
