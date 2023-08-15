import Link from "next/link"
import Button from "../button"
import MenuBar from "./menubar"

const Header = () => {

    const links = [
        { title: "Home", route: "/" },
        { title: "Sobre Mim", route: "/" },
    ]

    return (
        <header className="flex justify-end md:justify-normal w-full h-fit mt-10">
            <MenuBar />
            <section className="hidden md:flex md:justify-between md:items-center md:w-full">
                <nav className="flex justify-end md:justify-between items-center w-40 lg:w-60 h-full">
                    {links.map((link, index) => (
                        <Link href={link.route} key={index} className="text-sm lg:text-lg text-white hover:text-slate-300 focus:text-slate-300 no-underline">{link.title}</Link>
                    ))}
                </nav>
                <Button title="Meu Currículo" />
            </section>
        </header>
    )
}

export default Header