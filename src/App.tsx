
import { Outlet, NavLink } from 'react-router-dom'
import { useState } from 'react'
import CartDrawer from './components/CartDrawer'

export default function App(){
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <img src="/images/logo.svg" alt="Kapunka" className="h-8" />
            <span className="font-serif text-xl">Kapunka</span>
          </NavLink>
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/shop" className="hover:opacity-70">Shop</NavLink>
            <NavLink to="/method" className="hover:opacity-70">Method</NavLink>
            <NavLink to="/professionals" className="hover:opacity-70">Professionals</NavLink>
            <NavLink to="/origin" className="hover:opacity-70">Origin</NavLink>
            <NavLink to="/faqs" className="hover:opacity-70">FAQs</NavLink>
            <NavLink to="/contact" className="hover:opacity-70">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={() => setOpen(true)} aria-label="Open cart" className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 3h1.386a1.125 1.125 0 011.09.862l.383 1.914M7.5 14.25h9.75m-12.75-7.5h15.618a.375.375 0 01.366.454l-1.5 7.5a1.125 1.125 0 01-1.1.921H7.125a1.125 1.125 0 01-1.1-.879L4.5 4.875M7.5 21a.75.75 0 100-1.5.75.75 0 000 1.5zm10.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z"/></svg>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-serif text-xl">Kapunka</div>
            <p className="text-sm mt-3 text-deepcharcoal/70">Quiet care for sensitive skin. Pure first-press argan oil, taught through a simple method.</p>
          </div>
          <div>
            <div className="eyebrow">Explore</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/shop" className="hover:opacity-70">Shop</a></li>
              <li><a href="/method" className="hover:opacity-70">Method</a></li>
              <li><a href="/origin" className="hover:opacity-70">Origin & Stewardship</a></li>
              <li><a href="/professionals" className="hover:opacity-70">For Professionals</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Service</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/faqs" className="hover:opacity-70">FAQs</a></li>
              <li><a href="/contact" className="hover:opacity-70">Contact</a></li>
              <li><a href="#" className="hover:opacity-70">Privacy</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Newsletter</div>
            <form className="mt-3">
              <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="w-full rounded-xl border-black/10 focus:ring-deepcharcoal"/>
                <button className="cta">Subscribe</button>
              </div>
              <p className="text-xs mt-2 text-deepcharcoal/60">By subscribing, you agree to our updates.</p>
            </form>
          </div>
        </div>
      </footer>
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
