'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from '../Header/Logo'
import { Icon } from '@iconify/react'
import { FooterLinkType } from '@/app/types/footerlinks'

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        SetFooterlink(data.FooterLinkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

return (
    <footer className="border-t border-darkblue/5 dark:border-white/5">
      <div className='container py-8'> {/* Dikurangi dari py-14 menjadi py-8 */}
        
        {/* LOGO SECTION - Jarak bawah dikurangi */}
        <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-5'>
          <div className='w-fit'>
            <Logo />
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-8'>
          
          {/* COLUMN-1: SOSMED */}
          <div className='lg:col-span-3 flex flex-col gap-5'>
            <div className='flex gap-4'>
              <Link href='/'>
                <Icon
                  icon='tabler:brand-instagram'
                  width={38} // Ukuran icon dikecilkan sedikit (dari 45)
                  height={38}
                  className='text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary duration-300'
                />
              </Link>
              <Link href='/'>
                <Icon
                  icon='tabler:brand-whatsapp'
                  width={38}
                  height={38}
                  className='text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary duration-300'
                />
              </Link>
            </div>
          </div>

          {/* COLUMN-2: LINKS */}
          <div className='lg:col-span-5'>
            <div className='flex gap-12'> {/* Gap antar section link dikurangi */}
              {footerlink.map((product, i) => (
                <div key={i} className='relative'>
                  <p className='text-lg font-semibold mb-5'> {/* Font & margin dikurangi */}
                    {product.section}
                  </p>
                  <ul>
                    {product.links.map((item, i) => (
                      <li key={i} className='mb-2'> {/* Margin bawah li dikurangi */}
                        <Link
                          href={item.href}
                          className='text-darkblue/60 dark:text-white/60 hover:text-primary text-sm font-normal'>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN-3: CONTACT INFO */}
          <div className='lg:col-span-4 flex flex-col gap-4'> {/* Menggunakan gap flex, bukan margin-top manual yang besar */}
            <div className='flex gap-2 items-center'>
              <Icon icon={'tabler:map-pin'} width={18} height={18} className='text-lightgrey' />
              <p className='text-sm font-normal text-offwhite'>Jl. Alam Sutra Raya</p>
            </div>
            
            <div className='flex gap-2 items-center'>
              <Icon icon={'tabler:phone'} width={18} height={18} className='text-lightgrey' />
              <Link href='tel:+6281234567890'>
                <p className='text-sm font-normal text-offwhite hover:text-primary'>+6281234567890</p>
              </Link>
            </div>

            <div className='flex gap-2 items-center'>
              <Icon icon={'tabler:mail'} width={18} height={18} className='text-lightgrey' />
              <Link href='mailto:info@gmail.com'>
                <p className='text-sm font-normal text-offwhite hover:text-primary'>email@gmail.com</p>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT - Padding diperkecil */}
      <div className='py-4 border-t border-darkblue/5 dark:border-white/5'>
        <p className='text-xs text-center opacity-70'>
          @2026 - PT. Cakrawala Pancaran Bahari
        </p>
      </div>
    </footer>
  )
}

export default Footer
