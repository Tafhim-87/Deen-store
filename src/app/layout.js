'use client'
import { useEffect } from 'react'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Providers } from './Providers'
import CartFloatingBtn from '@/components/CartFloatingBtn'

export default function RootLayout({ children }) {
  useEffect(() => {
    const initSmoothScroll = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      return () => {
        lenis.destroy()
      }
    }

    initSmoothScroll()
  }, [])

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartFloatingBtn />
        </Providers>
      </body>
    </html>
  )
}