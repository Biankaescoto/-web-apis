//async functions will create a promise

let cardImg = document.getElementById("card-image");
let cardRemaining = document.getElementById("card-remaining");
let cardButton = document.getElementById("card-button");

const createDeckAndGiveId = async () => {
    let url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

    let response = await fetch(url);
    let json = await response.json();

    // console.log(json.deck_id);
    let cardId = json.deck_id;
    return cardId;
};


const drawCard = async (deckId) => {
    try {
        let url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;

        let response = await fetch(url);
        let json = await response.json();

        console.log(json);
        
        if(json.error) throw new Error(json.error);

        let myCardDate = {
            img: json.cards[0].images.svg,
            remaining: json.remaining,
        };

        return myCardDate;
     } catch (err) {
        console.log(err);
        cardRemaining.textContent.content = err;
     }       
};



const start = async () => {
   let cardId = await createDeckAndGiveId();
//    console.log(cardId);

   cardButton.onclick = async () => {
        cardImg.style.opacity = 1;

        let {img, remaining} = await drawCard(cardId);

        cardRemaining.textContent = `Remaining: ${remaining}`;

        cardButton.textContent = remaining == 0 ? "Reshuffle" : "Draw a card";
    

        console.log(img);
        if (remaining == 0) {
            await start();
        } else {
            cardImg.src = img;
   }

    setTimeout(() => {
        cardImg.style.opacity =1;
    }, 1000);

} 
};

start();
