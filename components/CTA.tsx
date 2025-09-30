'use client'
import React, { useState } from 'react'
import Modal from './Modal.tsx'


export default function CTA() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState<null | string>(null)
    const [modalOpen, setModalOpen] = useState(false)
    


    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        const form = new FormData(e.target as HTMLFormElement)
        const body = {
            name: form.get('name'),
            email: form.get('email'),
            message: form.get('message'),
        }

        try {
            const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(body) })
            const json = await res.json()
            if (json.ok) setSuccess('Спасибо! Мы получили ваше сообщение.')
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
            setModalOpen(true)
        }
    }


    return (
        <section id="contact" className="section">
            <div className="max-w-3xl mx-auto px-6 text-center mb-8">
                <h3 className="text-2xl font-bold">Связаться</h3>
                <p className="mt-2 text-slate-600">Оставьте сообщение — мы свяжемся для демо и доступа к бета-версии.</p>
            </div>


            <form onSubmit={onSubmit} className="max-w-3xl mx-auto px-6 grid grid-cols-1 gap-4">
                <input required name="name" placeholder="Ваше имя" className="p-3 rounded-lg border" />
                <input required type="email" name="email" placeholder="Email" className="p-3 rounded-lg border" />
                <textarea name="message" rows={4} placeholder="Сообщение" className="p-3 rounded-lg border"></textarea>
                <div className="flex items-center gap-4">
                    <button type="submit" className="btn-primary" disabled={loading}>{loading ? 'Отправка...' : 'Отправить'}</button>
                    <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
                    {success && <div className="text-green-600">{success}</div>}
                </div>
            </form>
        </section>
    )
}