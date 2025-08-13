
import { ReactNode } from 'react'
export default function Section({children, className = ''}:{children: ReactNode, className?: string}){
  return <section className={`px-4 py-16 md:py-24 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
}
