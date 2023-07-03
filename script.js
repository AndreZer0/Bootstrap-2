const eliminaCards = function () {
    const cards = document.querySelectorAll(".card");

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.remove();
    }

};


