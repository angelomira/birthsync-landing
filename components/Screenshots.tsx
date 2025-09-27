'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'


export default function Screenshots() {
    return (
        <section className="section">
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-2xl font-bold text-center mb-6">Как это выглядит</h3>


                {/* Desktop grid */}
                <div className="hidden md:flex items-center justify-center gap-6">
                    <div className="w-56 p-4 rounded-2xl bg-white card-shadow bg-gradient-to-b from-brandPurple via-brandBlue to-brandGreen">
                        <img className="rounded-2xl" src="/image1.png" alt="App logo" />
                    </div>
                    <div className="w-56 p-4 rounded-2xl bg-white card-shadow bg-gradient-to-b from-brandGreen via-brandPurple to-brandBlue">
                        <img className="rounded-2xl" src="/image2.png" alt="App logo" />
                    </div>
                    <div className="w-56 p-4 rounded-2xl bg-white card-shadow bg-gradient-to-b from-brandBlue via-brandGreen to-brandPurple">
                        <img className="rounded-2xl" src="/image3.png" alt="App logo" />
                    </div>
                </div>


                {/* Mobile swiper */}
                <div className="md:hidden">
                    <Swiper spaceBetween={16} slidesPerView={1}>
                        <SwiperSlide>
                            <div className="w-full h-80 p-4 rounded-2xl bg-white card-shadow bg-gradient-to-b from-brandPurple via-brandBlue to-brandGreen">
                                <img src="/image1.png" alt="App logo" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-80 p-4 rounded-2xl bg-white card-shadow bg-gradient-to-b from-brandGreen via-brandPurple to-brandBlue">
                                <img src="/image2.png" alt="App logo" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-80 p-4 rounded-2xl bg-white card-shadow bg-gradient-to-b from-brandBlue via-brandGreen to-brandPurple">
                                <img src="/image3.png" alt="App logo" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}