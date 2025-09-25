'use client'
import React from 'react'


export default function Hero() {
    return (
        <section className="relative section">
            <div className="hero-confetti"></div>
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Birthsync — не забудьте ни одного дня</h1>
                    <p className="mt-6 text-slate-700 max-w-xl">Умный бот, который поможет запоминать дни рождения друзей, хранить их предпочтения и подбирать идеальные подарки с помощью AI.</p>


                    <div className="mt-8 flex items-center gap-4">
                        <a href="#contact" className="btn-primary">Попробовать бесплатно</a>
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
                    <div className="card-shadow rounded-3xl overflow-hidden bg-white p-6" style={{ width: 360 }}>
                        <img src="/hero-illustration.svg" alt="App mock" />
                    </div>
                </div>
            </div>
        </section>
    )
}