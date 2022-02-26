import React, {useState} from 'react';
import styled from "styled-components";
import Card from "./Card";
import {cardsData, shuffle} from "../common/cards.data";
import ShuffleGame from "./ShuffleGame";

const FieldWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`

const FieldGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 520px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr 1fr;
  }
`

const ResultTitle = styled.h5`
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 2rem;
`

const Field = () => {
    const [cards, setCards] = useState(() => shuffle(cardsData))
    const [isFlipped, setIsFlipped] = useState(Array<boolean>(cards.length).fill(false))
    const [foundCards, setFoundCards] = useState(new Set<string>())

    const updateField = () => {
        setTimeout(() => {
            // Hides all cards which are not in the Set
            setIsFlipped(Array<boolean>(cards.length).fill(false)
                .map((status, index) => foundCards.has(cards[index])))
        }, 1000)
    }
    
    const resetField = () => {
        setCards(() => shuffle(cardsData))
        setIsFlipped(Array<boolean>(cards.length).fill(false))
        setFoundCards(new Set<string>())
    }

    const isGameOver = () => {
        return [...foundCards].sort().join('') === cardsData.sort().join('')
    }

    const handleFlip = (index: number) => {
        // Prevents flip of already opened card
        if (isFlipped[index]) return;

        // Prevents flip of 3rd card
        const InvalidCardPair = 2
        if (new Set(cards.filter((card, index) => isFlipped[index])).size - foundCards.size === InvalidCardPair) return

        // Flips selected card
        setIsFlipped(isFlipped.map((n, i) => i === index ? !n : n))

        const lastFlippedCard: string = cards.filter((card, index) => !foundCards.has(card) && isFlipped[index])[0]
        if (!lastFlippedCard) return;
        if (lastFlippedCard !== cards[index]) {
            updateField()
            return;
        }

        foundCards.add(cards[index])
        setFoundCards(foundCards)
    }

    return (
        <FieldWrapper>
            <ShuffleGame onClick={resetField}/>
            {
                isGameOver() ? <ResultTitle>You won 🎉</ResultTitle> : ""
            }
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
        </FieldWrapper>
    );
};

export default Field;