'use client'
import React from 'react'


const plans = [
    { name: 'Free', price: '0', features: ['Напоминания', 'Ограниченные анкеты', 'Реклама'] },
    { name: 'Pro', price: '99 ₽/мес', features: ['Расширенные анкеты', 'AI-подбор', 'Без рекламы'] },
]


export default function Pricing() {
    return (
        <section id="pricing" className="section">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold">Тарифы</h3>
                <p className="mt-2 text-slate-600">Простой и понятный прайс — подписка или бесплатно.</p>
            </div>


            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
                {plans.map((p) => (
                    <div key={p.name} className="p-6 bg-white rounded-xl card-shadow">
                        <div className="text-sm uppercase text-slate-500">{p.name}</div>
                        <div className="mt-4 text-2xl font-extrabold">{p.price}</div>
                        <ul className="mt-4 space-y-2 text-slate-600">
                            {p.features.map((f) => (
                                <li key={f}>• {f}</li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <button className="btn-primary">Выбрать</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}