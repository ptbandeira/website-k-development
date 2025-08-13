
import { Link } from 'react-router-dom'
import { formatPrice, useShop } from '../shop'

export default function ProductCard({product}:{product:any}){
  const { addToCart } = useShop()
  return (
    <div className="border border-black/10 rounded-2xl overflow-hidden bg-white shadow-soft flex flex-col">
      <div className="aspect-[4/3] bg-lighttaupe/30 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="h-40 object-contain" />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-sm text-deepcharcoal/60">{product.subtitle}</div>
        <div className="font-serif text-2xl">{product.name}</div>
        <p className="text-sm mt-2 text-deepcharcoal/70">{product.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="font-medium">{formatPrice(product.price)}</div>
          <div className="flex gap-2">
            <button onClick={()=>addToCart(product,1)} className="px-3 py-2 rounded-xl border border-black/10 hover:bg-lighttaupe/40">Add</button>
            <Link to="/shop" className="px-3 py-2 rounded-xl border border-black/10 hover:bg-lighttaupe/40">Details</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
