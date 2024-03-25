import fetch from "sync-fetch";

import AchievementCard from "../components/AchievementCard";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function Achievements() {

    const achievementsData = fetch("https://portfolio-assets.shaurya.pro/achievements/achievements.json").json();

    const cardElemsRight = [];
    const cardElemsLeft = [];

    var animDelay = 0.4;
    var floatLeft = true;

    for (var c of achievementsData.reverse()) {

        animDelay += 0.1;

        const elem = (
            <AchievementCard event={c.event} award={c.award} date={c.date} image={`https://portfolio-assets.shaurya.pro/achievements/${c.image}`} href={c.href} right={!floatLeft} animDelay={`${animDelay}s`} className={`animate-fadeIn opacity-0`}>
                {c.content}
            </AchievementCard>
        )

        if (floatLeft) {
            cardElemsLeft.push(elem);
        }

        else {
            cardElemsRight.push(elem);
        }

        floatLeft = !floatLeft;
    }

    return (
        <>
            <div className="flex flex-col text-center mt-[100px]">

                <span className="text-[70px] font-bold text-white text-shadow shadow-gray-900 animate-fadeIn opacity-0"  style={{animationDelay: "0.2s"}}>Achievements</span>

                <div className="flex justify-center animate-fadeIn opacity-0 mb-[150px]" style={{animationDelay: "0.3s"}}>

                    <div className="mt-[30px]">
                            {cardElemsLeft}
                    </div>

                    <div className="w-[10px] bg-yellow-500 left-[50vw] rounded-md mt-[40px] drop-shadow-lg"></div>

                    <div className="mt-[30px]">
                            {cardElemsRight}
                    </div>

                </div>

            </div>

            <Navbar page="Achievements"/>
            <Footer/>
        </>
    )
}

export default Achievements;
