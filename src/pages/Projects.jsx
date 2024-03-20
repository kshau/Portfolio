import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

import ProjectCard from "../components/ProjectCard";
import ProjectData from "../components/data/ProjectsData";

function Projects() {

    const cardElems = [];

    var animDelay = 0.4;
    for (var c of ProjectData.reverse()) {

        animDelay += 0.1;

        cardElems.push(
            <ProjectCard title={c.title} image={c.image} href={c.href} animDelay={`${animDelay}s`} className={`animate-fadeIn opacity-0`}>
                {c.content}
            </ProjectCard>
        )
    }

    return (
        <>
            <div className="flex flex-col text-center mt-[120px]">
                <span className="text-[70px] font-bold text-white text-shadow shadow-gray-900 animate-fadeIn opacity-0"  style={{animationDelay: "0.2s"}}>Projects</span>
            </div>

            <div className="flex justify-center mt-[20px] flex-wrap pb-[120px]" id="projectCards">
                {cardElems}
            </div>

            <Navbar page="Projects"/>
            <Footer/>
        </>
    )
}

export default Projects;