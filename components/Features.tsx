"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
    { title: "Напоминания", desc: "Умные уведомления о днях рождения и юбилеях." },
    { title: "Виш-листы", desc: "Сохраняйте любимые бренды, цвета и товары." },
    { title: "AI-помощник", desc: "Генерация идей подарков на основе анкеты." },
    { title: "Партнёрские предложения", desc: "Рекомендации и купоны от магазинов." },
];

export default function Features() {
    return (
        <section id="features" className="section">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold">Функции</h2>
                <p className="mt-3 text-slate-600">
                    Всё, чтобы поздравлять вовремя и выбирать подарки без стресса.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
                {features.map((f, i) => (
                    <motion.div
                        key={f.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-xl bg-white card-shadow"
                    >
                        <div className="text-xl font-semibold">{f.title}</div>
                        <div className="mt-2 text-slate-600">{f.desc}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
