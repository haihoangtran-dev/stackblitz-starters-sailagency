import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Process />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App