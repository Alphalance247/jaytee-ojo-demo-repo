import Image from 'next/image'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from 'next/head';
import SectionWithImage from '../components/SectionWithImage';
import OurPrograms from '../components/OurPrograms';
import ProgramsCard from '../components/ProgramsCard';
import WhatWeDo from '../components/WhatWeDo';



export default function Home() {
  return (
    <main>
      <SectionWithImage />
      < OurPrograms />
      < ProgramsCard />
      < WhatWeDo />
      
    </main>
  )
}
