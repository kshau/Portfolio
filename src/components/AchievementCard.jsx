import React, { Suspense } from 'react';

function AchievementCard(props) {

    const {event, award, image, right, animDelay} = props;

    console.log(right);

    const line = <div className="h-[10px] w-[70px] bg-yellow-500 left-[50vw] mt-[180px] drop-shadow-lg"></div>

    return (
        <>

            <div className={`flex flex-row ${(right) ? ("mt-[250px]") : ("mb-[250px]")} animate-fadeIn opacity-0`} style={{animationDelay: animDelay}}>

                {(right) ? (line) : ("")}

                <a className={`bg-card-bg w-[500px] flex flex-col w-fit rounded-[20px] font-bold py-[10px] m-[15px] drop-shadow-lg`}>

                    <img src={image} className="w-[350px] h-[180px] m-[20px] rounded-[20px] border border-white border-[2px] object-cover self-center mb-[30px]"/>

                    <div className="text-center mb-[10px] flex flex-col">
                        <span className="text-[27px] text-white w-[500px]">{event}</span>
                        <span className="text-[22px] text-red-300">{award}</span>
                    </div>

                </a>

                {(right) ? ("") : (line)}

            </div>

        </>
    )

}

export default AchievementCard;