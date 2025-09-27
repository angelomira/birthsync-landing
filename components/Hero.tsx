'use client'
import React, { useState } from 'react'
import Modal from './Modal.tsx'


export default function Hero() {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <section className="relative section">
            <div className="hero-confetti"></div>
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Birthsync — ваш персональной помощник по подаркам.</h1>
                    <p className="mt-6 text-slate-700 max-w-xl">Умный бот, который поможет запоминать дни рождения друзей, хранить их предпочтения и подбирать идеальные подарки с помощью AI.</p>


                    <div className="mt-8 flex items-center gap-4">
                        <button onClick={() => setModalOpen(true)} className="btn-primary">Попробовать</button>
<Modal open={modalOpen} onClose={() => setModalOpen(false)} />
                        <a href="#features" className="btn-ghost">Узнать больше</a>
                    </div>


                    <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
                        <div>
                            <div className="font-semibold">~₽15 млрд</div>
                            <div>Оценка TAM</div>
                        </div>
                        <div>
                            <div className="font-semibold">500k</div>
                            <div>Начальная аудитория (3 года)</div>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center">
                    <div className="rounded-3xl overflow-hidden bg-white mt-0 mb-12" style={{ width: 480 }}>
                        <img src="/Frame 24.svg" alt="App logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}