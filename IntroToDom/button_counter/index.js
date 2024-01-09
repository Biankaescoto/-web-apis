// console.log("hey will this show???") this did show


//this did not show. Ask for help
let incButton = document.getElementById("increase-button");
let decButton = document.getElementById("decrease-button");

// console.log(decButton);

let countText = document.getElementById("count");
// console.log(countText);

let num = 0;
countText.textContent = num;

incButton.addEventListener("click", (e) => {
    console.log(e);
    num++;
    countText.textContent = num;
});

decButton.addEventListener("click", (e) => {
    num--;
    countText.textContent = num;
});