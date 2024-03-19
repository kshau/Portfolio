function SocialMediaLink(props) {

    const {handle, icon, href} = props;

    return (
        <>
            <a className="flex flex-row text-white font-bold bg-social-link-bg w-fit h-fit rounded-[30px] p-[15px] mx-[7px] mt-[2vh]" href={href} target="_blank">
                <img src={icon} className="w-[60px]"/>
                <span className="ml-[15px] text-[40px]">{handle}</span>
            </a>
        </>
    )

}

export default SocialMediaLink;