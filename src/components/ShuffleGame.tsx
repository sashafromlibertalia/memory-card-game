import React from 'react';
import styled from "styled-components";
import ShuffleIcon from "../assets/shuffle-icon.svg"
import ShuffleProps from "../common/interfaces/shuffle.props";

const ButtonWrapper = styled.span`
  background: #fbfdfd;
  border-radius: 12px;
  width: 3rem;
  height: 3rem;
  padding: 0.8rem;
  margin-bottom: 2rem;
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

const Icon = styled.span`
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat no-repeat !important;
  background-size: 100% 100% !important;
`


const ShuffleGame = (props: ShuffleProps) => {
    return (
        <ButtonWrapper onClick={props.onClick}>
            <Icon style={{background: `url(${ShuffleIcon})`}}/>
        </ButtonWrapper>
    );
};

export default ShuffleGame;