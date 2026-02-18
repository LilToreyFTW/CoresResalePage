import React from 'react'
import PricingCard from './PricingCard'

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      duration: '1 Day',
      price: '$20.99',
      featured: false
    },
    {
      duration: '1 Week',
      price: '$45.00',
      featured: false
    },
    {
      duration: '1 Month',
      price: '$69.99',
      featured: false
    },
    {
      duration: 'Lifetime',
      originalPrice: '$199.99',
      price: '$99.99',
      badge: 'Best Value',
      featured: true,
      subtitle: 'One-time payment'
    }
  ]

  return (
    <div className="pricing-section">
      <h2 className="pricing-title">Choose Your Plan</h2>
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  )
}

export default PricingSection
