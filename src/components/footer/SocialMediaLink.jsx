function SocialMediaLink(props) {

    const {handle, icon, href} = props;

    return (
        <>
            <a className="flex flex-row text-white font-bold bg-social-link-bg w-fit h-fit rounded-[20px] p-[10px] mx-[7px] mt-[15px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href={href} target="_blank">
                <img src={icon} className="w-[38px]"/>
                <span className="ml-[15px] text-[25px]">{handle}</span>
            </a>
        </>
    )

}

export default SocialMediaLink;