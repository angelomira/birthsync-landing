'use client'
import React from 'react'
import QRCode from 'react-qr-code'


export default function Modal({ open, onClose }: { open: boolean, onClose: () => void }) {
    if (!open) return null


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-2xl p-6 w-80 card-shadow flex flex-col items-center">
                <h2 className="text-xl font-bold mb-4">Сканируйте QR</h2>
                <div className="flex items-center justify-center">
                    <QRCode value="https://t.me/birthsync_bot" size={180} />
                </div>
                <button
                    onClick={onClose}
                    className="btn-primary mt-6"
                >Закрыть</button>
            </div>
        </div>
    )
}