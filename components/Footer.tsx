'use client'
import React from 'react'


export default function Footer() {
    return (
        <footer className="border-t mt-12">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <div className="text-sm text-slate-600">© {new Date().getFullYear()} Birthsync — Все права защищены</div>
                </div>
                <div className="text-sm text-slate-600">Контакты: +7 (985) 895-03-05 · @ANGELOMIRA</div>
            </div>
        </footer>
    )
}