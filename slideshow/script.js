let slideshowElements = document.querySelectorAll('.innerElement');

let count = 1;
setInterval(() => {
    count++;
    let curentElement = document.querySelector('.current');
    curentElement.classList.remove('current');
    if(count >slideshowElements.length){
        slideshowElements[0].classList.add('current');
        count = 1;
    }
    else{
        curentElement.nextElementSibling.classList.add('current');
    }

},2500);