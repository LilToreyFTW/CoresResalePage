'use client'

import React, { useState, useEffect } from 'react'

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 7, seconds: 31 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev

        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
          if (minutes < 0) {
            minutes = 59
            hours--
            if (hours < 0) {
              hours = 0
              minutes = 0
              seconds = 0
            }
          }
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => String(value).padStart(2, '0')

  return (
    <div className="countdown-section">
      <div className="limited-offer">⚡ Limited Offer ⚡</div>
      <div className="countdown-timer">
        {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
      </div>
      <div style={{ marginTop: '20px' }}>
        <ul className="features" style={{ display: 'inline-block', textAlign: 'left' }}>
          <li>Separate Kernel Bypass</li>
          <li>Premium Support</li>
        </ul>
      </div>
    </div>
  )
}

export default CountdownTimer
