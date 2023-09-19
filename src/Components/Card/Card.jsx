// import React from 'react';

const Card = ({card, addProfile}) => {
    return (
        <div className="bg-blue-200 p-4 rounded-md">
            <img className="w-full rounded-full " src={card.image} alt="" />
            <h2 className="font-semibold text-2xl">{card.name}</h2>
            <p className="font-medium">{card.role}</p>
            <div>
                <a className="bg-teal-500 px-2 font-medium rounded-md text-white" href={card.fbUrl}> Facebook </a>
                <a className="bg-teal-500 px-2 font-medium rounded-md ml-2 text-white" href={card.twitter}> Twitter</a>
            </div>
            <button onClick={() => addProfile(card)} className=" bg-cyan-500 px-2 font-medium rounded-md text-white">View Profile</button>

        </div>
    );
};

export default Card;