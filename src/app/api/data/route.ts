import { NextResponse } from 'next/server'

import { NavLinkType } from '@/app/types/navlink'
import { ProjectType } from '@/app/types/project'
import { RecordType } from '@/app/types/record'
import { ReviewType } from '@/app/types/review'
import { SpecializeType } from '@/app/types/specialize'
import { PlanType } from '@/app/types/plan'
import { CategoryType } from '@/app/types/category'
import { FooterLinkType } from '@/app/types/footerlinks'
import { HeroType } from '@/app/types/hero'

const HeroData: HeroType[] = [
  {
    imgSrc: '/images/banner/logg1.png',
    
  },
  {
    imgSrc: '/images/banner/kp1.png',
  },
  {
    imgSrc: '/images/banner/kp2.png',
  },
  {
    imgSrc: '/images/banner/kp3.png',
  },
]

const NavLinkData: NavLinkType[] = [
  {
    label: 'About Us',
    href: '/#aboutus',
  },
  {
    label: 'Operations Principle',
    href: '/#operation',
  },
  {
    label: 'Buisness Development',
    href: '/#business',
  },
  {
    label: 'Equipment',
    href: '/#equipment',
  },
]

const defaultText = {
  Safety:
    "Kami melakukan pendekatan proaktif terhadap kesehatan dan keselamatan kerja personel kami.",
  Value:
    "Kompetensi personel menjadi prioritas kami agar dapat memberikan pelayanan terbaik kepada client.",
  Transparancy:
    "Kami menjunjung tinggi transparansi dalam setiap proses kerja, dengan standar kualitas yang terbaik.",
  Expierience:
    "Pengalaman kami menjadi fondasi dalam memberikan solusi dan berinovasi untuk pelayanan.",
  // Rebuild:
  //   "Kami berkomitmen untuk terus berkembang dan membangun ulang sistem yang lebih baik dan terintegrasi.",
};

const ProjectData: ProjectType[] = [
  { imgSrc: '/images/project/safety.svg', name: 'safety', description: defaultText.Safety },
  { imgSrc: '/images/project/value.svg', name: 'value', description: defaultText.Value },
  { imgSrc: '/images/project/transparans.svg', name: 'transparancy', description: defaultText.Transparancy },
  { imgSrc: '/images/project/exp.svg', name: 'expierience', description: defaultText.Expierience },
  // { imgSrc: '/images/project/build.svg', name: 'rebuild', description: defaultText.Rebuild },
];


const RecordData: RecordType[] = [
  {
    imgSrc: '/images/records/ship.svg',
    digit: 'Dredging Solutions',
    desc: 'Site visit, assessment efisiensi, pemilihan unit CSD & pipa HDPE yang tepat, instalasi, hingga operasional.',
  },
  {
    imgSrc: '/images/records/pipe.svg',
    digit: 'HDPE & Accessories',
    desc: 'Penjualan pipa HDPE dan accesoriess berkualitas untuk mendukung kebutuhan infrastruktur pengerukan.',
  },
  {
    imgSrc: '/images/records/user.svg',
    digit: 'Sales & Rental',
    desc: 'Pelayanan terhadap penjualan unit serta jasa sewa unit cutter suction dredger atau kapal keruk.',
  },
  {
    imgSrc: '/images/records/start.svg',
    digit: 'System Design',
    desc: 'Menyediakan design dredging system berkualitas untuk solusi pengerukan dan reklamasi yang efisien.',
  },
];

const ReviewData: ReviewType[] = [
  {
    imgSrc: '/images/review/daniel.webp',
    name: 'Daniel Reid',
    rating: 4.2,
    desc: 'Pixelize nailed our website redesign. Clean layout, fast loading, and mobile-friendly. Highly recommended!',
  },
  {
    imgSrc: '/images/review/sophia.webp',
    name: 'Sophia Turner',
    rating: 4.5,
    desc: 'The UI/UX improvements boosted our user engagement and conversions. Truly a professional team!',
  },
  {
    imgSrc: '/images/review/marcus.webp',
    name: 'Marcus Lee',
    rating: 4.8,
    desc: 'They understood our brand vision perfectly and delivered a logo that stands out in our industry.',
  },
]

