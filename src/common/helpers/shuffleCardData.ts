const shuffleCardData = (): string => {
    const data = ["🌍", "🍉", "⛩", "🐶", "🦚", "🌼", "🍇"]
    return data[Math.floor(Math.random() * data.length)]
}

export default shuffleCardData()