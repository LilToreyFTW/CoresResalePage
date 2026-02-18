'use client'

import React, { useState } from 'react'

interface ProductCardProps {
  name: string
  basePrice: number
  imageUrl?: string
  undetected?: boolean
  onBuy: (name: string, duration: string, price: number) => void
}

type Duration = '1 Day' | '1 Week' | '1 Month' | 'Lifetime'

type PricingTier = {
  price: number
  multiplier: number
  originalPrice?: number
}

const pricingTiers: Record<Duration, PricingTier> = {
  '1 Day': { price: 20.99, multiplier: 1 },
  '1 Week': { price: 45.0, multiplier: 1 },
  '1 Month': { price: 69.99, multiplier: 1 },
  Lifetime: { price: 99.99, originalPrice: 199.99, multiplier: 1 }
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  basePrice,
  imageUrl,
  undetected = false,
  onBuy
}) => {
  const [selectedDuration, setSelectedDuration] = useState<Duration>('1 Day')

  const calculatePrice = (duration: Duration): number => pricingTiers[duration].price

  const handleDurationChange = (duration: Duration) => setSelectedDuration(duration)

  const currentPrice = calculatePrice(selectedDuration)
  const tier = pricingTiers[selectedDuration]

  return (
    <div className="product-card">
      {imageUrl && (
        <img className="product-image" src={imageUrl} alt={name} loading="lazy" />
      )}
      <div className="product-name">{name}</div>
      {undetected && <span className="product-badge">Undetected</span>}
      <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '10px' }}>
        STARTING AT
      </div>
      <label className="duration-label">Select Duration:</label>
      <select 
        className="duration-select" 
        value={selectedDuration}
        onChange={(e) => handleDurationChange(e.target.value as Duration)}
      >
        <option value="1 Day">1 Day</option>
        <option value="1 Week">1 Week</option>
        <option value="1 Month">1 Month</option>
        <option value="Lifetime">Lifetime</option>
      </select>
      <div className="product-price">
        {selectedDuration === 'Lifetime' && typeof tier.originalPrice === 'number' ? (
          <>
            <span className="original-price">${tier.originalPrice}</span>
            <span className="sale-price">${currentPrice.toFixed(2)}</span>
          </>
        ) : (
          `$${currentPrice.toFixed(2)}`
        )}
      </div>
      <button 
        className="buy-button" 
        onClick={() => onBuy(name, selectedDuration, currentPrice)}
      >
        Buy Now
      </button>
    </div>
  )
}

export default ProductCard
