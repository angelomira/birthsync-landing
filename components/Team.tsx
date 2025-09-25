'use client'
import React from 'react'


const members = [
    { name: 'Полина Розова', role: 'UX / UI' },
    { name: 'Роман Акулов', role: 'Backend' },
    { name: 'Виолетта Моисеенкова', role: 'Тестирование' },
    { name: 'Мирослав Явушкин', role: 'Frontend' },
]


export default function Team() {
    return (
        <section id="team" className="section">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold">Команда</h3>
                <p className="mt-2 text-slate-600">Небольшая, но эффективная команда, готовая к быстрому запуску.</p>
            </div>


            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
                {members.map((m) => (
                    <div key={m.name} className="p-4 text-center bg-white rounded-xl card-shadow">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-bs-purple text-white mx-auto font-bold">{m.name.split(' ')[0][0]}{m.name.split(' ')[1] ? m.name.split(' ')[1][0] : ''}</div>
                        <div className="mt-3 font-semibold">{m.name}</div>
                        <div className="text-sm text-slate-500">{m.role}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}