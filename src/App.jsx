import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Integrations from './components/Integrations.jsx'
import Architecture from './components/Architecture.jsx'
import Platforms from './components/Platforms.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Architecture />
        <Platforms />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
