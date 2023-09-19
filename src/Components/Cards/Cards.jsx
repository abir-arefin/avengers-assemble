// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({addProfile}) => {
    const [cards, setCards]= useState([]);

    useEffect(
        () => {
            fetch("data.json")
            .then(res => res.json())
            .then(data => setCards(data))
        },[])


    return (
        <div className="w-1/2 mx-auto">
            <div className="grid grid-cols-2 gap-2">
                {
                    cards.map(card => <Card key={card.id} addProfile={addProfile} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;