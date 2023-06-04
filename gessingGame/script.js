// Initialization some values
let totalLimit = 5;
let totalwon = 0;
let totalLost = 0;
let attempt = 0;


// Find elements

let cardBody = document.querySelector('.card-body');
let form = document.querySelector('form');
let input = form.querySelector('#input');
let btn = form.querySelector('#button');
let resultText = document.querySelector('.resultText');
let remaing = document.querySelector('.remaing');
let lostwonMassage = document.createElement('p');
let wonMassage = document.createElement('p'); 

form.addEventListener('submit', function(event){
    event.preventDefault();
    checkResult(input.value); 
    attempt ++;
    remaing.innerHTML = `Remaining attempts ${totalLimit-attempt}`;
    if(attempt >= 5){
        input.disabled = true;
        btn.disabled = true;
        resultText.innerHTML = 'The game is over';
        if(totalLost < totalwon){
            wonMassage.innerHTML = 'Congratulation! you are winner';
            wonMassage.classList.add('leargetext');
            cardBody.appendChild(wonMassage);
        }
        else{
            wonMassage.innerHTML = 'You are the failour';
            wonMassage.classList.add('leargetext');
            cardBody.appendChild(wonMassage);
        }
    }
    else{
        input.disabled = false;
        btn.disabled = false;
    }
});

function checkResult(input){
    let random = getRandomNumber(5);
    if(input == random){
        resultText.innerHTML = `You have won the game`;
        totalwon ++;
    }
    else{
        resultText.innerHTML = `You have lost the game: random was ${random}`;
        totalLost ++;
    }
    lostwonMassage.innerHTML = `Won: ${totalwon} Lost: ${totalLost}`;
    lostwonMassage.classList.add('leargetext');
    cardBody.appendChild(lostwonMassage);
}

function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
}

