import type { Metadata } from 'next'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: 'AI Services - Worklance.AI',
  description: 'Discover our comprehensive AI services including machine learning, automation, data intelligence, and more.',
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <Services />
    </div>
  )
}
