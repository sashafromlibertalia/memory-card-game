const cardsData = ["🌍", "🦊", "🍐", "🐝", "♥️", "🍇"]

const shuffle = (array: string[]): string[] => {
    return array.flatMap(card => [card, card])
        .map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value)
}

// Shuffle
export {cardsData, shuffle}