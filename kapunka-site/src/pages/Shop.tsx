
import Section from '../components/Section'
import { products, useShop, formatPrice } from '../shop'

export default function Shop(){
  const { addToCart } = useShop()
  return (
    <Section>
      <h1 className="display font-serif">Shop</h1>
      <p className="mt-3 text-deepcharcoal/80">Pure first-press argan oil in sizes for desk retail and back‑bar protocols. Amenity sizes available for hospitality partners.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {products.map(p=>(
          <div key={p.id} className="border border-black/10 rounded-2xl overflow-hidden bg-white shadow-soft flex flex-col">
            <div className="aspect-[4/3] bg-lighttaupe/40 flex items-center justify-center">
              <img src={p.image} alt={p.name} className="h-48 object-contain" />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="text-sm text-deepcharcoal/60">{p.subtitle}</div>
              <div className="font-serif text-2xl">{p.name}</div>
              <p className="text-sm mt-2 text-deepcharcoal/70">{p.details}</p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <div className="font-medium">{p.price>0?formatPrice(p.price):'On request'}</div>
                {p.price>0 ? (
                  <button onClick={()=>addToCart(p,1)} className="px-4 py-2 rounded-xl border border-black/10 hover:bg-lighttaupe/40">Add to bag</button>
                ): (
                  <a href="/contact" className="px-4 py-2 rounded-xl border border-black/10 hover:bg-lighttaupe/40">Enquire</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
