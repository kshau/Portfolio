function SocialMediaLink(props) {

    const {handle, icon, href} = props;

    return (
        <>
            <a className="flex flex-row text-white font-bold bg-social-link-bg w-fit h-fit rounded-[30px] p-[15px] mx-[15px] mt-[2vh] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href={href} target="_blank">
                <img src={icon} className="w-[60px]"/>
                <span className="ml-[15px] text-[40px]">{handle}</span>
            </a>
        </>
    )

}

export default SocialMediaLink;