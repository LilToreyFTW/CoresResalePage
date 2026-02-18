export type FaqItem = {
  question: string
  answer: string
}

// Shared FAQ shown on every product page.
// Note: keep answers product-agnostic so it can be reused for all items.
export const FAQS: FaqItem[] = [
  {
    question: 'How difficult is the installation process?',
    answer:
      'Installation is designed to be straightforward with a step-by-step guide. Most users complete setup within 5–10 minutes. If you need help, contact support for assisted setup.'
  },
  {
    question: 'When will I receive my product key?',
    answer:
      "Your license key is delivered automatically to your registered email address after payment confirmation (usually within 30 seconds). If you don’t see it, check spam/junk and then contact support."
  },
  {
    question: 'What support options are available?',
    answer:
      'Support is available 24/7 via Discord and email for technical questions and setup help. We also provide a knowledge base with troubleshooting steps and common fixes.'
  },
  {
    question: 'Is this product safe to use?',
    answer:
      'Use at your own risk. Any third‑party software can carry risk depending on your environment and how it is used. We recommend following the official guide and contacting support if anything looks unexpected.'
  },
  {
    question: 'What features are included in the product?',
    answer:
      'Features vary by product and are listed on the product page. If you need confirmation of a specific feature, contact support before purchasing.'
  },
  {
    question: 'How do updates work?',
    answer:
      'Updates are delivered through the loader/app when available. If a game or platform patch occurs, we publish updates as soon as possible. Active subscriptions receive updates during their subscription period.'
  },
  {
    question: 'Can I use this on multiple PCs?',
    answer:
      'Licenses are typically bound to one device at a time. If you need to switch devices, use the dashboard reset option (if available) or contact support for assistance.'
  }
]

