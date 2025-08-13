
import Section from '../components/Section'

export default function Professionals(){
  return (
    <Section>
      <h1 className="display font-serif">For Professionals</h1>
      <p className="mt-3 max-w-3xl text-deepcharcoal/80">
        Ready for clinics, spas and hotels with clear scripts, hygiene rules and simple refills. Timing after procedures is always at the clinician’s discretion.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-2xl p-6 shadow-soft">
          <h3 className="font-serif text-xl">Clinics & Medi‑spas</h3>
          <ul className="list-disc ml-5 mt-2 space-y-2 text-sm">
            <li>Comforting oil that supports the skin barrier</li>
            <li>Timing chart and quick‑guide</li>
            <li>30 ml desk retail “Comfort Kit”</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-soft">
          <h3 className="font-serif text-xl">Spas</h3>
          <ul className="list-disc ml-5 mt-2 space-y-2 text-sm">
            <li>100 ml back‑bar (~3 ml/treatment)</li>
            <li>Protocol card and training</li>
            <li>Bundle with 30 ml retail</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-soft">
          <h3 className="font-serif text-xl">Hotels</h3>
          <ul className="list-disc ml-5 mt-2 space-y-2 text-sm">
            <li>Amenity 2–5 ml with QR to method</li>
            <li>Boutique tester and story card</li>
            <li>Co‑branding rules available</li>
          </ul>
        </div>
      </div>
      <a href="/contact" className="cta mt-8 inline-block">Partner with Kapunka</a>
    </Section>
  )
}
