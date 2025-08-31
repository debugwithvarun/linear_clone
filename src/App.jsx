import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AnimatedHero from './components/AnimatedHero'
import CustomerShowcase from './components/CustomerShowcase'
import Footer from './components/Footer'
import ModernTeams from './components/ModernTeams'

const App = () => {
  return (
    <div className=' bg-[var(--bg-color)] min-h-screen border-box w-[100%] overflow-hidden'>
      <Navbar />
      <Hero />
      <AnimatedHero />
      <CustomerShowcase />
      <ModernTeams />
      <Footer />
    </div>
  )
}

export default App