import Link from "next/link"
import Button from "../button"
import MenuBar from "./menubar"

const Header = () => {

    const links = [
        { title: "Home", route: "/" },
        { title: "Sobre Mim", route: "/" },
    ]

    return (
        <header className="flex justify-end md:justify-center w-full max-w-7xl h-fit z-20 relative my-10">
            <MenuBar />
            <section className="hidden md:flex md:justify-between md:items-center md:w-full">
                <section className="flex items-center w-6/12 justify-between gap-1 max-w-xl">
                    <p className="text-lg font-semibold cursor-pointer bg-gradient-to-tr from-bloom-pink from-20% via-revolution-red via-50% to-sunnier-yellow to-95% text-transparent bg-clip-text animate-text md:text-md lg:text-2xl">{`<matheus/>`}</p>
                    <nav className="flex justify-end md:justify-between items-center w-40 lg:w-60 h-full">
                        {links.map((link, index) => (
                            <Link href={link.route} key={index} className="text-sm text-white hover:text-slate-300 focus:text-slate-300 no-underline md:text-md lg:text-lg">{link.title}</Link>
                        ))}
                    </nav>
                </section>
                <Button title="Meu Currículo" />
            </section>
        </header>
    )
}

export default Header