import React from 'react';
import styled from 'styled-components'
import CardProps from "../common/interfaces/card.props";

const Wrapper = styled.div`
  background: #fbfdfd;
  border-radius: 12px;
  width: 10rem;
  height: 10rem;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(176, 192, 204, 0.2);
  font-size: 3rem;
  text-align: center;
  transition: 150ms background-color ease;
  cursor: pointer;

  &:hover {
    background: #f2f8f8;
  }
`

const Card = ({data}: CardProps) => {
    return (
        <Wrapper>
            {data}
        </Wrapper>
    );
};

export default Card;