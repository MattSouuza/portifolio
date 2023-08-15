import HeroSectionDesktop from "./svg/heroSectionDesktop";

export default function Home() {
  return (
    <section className="flex flex-col-reverse box-border lg:flex-row items-center justify-center">

      <section className="flex flex-col z-10 md:-mr-56">
        <h1 className="text-white whitespace-nowrap md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">Olá! Meu nome é Matheus</h1>
        <h2 className="text-white whitespace-nowrap md:text-1xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mt-5">Desenvolvedor Fullstack</h2>
      </section>

      <HeroSectionDesktop />

    </section>
  )
}
