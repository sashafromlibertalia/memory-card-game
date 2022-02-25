import React from 'react';
import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
`

const Footer = () => {
    return (
        <Wrapper>
            <a href="https://github.com/sashafromlibertalia/CV" target="_blank" rel="noreferrer">Hire me</a>
            <a href="https://github.com/sashafromlibertalia/memory-card-game" target="_blank" rel="noreferrer">Source
                code</a>
        </Wrapper>
    );
};

export default Footer;