const SpecializeData: SpecializeType[] = [
  {
    imgSrc: '/images/specialization/cutter.png',
    title: 'Cutter Suction Dredger',
    desc: 'Modern, responsive websites built to engage users and convert leads.',
  },
  {
    imgSrc: '/images/specialization/csd.png',
    title: 'CSD System',
    desc: 'Complete system for cutter suction dredger operations.',
  },
  {
    imgSrc: '/images/specialization/dregdes1.png',
    title: 'Dual Pump Dredger',
    desc: 'Dual pump dredger for enhanced efficiency and performance.',
  },
  {
    imgSrc: '/images/specialization/aquatic.png',
    title: 'Hydraulic Dredger',
    desc: 'Hydraulic dredger for efficient and reliable dredging operations.',
  },
  {
    imgSrc: '/images/specialization/aquatic2.png',
    title: 'Aquatic Harvester',
    desc: 'Specialized equipment for harvesting aquatic resources.',
  },
  {
    imgSrc: '/images/specialization/ampibi2.png',
    title: 'Amphibious Excavator',
     desc: 'Amphibious excavator for versatile operations in various environments.',
  },
   {
    imgSrc: '/images/specialization/tshd.png',
    title: 'TSHD',
    desc: 'TSHD for versatile operations in various environments.',
  },
   {
    imgSrc: '/images/specialization/rubber1.png',
    title: 'Discharge Rubber Hose',
    desc: 'High-quality discharge rubber hoses for dredging operations.',
  },
   {
    imgSrc: '/images/specialization/rubber2.png',
    title: 'Suction Rubber Hose',
    desc: 'High-quality suction rubber hoses for dredging operations.',
  },
  {
    imgSrc: '/images/specialization/welding.png',
    title: 'Welding Machine HDPE',
    desc: 'Professional welding services for industrial and construction projects.',
  },
   {
    imgSrc: '/images/specialization/ripe.png',
    title: 'Floater Pipe',
    desc: 'Professional Floating Pipe construction and installation services.',
  },
   {
    imgSrc: '/images/specialization/floatter.png',
    title: 'Floater Bridge',
    desc: 'Professional Floating Bridge installation and maintenance services.',
  },
]

const PlanData: PlanType[] = [
  {
    type: 'Basic',
    price: {
      monthly: 9,
      yearly: 95,
    },
    desc: 'Ideal for freelancers and startups.',
    option: [
      'Consultation with strategy session',
      'Basic design and development',
      'One revision per project',
      'Responsive on all devices',
      'Email support included only',
    ],
  },
  {
    type: 'Pro',
    price: {
      monthly: 19,
      yearly: 185,
    },
    desc: 'Perfect for small growing teams.',
    option: [
      'Advanced project planning support',
      'Premium design and development',
      'Three revisions per project',
      'Fully responsive and optimized',
      'Priority email and chat support',
    ],
  },
]

const CategoryData: CategoryType[] = [
  {
    imgSrc: '/images/category/webdev.webp',
    title: 'Web Design',
  },
  {
    imgSrc: '/images/category/logods.webp',
    title: 'Logo Design',
  },
  {
    imgSrc: '/images/category/mobileapp.webp',
    title: 'Mobile App Development',
  },
  {
    imgSrc: '/images/category/contentwrite.webp',
    title: 'Content Writing',
  },
  {
    imgSrc: '/images/category/digitalmarket.webp',
    title: 'Digital Marketing',
  },
]

const FooterLinkData: FooterLinkType[] = [
  // {
  //   section: 'Company',
  //   links: [
  //     {
  //       label: 'Projects',
  //       href: '/#project',
  //     },
  //     {
  //       label: 'Expertise',
  //       href: '/#expertise',
  //     },
  //     {
  //       label: 'Pricing',
  //       href: '/#pricing',
  //     },
  //     {
  //       label: 'Categories',
  //       href: '/#categories',
  //     },
  //   ],
  // },
  // {
  //   section: 'Support',
  //   links: [
  //     { label: 'Help center', href: '/' },
  //     { label: 'Terms of service', href: '/' },
  //     { label: 'Legal', href: '/' },
  //     { label: 'Privacy Policy', href: '/' },
  //   ],
  // },
]

export const GET = () => {
  return NextResponse.json({
    HeroData,
    NavLinkData,
    ProjectData,
    RecordData,
    ReviewData,
    SpecializeData,
    PlanData,
    CategoryData,
    FooterLinkData,
  })
}
