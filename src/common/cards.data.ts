const cardsData = ["🌍", "🍉", "⛩", "🦚", "🌼", "🍇"]

// Shuffle
export default cardsData
    .flatMap(card => [card, card])
    .map(value => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}) => value)