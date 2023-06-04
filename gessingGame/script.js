// initial values
let totalLimit = 5;
let attempt = 0;
let totalWon = 0;
let totalLost = 0;

// finding elements
const form = document.querySelector('form');
const guestNumber = document.querySelector('input');
const check = document.querySelector('#button');
const result = document.querySelector('.resultText');
const remaing = document.querySelector('.remaing');
const lostWon = document.createElement('p');
const final = document.createElement('p');

// add event listener
form.addEventListener('submit', function(event){
    event.preventDefault();
    checkResult(Number(guestNumber.value));
    attempt ++;
    if(attempt >=5){
        guestNumber.disabled = true;
        check.disabled = true;
        result.innerHTML = 'Teh game is over';
        if(totalLost > totalWon){
            final.classList.add('leargetext');
            final.innerHTML = 'You are the Faileour';
            form.appendChild(final);
        }
        else{
            final.classList.add('leargetext');
            final.innerHTML = 'Conngratulation! you are won the game';
            form.appendChild(final);
        }
    }
    else{
        guestNumber.disabled = false;
        check.disabled = false;
    }
    let remaingAttempt = totalLimit-attempt;
    remaing.innerHTML = `Remaining Attempt ${remaingAttempt}`;
});

function randomGenerator (limit){
    return Math.floor(Math.random()*limit)+1;
}

function checkResult (guestNumber){
    let generatedRandom = randomGenerator(5);
    if(guestNumber == generatedRandom){
        result.innerHTML = 'You are won';
        totalWon++;
    }
    else{
        result.innerHTML = `Fained the random number was ${generatedRandom}`;
        totalLost ++;
    }

    lostWon.classList.add('leargetext');
    lostWon.innerHTML = `Total lost ${totalLost}. Total win ${totalWon}`;
    form.appendChild(lostWon);
}

