
import Section from '../components/Section'

export default function Method(){
  return (
    <div>
      <Section>
        <h1 className="display font-serif">The Kapunka Method</h1>
        <p className="mt-4 max-w-3xl text-deepcharcoal/80">
          Five steady steps teach hands to slow down. The method keeps pressure and pace clear for sensitive skin days.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl">Steps</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Dose</strong>: 3–5 drops in clean hands.</li>
              <li><strong>Warm</strong>: rub palms lightly to spread and warm.</li>
              <li><strong>Press</strong>: place hands on face and neck; gentle pressure.</li>
              <li><strong>Glide</strong>: light–medium touch; avoid friction on sensitised areas.</li>
              <li><strong>Pause</strong>: let the finish settle; breathe.</li>
            </ul>
            <h3 className="font-serif text-xl mt-6">Touch & Timing</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Morning and night at home.</li>
              <li>In-clinic timing after procedures is at the clinician’s discretion.</li>
            </ul>
            <h3 className="font-serif text-xl mt-6">Hygiene</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Clean hands; no double-dipping.</li>
              <li>Disinfect tools.</li>
              <li>Keep droppers from touching skin.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-soft">
            <h3 className="font-serif text-xl">Training & Certification</h3>
            <p className="mt-2 text-deepcharcoal/80">
              Clinics, spas and hotels can access training, a hygiene guide and a short assessment. Certified partners are listed on our site.
            </p>
            <a href="/contact" className="cta mt-4 inline-block">Request training</a>
          </div>
        </div>
      </Section>
    </div>
  )
}
