import React, {useState} from 'react';
import styled from "styled-components";
import Card from "./Card";
import {cardsData, shuffle} from "../common/cards.data";

const FieldGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
`

const Field = () => {
    const [cards, setCards] = useState(() => shuffle(cardsData))
    const [isFlipped, setIsFlipped] = useState(Array<boolean>(cards.length).fill(false))

    const handleFlip = (index: number) => {
        setIsFlipped(isFlipped.map((n, i) => i === index ? !n : n))
    }

    return (
        <FieldGrid>
            {
                cards.map((data, index) => {
                    return <Card key={index}
                                 index={index}
                                 isFlipped={isFlipped[index]}
                                 data={data}
                                 onClick={handleFlip}/>
                })
            }
        </FieldGrid>
    );
};

export default Field;