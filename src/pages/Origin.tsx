
import Section from '../components/Section'

export default function Origin(){
  return (
    <Section>
      <h1 className="display font-serif">Origin & Stewardship</h1>
      <div className="grid md:grid-cols-2 gap-10 mt-6">
        <div>
          <p className="text-deepcharcoal/80">
            First‑press argan oil with documented origin. Each unit carries batch and lot on pack. We favour glass, careful shipping and responsible partners.
          </p>
          <ul className="list-disc ml-5 mt-4 space-y-2">
            <li>Traceable origin; batch/lot visible</li>
            <li>Clear glass; matte cap; minimal labels</li>
            <li>ES/PT bilingual packs; EN for export</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-soft">
          <h3 className="font-serif text-xl">Respectful Language</h3>
          <p className="mt-2 text-deepcharcoal/80">
            We avoid medical claims. We speak about comfort, softness and support for the skin barrier.
          </p>
          <h3 className="font-serif text-xl mt-6">Service Standards</h3>
          <ul className="list-disc ml-5 mt-2 space-y-2">
            <li>Reply within 24h on business days</li>
            <li>Stable SKUs and sizing</li>
            <li>Training and QR guidance kept current</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
