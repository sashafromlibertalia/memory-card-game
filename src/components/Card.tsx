import React from 'react';
import styled from 'styled-components'
import shuffleCardData from "../common/helpers/shuffleCardData";

const Card = () => {
    const Wrapper = styled.div`
      background: #fbfdfd;
      border-radius: 12px;
      width: 10rem;
      height: 10rem;
      padding: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
      text-align: center;
      cursor: pointer;
    `
    return (
        <Wrapper>
            {shuffleCardData}
        </Wrapper>
    );
};

export default Card;