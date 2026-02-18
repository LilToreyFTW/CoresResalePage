import React from 'react'
import Link from 'next/link'
import ProductCard from './ProductCard'
import { PRODUCTS } from '@/data/products'

const ProductsGrid: React.FC = () => {
  const basePrices: Record<string, number> = {
    'Apex Legends': 8.99,
    'Call of Duty': 8.99,
    'HWID Spoofer': 6.99,
    'Arc Raiders': 8.99,
    'Siege X': 9.99,
    Tarkov: 8.99,
    Rust: 8.99,
    Fortnite: 8.99
  }

  const handleBuy = (productName: string, duration: string, price: number) => {
    // Add your purchase logic here
    alert(`Redirecting to purchase: ${productName} - ${duration} ($${price.toFixed(2)})`)
  }

  return (
    <div className="products-section">
      <h1 className="products-title">ARC RAIDERS CHEATS</h1>
      <div className="products-grid">
        {PRODUCTS.map((product, index) => (
          <div key={product.slug}>
            <ProductCard
              name={product.name}
              basePrice={basePrices[product.name] ?? 8.99}
              imageUrl={product.imageUrl}
              undetected={product.undetected}
              onBuy={handleBuy}
            />
            <div style={{ marginTop: 10 }}>
              <Link href={`/products/${product.slug}`} className="buy-button" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsGrid
