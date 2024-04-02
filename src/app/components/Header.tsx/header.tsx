import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <section className='base-section'>
        <div className='flex justify-between py-8'>
            <Link href={'/'}><div className='text-white  font-bebas text-3xl'>Simon Gummesson</div></Link>
            <div className='hidden'>
              <ul className='flex gap-8'>
                <li>
                <Link className='font-bebas text-lg' href={'/'}>CONTACT</Link>
                </li>
                <li>
                <Link className='font-bebas text-lg' href={'/'}>WORK</Link>
                </li>
                <li>
                <Link className='font-bebas text-lg' href={'/'}>ABOUT</Link>
                </li>
              </ul>
            </div>
        </div>
    </section>
  )
}
