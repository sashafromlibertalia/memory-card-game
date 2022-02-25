import React from 'react';
import styled from "styled-components";
import Card from "./Card";

const Field = () => {
    const AmountOfCards: number = 12

    const Grid = styled.div`
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(4, 1fr);
    `

    let container = []
    for (let i = 0; i < AmountOfCards; i++) {
        container.push(<Card/>)
    }

    return (
        <Grid>
            {container}
        </Grid>
    );
};

export default Field;