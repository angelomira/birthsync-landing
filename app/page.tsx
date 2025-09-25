import React from 'react'
import Hero from '../components/Hero.tsx'
import Features from '../components/Features.tsx'
import Screenshots from '../components/Screenshots.tsx'
import Pricing from '../components/Pricing.tsx'
import Team from '../components/Team.tsx'
import CTA from '../components/CTA.tsx'
import Footer from '../components/Footer.tsx'


export default function Home() {
    return (
        <>
            <Hero />
            <div className="max-w-6xl mx-auto px-6">
                <Features />
                <Screenshots />
                <Pricing />
                <Team />
                <CTA />
            </div>
            <Footer />
        </>
    )
}