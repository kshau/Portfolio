function NavbarItem(props) {

    const {name, href, icon, active} = props;

    return (
        <>
            <a href={href} className={`flex flex-row mx-[30px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 decoration-navbar-item-underline underline-offset-[6px]`}>
                <img src={icon} className={`w-[50px] filter ${(name == active) ? ("") : ("brightness-[0.7]")}`}/>
                <span className={`text-[30px] mt-[27px] font-bold ml-[15px] ${(name == active) ? ("text-white") : ("text-gray")}`}>{name}</span>
            </a>
        </>
    )

}

export default NavbarItem;
