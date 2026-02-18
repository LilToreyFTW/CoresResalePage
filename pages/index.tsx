import Head from 'next/head'
import PricingSection from '@/components/PricingSection'
import CountdownTimer from '@/components/CountdownTimer'
import ProductsGrid from '@/components/ProductsGrid'

export default function Home() {
  return (
    <>
      <Head>
        <title>ARC Raiders Cheats | Undetected Arc Raiders Cheat - Apex, COD, Fortnite</title>
        <meta name="description" content="ARC Raiders Cheats - Buy undetected Arc Raiders cheat, Apex Legends, Call of Duty, Fortnite, Tarkov, Rust. Premium kernel bypass, 1 Day to Lifetime. ARC Raiders Cheats starting at $20." />
        <meta name="keywords" content="ARC Raiders Cheats, Arc Raiders cheat, Arc Raiders hack, undetected cheats, Apex Legends cheats, Call of Duty cheats, Fortnite cheats, Tarkov cheats, Rust cheats, Siege cheats, HWID spoofer, game cheats" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://coresresale.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ARC Raiders Cheats | Undetected Game Cheats" />
        <meta property="og:description" content="ARC Raiders Cheats - Premium undetected Arc Raiders cheat, Apex, COD, Fortnite. Kernel bypass, premium support. Buy ARC Raiders Cheats." />
        <meta property="og:url" content="https://coresresale.vercel.app/" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ARC Raiders Cheats | Undetected Game Cheats" />
        <meta name="twitter:description" content="ARC Raiders Cheats - Premium undetected cheats for Arc Raiders, Apex, COD, Fortnite. Buy now." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#667eea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <header>
          <h1>🎮 Premium Game Cheats</h1>
          <p className="subtitle">Undetected • Secure • Premium Support</p>
        </header>

        <PricingSection />
        
        <CountdownTimer />
        
        <ProductsGrid />
      </div>
    </>
  )
}
