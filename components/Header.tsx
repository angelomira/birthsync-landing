'use client'
//@ts-expect-error
import Link from 'next/link'
import React from 'react'


export default function Header() {
    return (

        <header className="bg-white/60 backdrop-blur sticky top-0 z-40 border-b">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <img src="/logo.svg" alt="Birthsync" className="h-10 w-auto" />
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
                    <a href="#features">Функции</a>
                    <a href="#pricing">Тарифы</a>
                    <a href="#team">Команда</a>
                    <a href="#contact">Контакты</a>
                    <Link href="/" className="btn-primary">Попробовать</Link>
                </nav>
                <div className="md:hidden">
                    <Link href="/" className="btn-primary">Попробовать</Link>
                </div>
            </div>
        </header>
    )
}