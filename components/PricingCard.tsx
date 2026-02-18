import React from 'react'

interface PricingCardProps {
  duration: string
  price: string
  originalPrice?: string
  badge?: string
  featured?: boolean
  subtitle?: string
}

const PricingCard: React.FC<PricingCardProps> = ({
  duration,
  price,
  originalPrice,
  badge,
  featured = false,
  subtitle
}) => {
  return (
    <div className={`pricing-card ${featured ? 'featured' : ''}`}>
      {badge && <div className="badge">{badge}</div>}
      <div className="pricing-duration">{duration}</div>
      <div className="pricing-price">
        {originalPrice && (
          <span className="original-price">{originalPrice}</span>
        )}
        <span className={featured ? 'sale-price' : ''}>{price}</span>
      </div>
      {subtitle && (
        <div style={{ marginTop: '15px', fontSize: '0.9rem' }}>
          {subtitle}
        </div>
      )}
    </div>
  )
}

export default PricingCard
