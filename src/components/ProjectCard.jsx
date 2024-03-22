function ProjectCard(props) {

    const {title, image, href, animDelay, children} = props;

    return (
        <>
            <a href={href} target="_blank" className="bg-card-bg flex flex-row w-[500px] rounded-[20px] font-bold py-[10px] m-[15px] drop-shadow-lg animate-fadeIn opacity-0" style={{animationDelay: animDelay}}>

                <img src={image} className="w-[180px] h-[160px] m-[20px] rounded-[20px] border border-white border-[2px] object-cover"/>

                <div className="flex flex-col my-[20px] pr-[10px]">
                    <span className="text-[30px] text-yellow-500">{title}</span>
                    <span className="text-gray text-[15px]">{children}</span>
                </div>

            </a>
        </>
    )

}

export default ProjectCard;