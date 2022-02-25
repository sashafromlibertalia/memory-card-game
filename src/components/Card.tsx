import React, {useState} from 'react';
import styled from 'styled-components'

const Card = () => {
    const data = ["🌍", "🍉", "⛩", "🦚", "🌼", "🍇"]
    const [emoji] = useState(data[Math.floor(Math.random() * data.length)])

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
            {emoji}
        </Wrapper>
    );
};

export default Card;