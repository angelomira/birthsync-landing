import './globals.css'
import React from 'react'
import Header from '../components/Header.tsx'


export const metadata = {
    title: 'Birthsync — ваш персональный помощник по подаркам.',
    description: 'Умный бот, который поможет запоминать дни рождения, хранить предпочтения и подбирать подарки.'
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-1">{children}</main>
                    {/* Footer is rendered inside page for more control */}
                </div>
            </body>
        </html>
    )
}