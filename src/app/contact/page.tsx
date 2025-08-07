import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact Us - Worklance.AI',
  description: 'Get in touch with Worklance.AI to discuss your AI project and transformation needs.',
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  )
}
