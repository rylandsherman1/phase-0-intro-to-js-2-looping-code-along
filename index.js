const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards, surprise) {
    const messages = []
    for (let i = 0; i < cards.length; i++) {
        console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
        messages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }

    return messages;
}

writeCards(cards, "surprise");


function countDown() {
let countDown = 10;
while (countDown >= 0) {
console.log(countDown--);
}
}
