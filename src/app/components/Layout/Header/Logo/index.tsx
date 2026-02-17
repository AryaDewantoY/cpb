import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
<Link href='/' className='flex items-center gap-3'> 
  <div className='relative'>
    <Image
      src='/images/logo/lgo.png' 
      alt='logo'
      width={90}
      height={56}
      priority 
      className='block dark:hidden rounded-full' 
    />

    <Image
      src='/images/logo/lgo.png' 
      alt='logo'
      width={90}
      height={56}
      priority
      className='hidden dark:block rounded-full' 
    />
  </div>

  <span className='text-xl font-bold text-black dark:text-white'>
    PT. Cakrawala Pancaran Bahari
  </span>
</Link>
  )
}

export default Logo
