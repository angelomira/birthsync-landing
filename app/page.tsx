import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Screenshots from '../components/Screenshots'
import Pricing from '../components/Pricing'
import Team from '../components/Team'
import CTA from '../components/CTA'
import Footer from '../components/Footer'


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