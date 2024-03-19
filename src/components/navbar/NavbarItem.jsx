function NavbarItem(props) {

    const {name, href, icon, active} = props;

    return (
        <>
            <a href={href} className={`flex flex-row mx-[30px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 decoration-navbar-item-underline underline-offset-[6px]`}>
                <img src={icon} className="w-[60px]"/>
                <span className={`text-[40px] mt-[30px] font-bold ml-[15px] ${(name == active) ? ("text-white") : ("text-gray-500")}`}>{name}</span>
            </a>
        </>
    )

}

export default NavbarItem;