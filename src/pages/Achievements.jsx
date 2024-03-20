import AchievementCard from "../components/AchievementCard";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import AchievementsData from "../components/data/AchievementsData";

function Achievements() {

    const cardElems = [];

    var animDelay = 0.4;
    for (var c of AchievementsData.reverse()) {

        animDelay += 0.1;

        cardElems.push(
            <AchievementCard event={c.event} award={c.award} image={c.image} href={c.href} animDelay={`${animDelay}s`} className={`animate-fadeIn opacity-0`}>
                {c.content}
            </AchievementCard>
        )
    }

    return (
        <>
            <div className="flex flex-col text-center mt-[120px]">
                <span className="text-[70px] font-bold text-white text-shadow shadow-gray-900 animate-fadeIn opacity-0"  style={{animationDelay: "0.2s"}}>Achievements</span>
            </div>

            <div className="flex justify-center">
                <div className="flex justify-center mt-[20px] flex-col pb-[120px]" id="projectCards">
                    {cardElems}
                </div>
            </div>

            <Navbar page="Achievements"/>
            <Footer/>
        </>
    )
}

export default Achievements;