import React from 'react'
import { FAQS } from '@/data/faqs'

type Props = {
  title?: string
}

export default function FaqAccordion({ title = 'FAQ' }: Props) {
  return (
    <section className="faq">
      <h2 className="faq-title">{title}</h2>
      <div className="faq-list">
        {FAQS.map((item) => (
          <details key={item.question} className="faq-item">
            <summary className="faq-question">
              <span className="faq-qmark">?</span>
              <span>{item.question}</span>
            </summary>
            <div className="faq-answer">{item.answer}</div>
          </details>
        ))}
      </div>
    </section>
  )
}

