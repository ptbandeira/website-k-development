
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import products from './data/products'

type CartItem = { id:string; name:string; price:number; image:string; qty:number }
type Ctx = {
  cart: CartItem[]
  addToCart: (product:any, qty:number)=>void
  updateQty: (id:string, qty:number)=>void
  removeFromCart: (id:string)=>void
  total: number
}
const ShopContext = createContext<Ctx | null>(null)

export function ShopProvider({children}:{children:React.ReactNode}){
  const [cart, setCart] = useState<CartItem[]>(()=>{
    try { return JSON.parse(localStorage.getItem('kapunka_cart')||'[]') } catch { return [] }
  })

  useEffect(()=>{ localStorage.setItem('kapunka_cart', JSON.stringify(cart)) }, [cart])

  const addToCart = (product:any, qty:number)=>{
    setCart(prev=>{
      const i = prev.findIndex(p=>p.id===product.id)
      if(i>=0){
        const copy = [...prev]; copy[i].qty += qty; return copy
      }
      return [...prev, {id:product.id, name:product.name, price:product.price, image:product.image, qty}]
    })
  }
  const updateQty = (id:string, qty:number)=> setCart(prev=>prev.map(p=>p.id===id?{...p, qty}:p))
  const removeFromCart = (id:string)=> setCart(prev=>prev.filter(p=>p.id!==id))
  const total = useMemo(()=> cart.reduce((s,i)=>s + i.price * i.qty, 0), [cart])

  const value = { cart, addToCart, updateQty, removeFromCart, total }
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export function useShop(){
  const ctx = useContext(ShopContext)
  if(!ctx) throw new Error('useShop must be used inside ShopProvider')
  return ctx
}

export function formatPrice(n:number){
  return new Intl.NumberFormat(undefined, {style:'currency', currency:'EUR'}).format(n)
}

export { products }
