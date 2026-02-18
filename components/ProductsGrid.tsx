import React from 'react'
import ProductCard from './ProductCard'

const ProductsGrid: React.FC = () => {
  const products = [
    { name: 'Apex Legends', basePrice: 8.99, undetected: true, imageUrl: 'https://www.nintendo.com/eu/media/images/assets/nintendo_switch_games/apexlegends/16x9_ApexLegends_image1600w.jpg' },
    { name: 'Call of Duty', basePrice: 8.99, undetected: true, imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/06107605348820087bb51ca89ed620c22fe559aa/header.jpg?t=1770663933' },
    { name: 'HWID Spoofer', basePrice: 6.99, undetected: true, imageUrl: 'https://chamscheats.com/uploads/monthly_2025_09/Spoofer_HWID.webp.55d666d4bdf7032ce2037f7711a655d5.webp' },
    { name: 'Arc Raiders', basePrice: 8.99, undetected: true, imageUrl: 'https://gameinformer.com/sites/default/files/styles/content_header_l/public/2025/11/11/1147728f/arc%2520raiders%2520review%2520game%2520informer.jpg.webp' },
    { name: 'Siege X', basePrice: 9.99, undetected: true, imageUrl: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4IZecJyhvcIUxxu0Rd1vjX/99fe1a724d46a4d9ca70c76c7a78496f/r6s-homepage-meta__1_.jpg' },
    { name: 'Tarkov', basePrice: 8.99, undetected: true, imageUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3932890/e1367f10d469137a2ced522b642a9b1ee10450da/header.jpg?t=1770112829' },
    { name: 'Rust', basePrice: 8.99, undetected: true, imageUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/252490/header.jpg' },
    { name: 'Fortnite', basePrice: 8.99, undetected: true, imageUrl: 'https://i.ytimg.com/vi/adGdyCdvKz4/maxresdefault.jpg' }
  ]

  const handleBuy = (productName: string, duration: string, price: number) => {
    // Add your purchase logic here
    alert(`Redirecting to purchase: ${productName} - ${duration} ($${price.toFixed(2)})`)
  }

  return (
    <div className="products-section">
      <h1 className="products-title">ARC RAIDERS CHEATS</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            basePrice={product.basePrice}
            imageUrl={product.imageUrl}
            undetected={product.undetected}
            onBuy={handleBuy}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsGrid
