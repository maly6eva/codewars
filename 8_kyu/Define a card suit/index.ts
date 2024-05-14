export function defineSuit(card: string) {
    if (card.includes("♣")) {
        return "clubs";
    }

    if (card.includes("♦")) {
        return "diamonds";
    }

    if (card.includes("♥")) {
        return "hearts";
    }

    if (card.includes("♠")) {
        return "spades";
    }
    // good luck
}
