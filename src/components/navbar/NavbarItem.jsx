function NavbarItem(props) {

    const {name, href, icon, active} = props;

    return (
        <>
            <a href={href} className={`flex flex-row mx-[30px] ${(name == active) ? ("underline") : ("")} decoration-navbar-item-underline underline-offset-[6px]`}>
                <img src={icon} className="w-[60px] fill-white"/>
                <span className="text-white text-[40px] mt-[30px] font-bold ml-[15px]">{name}</span>
            </a >
        </>
    )

}

export default NavbarItem;