
import Section from '../components/Section'

const faqs = [
  {q: 'Is Kapunka suitable for sensitive skin?', a: 'Yes, where supported by our safety file we say “suitable for sensitive skin.” Always patch‑test and follow the method.'},
  {q: 'Will oil feel heavy?', a: 'Pure first‑press argan has a soft, comfortable finish when used in the recommended dose (3–5 drops).'},
  {q: 'When should I use it after a treatment?', a: 'Timing after in‑clinic procedures is at the discretion of your clinician.'},
  {q: 'What’s the hygiene guidance?', a: 'Clean hands; no double‑dipping; disinfect tools; keep droppers from touching skin.'},
]

export default function FAQs(){
  return (
    <Section>
      <h1 className="display font-serif">FAQs</h1>
      <div className="mt-6 divide-y divide-black/10 bg-white rounded-2xl shadow-soft">
        {faqs.map((f,i)=>(
          <details key={i} className="p-6">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-deepcharcoal/80">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
