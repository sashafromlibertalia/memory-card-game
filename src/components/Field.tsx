import React from 'react';
import styled from "styled-components";
import Card from "./Card";
import CardsData from "../common/cards.data";

const FieldGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
`

const Field = () => {
    const AmountOfCards: number = 12
    let container = []

    for (let i = 0; i < AmountOfCards; i++) {
        container.push(<Card key={`Card-${i + 1}`} data={CardsData[i]}/>)
    }

    return (
        <FieldGrid>
            {container}
        </FieldGrid>
    );
};

export default Field;