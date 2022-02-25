import React from 'react';
import styled from "styled-components";

const Footer = () => {
    const Footer = styled.footer`
      display: flex;
      justify-content: space-between;
    `
    return (
        <Footer>
            <a href="https://github.com/sashafromlibertalia/CV" target="_blank" rel="noreferrer">Hire me</a>
            <p>{new Date().getFullYear()}</p>
            <a href="https://github.com/sashafromlibertalia/memory-card-game" target="_blank" rel="noreferrer">Source code</a>
        </Footer>
    );
};

export default Footer;