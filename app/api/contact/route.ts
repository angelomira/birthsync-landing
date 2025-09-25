import { NextResponse } from "next/server.js"



export async function POST(req: Request) {
    try {
        const body = await req.json()
        // В demo-версии мы просто логируем данные в serverless-логи.
        console.log('Contact form submission:', JSON.stringify(body))


        // Для продакшна: подключите SendGrid / Mailgun / SMTP и отправляйте письмо.
        // Пример: отправлять на адрес из env (NEXT_PUBLIC_CONTACT_EMAIL) или сохранять в базу.


        return NextResponse.json({ ok: true, message: 'Спасибо! Мы получили ваше сообщение.' })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ ok: false }, { status: 500 })
    }
}