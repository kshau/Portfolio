import React, { Suspense } from 'react';

function AchievementCard(props) {

    const {event, award, image, animDelay} = props;

    return (
        <>
            <a className="bg-card-bg flex flex-col w-[700px] rounded-[20px] font-bold py-[10px] m-[15px] drop-shadow-lg animate-fadeIn opacity-0" style={{animationDelay: animDelay}}>

                <img src={image} className="w-[600px] h-[300px] m-[20px] rounded-[20px] border border-white border-[2px] object-cover self-center mb-[30px]"/>

                <div className="text-center mb-[10px] flex flex-col">
                    <span className="text-[27px] text-white">{event}</span>
                    <span className="text-[22px] text-red-300">{award}</span>
                </div>

            </a>
        </>
    )

}

export default AchievementCard;