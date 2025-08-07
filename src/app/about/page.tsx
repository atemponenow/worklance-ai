import type { Metadata } from 'next'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'About Us - Worklance.AI',
  description: 'Learn about Worklance.AI - our mission, values, and expert team driving AI innovation for businesses.',
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <About />
    </div>
  )
}
