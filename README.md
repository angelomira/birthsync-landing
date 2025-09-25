# Birthsync — Landing (Next.js + Tailwind)

Проект — стартовый каркас лендинга для Birthsync. Включены дизайн и готовая структура страниц: Hero, Features, Screenshots, Pricing, Team, Contact.

## Запуск

1. `npm install`
2. `npm run dev`
3. Открыть `http://localhost:3000`

## Деплой

1. Запушить в GitHub.
2. Импортировать репозиторий в Vercel.
3. Установить переменные окружения (для email/связывания с сервисами).

## Настройка e-mail (продакшн)

1. Создать аккаунт SendGrid / Mailgun.
2. Добавить переменные в Vercel: `SENDGRID_API_KEY`, `CONTACT_TO_EMAIL`.
3. Заменить логику в `app/api/contact/route.ts` на отправку через SendGrid.

## Кастомизация дизайна

- Цвета находятся в `tailwind.config.js`.
- Компоненты в `components/`.
- Логотипы — в папке `public/`.

## Планы улучшений

- Интеграция реального AI (связать с LLM, например, OpenAI/Anthropic) для генерации идей подарков.
- Подписки через Stripe.
- Панель администратора для партнёрских ссылок и управления контентом.
