
  import { useShop, formatPrice } from '../shop'

  export default function CartDrawer({open, onClose}:{open:boolean, onClose:()=>void}){
    const { cart, updateQty, removeFromCart, total } = useShop()

    async function checkout(){
      try{
        const res = await fetch('/.netlify/functions/create-checkout', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ cart })
        })
        if(res.status === 501){
          const msg = await res.text()
          alert(msg + "\n\nTip: set STRIPE_SECRET_KEY in Netlify env or replace checkout with a Payment Link.")
          return
        }
        const data = await res.json()
        if(data.url){ window.location.href = data.url }
        else { alert('Checkout error.') }
      }catch(e){
        alert('Checkout unavailable.')
      }
    }

    return (
      <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose}></div>
        <aside className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-2xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex items-center justify-between border-b">
            <div className="font-serif text-2xl">Your bag</div>
            <button onClick={onClose} aria-label="Close cart">&times;</button>
          </div>
          <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-200px)]">
            {cart.length === 0 && <p className="text-sm text-deepcharcoal/70">Your bag is empty.</p>}
            {cart.map((item:any) => (
              <div key={item.id} className="flex gap-4 border-b pb-4">
                <img src={item.image} alt={item.name} className="h-16 w-16 object-contain bg-lighttaupe/30 rounded" />
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-deepcharcoal/60">{formatPrice(item.price)}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={()=>updateQty(item.id, Math.max(1, item.qty-1))} className="px-2 border rounded">-</button>
                    <span>{item.qty}</span>
                    <button onClick={()=>updateQty(item.id, item.qty+1)} className="px-2 border rounded">+</button>
                    <button onClick={()=>removeFromCart(item.id)} className="ml-auto text-sm text-red-600">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 border-t">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-deepcharcoal/70">Subtotal</div>
              <div className="font-medium">{formatPrice(total)}</div>
            </div>
            <button onClick={checkout} className="cta w-full">Checkout</button>
            <p className="text-xs text-deepcharcoal/60 mt-2">Checkout uses a Netlify Function and Stripe Checkout if configured.</p>
          </div>
        </aside>
      </div>
    )
  }
