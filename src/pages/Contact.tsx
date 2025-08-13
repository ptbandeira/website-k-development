
import Section from '../components/Section'

export default function Contact(){
  return (
    <Section>
      <h1 className="display font-serif">Contact</h1>
      <p className="mt-3 text-deepcharcoal/80">Trade enquiries, training requests and service questions.</p>
      <form className="mt-6 max-w-xl bg-white p-6 rounded-2xl shadow-soft" method="POST" action="/.netlify/functions/contact">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Name</label>
            <input name="name" className="mt-1 w-full rounded-xl border-black/10" required />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input type="email" name="email" className="mt-1 w-full rounded-xl border-black/10" required />
          </div>
        </div>
        <div className="mt-4">
          <label className="text-sm">Message</label>
          <textarea name="message" className="mt-1 w-full rounded-xl border-black/10" rows={5} required></textarea>
        </div>
        <button className="cta mt-4">Send</button>
        <p className="text-xs text-deepcharcoal/60 mt-2">This form uses a Netlify Function. Configure an email provider or view submissions in Netlify logs.</p>
      </form>
    </Section>
  )
}
