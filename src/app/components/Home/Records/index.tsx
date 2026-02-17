'use client'

import { useEffect, useState } from 'react'
import { RecordType } from '@/app/types/record'
import Image from 'next/image'
import RecordSkeleton from '../../Skeleton/Record'

const Records = () => {
  const [record, setRecord] = useState<RecordType[]>([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setRecord(data.RecordData)
      } catch (error) {
        console.error('Error fetching service', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

// ... (bagian import dan useEffect tetap sama)

return (
    <section id="business" className="py-20">
      <div className='container'>

        <div className="mb-12 text-center max-w-4xl mx-auto">
          <h1>BISNIS DEVELOPMENT</h1>
          <h3 className="text-xl md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Layanan yang kami berikan tidak hanya menjual **cutter suction dredger** atau kapal keruk, 
            tetapi juga meliputi jasa sewa unit dan menyediakan **design dredging system** yang berkualitas. 
            Kami bertujuan untuk berinovasi dan mendukung klien dalam mencapai solusi pengerukan 
            dan reklamasi yang efektif dan efisien.
          </h3>
          <h1 className="mt-8 text-2xl font-bold text-darkblue dark:text-white">
            Beberapa layanan yang kami sediakan meliputi:
          </h1>
        </div>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6'>
          {Loading
            ? Array.from({ length: 4 }).map((_, i) => <RecordSkeleton key={i} />)
            : record.map((item, i) => (
                <div key={i} className="h-full">
                  <div className='border border-darkblue/10 dark:border-white/10 rounded-xl flex flex-col gap-4 items-center p-8 shadow-sm h-full bg-white dark:bg-lightdarkblue'>
                    <div className='p-3 bg-primary/10 rounded-full'>
                      <Image src={item.imgSrc} alt="icon" width={35} height={35} />
                    </div>
                    <div className="flex-grow">
                      <h4 className='text-center text-lg font-bold mb-3 uppercase'>{item.digit}</h4>
                      <p className='text-center text-xl leading-relaxed text-gray-600 dark:text-gray-400'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        
  
        <p className="mt-10 text-center text-xs text-gray-400 italic">
          Strictly Confidential, For Recipient Only
        </p>
      </div>
    </section>
  )
}
export default Records
