'use client'
import React from 'react'


export default function Screenshots() {
    return (
        <section className="section">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-2xl font-bold text-center mb-6">Как это выглядит</h3>
                <div className="flex items-center justify-center gap-6">
                    <div className="w-56 p-4 rounded-2xl bg-white card-shadow">
                        <div className="h-80 bg-gradient-to-b from-bs-pink to-white rounded-lg"></div>
                    </div>
                    <div className="w-56 p-4 rounded-2xl bg-white card-shadow">
                        <div className="h-80 bg-gradient-to-b from-bs-teal to-white rounded-lg"></div>
                    </div>
                    <div className="w-56 p-4 rounded-2xl bg-white card-shadow">
                        <div className="h-80 bg-gradient-to-b from-bs-purple to-white rounded-lg"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}