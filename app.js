const rollBtn = document.querySelector('.btn');
const diceResult = document.querySelector('.dice-result');
const diceImages = document.querySelector('.dice-images');


rollBtn.addEventListener('click', function () {
    const diceNumber = document.getElementById('dice').value;
    const results = [];
    const images = [];

    //diceResult.textContent = '';

    for (let i=0; i<diceNumber; i++) {
      let result =  Math.floor(Math.random()*6)+1;
      results.push(result);
      images.push(`<img src='/images/dice-${result}.png' alt='Dice ${result}'>`);


    }

    //  console.log(results);
    //  console.log(images)

    diceResult.textContent = results.join(', ');

    diceImages.innerHTML = images.join('');
})
