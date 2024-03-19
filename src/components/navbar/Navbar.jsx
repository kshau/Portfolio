import NavbarItem from "./NavbarItem";

import HomeIcon from "../../assets/icons/navbar/home.svg";
import ProjectsIcon from "../../assets/icons/navbar/projects.svg";
import AchievementsIcon from "../../assets/icons/navbar/achievements.svg";

function Navbar(props) {

    const {page} = props;

    return (
        <>
            <div className="bg-navbar-bg w-[100vw] h-[120px] fixed top-0 shadow-lg flex justify-center">
                <NavbarItem name="Home" icon={HomeIcon} href="/" active={page}/>
                <NavbarItem name="Projects" icon={ProjectsIcon} href="/projects" active={page}/>
                <NavbarItem name="Achievements" icon={AchievementsIcon} href="/achievements" active={page}/>
            </div>
        </>
    )

}

export default Navbar;