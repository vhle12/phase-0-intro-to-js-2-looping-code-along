const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);


function writeCards(names, event) {
    let newArray = []
    for (let c = 0; c < names.length; c++) {
        newArray.push(`Thank you, ${names[c]}, for the wonderful ${event} gift!`);
    }

    return newArray;
} 


function countDown() {
    let number = 10
    while (number >= 0)
        console.log(number--)

    return number
}