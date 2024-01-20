const MenuBar = () => {
    return (
        <div className="space-y-2 md:hidden active:scale-95 duration-300 w-16 h-16 flex flex-col p-2 justify-center rounded-xl z-10">
            <span className="block w-full h-1 rounded-md bg-white"></span>
            <span className="block w-full h-1 rounded-md bg-white"></span>
            <span className="block w-1/2 h-1 rounded-md bg-white"></span>
        </div>
    )
}

export default MenuBar