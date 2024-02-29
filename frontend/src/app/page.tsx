import imgBannerDesktop from '@/app/assests/images/hero-image-desktop.png'
import imgBannerMobile from '@/app/assests/images/hero-image-mobile.png'

import Image from 'next/image'

import { SkillsCard } from './components/skills-card'

export default function Home() {
  return (
    <>
      <section className="flex flex-col-reverse box-border lg:flex-row items-center justify-center relative">

        <section className="flex flex-col justify-center z-20 mx-4 -mt-52 sm-mt-40 lg:-mr-56 lg:mt-0">
          <h1 className="text-white z-10 text-4xl sm:text-5xl lg:whitespace-nowrap lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">Olá! Meu nome é Matheus</h1>
          <h2 className="text-white z-10 text-2xl sm:text-3xl lg:whitespace-nowrap lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mt-5">Desenvolvedor Fullstack</h2>
        </section>

        <figure className="hidden lg:block">
          <Image src={imgBannerDesktop} alt='Matheus Souza picture' className="w-full max-w-4xl h-auto object-cover -mt-20 z-10 relative" />
        </figure>

        <figure className="lg:hidden flex justify-center items-center z-10">
          <div className="absolute top-6 z-10 w-screen h-full bg-gradient-to-b from-transparent via-transparent to-gray-900"></div>
          <Image src={imgBannerMobile} alt='Matheus Souza picture' className="w-screen h-screen object-cover -mt-20 z-10 relative" />
        </figure>

        <span className='hidden lg:block absolute top-0 -left-4 w-72 h-72 bg-next-level-gradient rounded-full z-0 filter blur-3xl opacity-70'></span>
        <span className='hidden lg:block absolute bottom-0 -right-4 w-40 h-72 bg-next-level-gradient rounded-full z-0 filter blur-3xl opacity-70'></span>

      </section>

      <section>
          <SkillsCard/>
      </section>
    </>
  )
}
