
import Section from '../components/Section'
import ProductCard from '../components/ProductCard'
import { products } from '../shop'

export default function Home(){
  return (
    <div>
      <Section className="pt-8 md:pt-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow">Quiet strength. Pure care.</div>
            <h1 className="display font-serif">Kapunka — quiet care for sensitive skin</h1>
            <p className="mt-5 text-lg text-deepcharcoal/80">
              Pure first-press argan oil, taught through a simple method: <span className="font-medium">Dose → Warm → Press → Glide → Pause</span>.
              It helps skin feel calm and comfortable with a soft finish.
            </p>
            <div className="mt-8 flex gap-3">
              <a className="cta" href="/shop">Shop</a>
              <a className="px-5 py-3 rounded-2xl border border-black/10 hover:bg-lighttaupe/40" href="/method">Learn the method</a>
            </div>
            <p className="text-sm text-deepcharcoal/60 mt-4">*Use “suitable for sensitive skin” where supported by the safety file.</p>
          </div>
          <div className="bg-lighttaupe/40 rounded-3xl p-10">
            <img src="/images/hero-hands.jpg" alt="Hands warming oil" className="rounded-2xl shadow-soft"/>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {products.filter(p=>p.id!=='kapunka-amenity').map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      <Section className="bg-white rounded-3xl">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl">The Kapunka Method</h2>
            <p className="mt-3 text-deepcharcoal/80">
              A clear, repeatable way to apply oil with respect for sensitive moments. Short steps guide touch and timing.
            </p>
            <ol className="list-decimal ml-6 mt-4 space-y-2">
              <li>Dose: 3–5 drops in clean hands</li>
              <li>Warm: spread lightly between palms</li>
              <li>Press: hands on face and neck, gentle pressure</li>
              <li>Glide: light–medium touch; avoid friction on sensitised areas</li>
              <li>Pause: let the finish settle; breathe</li>
            </ol>
            <a href="/method" className="link mt-4 inline-block">See details and training →</a>
          </div>
          <img src="/images/method.jpg" alt="Press, glide, pause" className="rounded-2xl shadow-soft"/>
        </div>
      </Section>
    </div>
  )
}
