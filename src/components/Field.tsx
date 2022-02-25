import React from 'react';
import styled from "styled-components";
import Card from "./Card";

const Field = () => {
    const Grid = styled.div`
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(4, 1fr);
    `
    return (
        <Grid>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Grid>
    );
};

export default Field;