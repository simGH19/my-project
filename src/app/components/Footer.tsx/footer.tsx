import React from 'react'

export default function Footer() {
  return (
    <section className='my-8'>
      <hr className="h-0.5 bg-secondary-100 opacity-50 my-8" />
      <div className='flex md:justify-between base-section md:flex-row flex-col items-center'>
        <div className='text-secondary-100 order-last md:order-first pt-4 md:pt-0'>@ 2024 Simon Gummesson</div>
        <div className='text-secondary-100'>Built with Next.js / Tailwind css</div>
      </div>
    </section>
  )
}
