import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getProductBySlug, PRODUCTS, Product } from '@/data/products'
import FaqAccordion from '@/components/FaqAccordion'

type Props = {
  product: Product
}

export default function ProductPage({ product }: Props) {
  return (
    <>
      <Head>
        <title>{product.name} | ARC Raiders Cheats</title>
        <meta name="description" content={`${product.name} - ${product.shortDescription}`} />
        <link rel="canonical" href={`https://coresresale.vercel.app/products/${product.slug}`} />
      </Head>

      <div className="container">
        <div style={{ marginBottom: 20 }}>
          <Link href="/" className="buy-button" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none', maxWidth: 220 }}>
            ← Back to Home
          </Link>
        </div>

        <h1 style={{ marginBottom: 16 }}>{product.name}</h1>
        <img
          className="product-image"
          src={product.imageUrl}
          alt={product.name}
          style={{ height: 260 }}
          loading="lazy"
        />

        <div
          className="pricing-card"
          style={{ marginTop: 18, textAlign: 'left' }}
        >
          <div style={{ fontSize: '1.1rem', marginBottom: 10 }}>
            {product.shortDescription}
          </div>
          <div style={{ opacity: 0.95, lineHeight: 1.6 }}>
            {product.longDescription}
          </div>
        </div>

        <div style={{ marginTop: 22 }}>
          <FaqAccordion title="Questions & Answers" />
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: PRODUCTS.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug
  if (typeof slug !== 'string') {
    return { notFound: true }
  }

  const product = getProductBySlug(slug)
  if (!product) {
    return { notFound: true }
  }

  return { props: { product } }
}

