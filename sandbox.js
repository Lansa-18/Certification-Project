const currentNumber = 9;
const flipCard = document.querySelector('.flip-card');
const topHalf = flipCard.querySelector('.top');
const bottomHalf = flipCard.querySelector('.bottom');
const topFlip = document.createElement('div')
topFlip.classList.add('top-flip');
const bottomFlip = document.createElement('div')
bottomFlip.classList.add('bottom-flip');
top.textContent = currentNumber;
bottomHalf.textContent = currentNumber;

flipCard.dataset.currentNumber = currentNumber;
flipCard.dataset.nextNumber = currentNumber - 1;
flipCard.classList.add('flip');