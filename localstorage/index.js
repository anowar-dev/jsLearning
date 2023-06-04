//Find Elements

const fontSize = document.querySelector('#font');
const bgColor = document.querySelector('#color');
const reset = document.querySelector('.btn');
const mainElement = document.querySelector('main');

//Set values
let setValues = (fontSizelocal, bgColorlocal) =>{
    fontSize.value = fontSizelocal;
    bgColor.value = bgColorlocal;
    mainElement.style.fontSize = fontSizelocal;
    mainElement.style.backgroundColor = bgColorlocal;
}

//Local Storage valu get
let selectBar = () =>{
    let fontSizelocal = localStorage.getItem('fontSize');
    let bgColorlocal = localStorage.getItem('bgColor');
    if(fontSizelocal && bgColorlocal){
        setValues(fontSizelocal, bgColorlocal);
    }
    if(!fontSizelocal && !bgColorlocal){
        setValues('18px', 'aqua');
    }
    if(fontSizelocal && !bgColorlocal){
        setValues(fontSizelocal, 'aqua');
    }
    if(!fontSizelocal && bgColorlocal){
        setValues('18px', bgColorlocal);
    }
}

//All function
const selectFontSize = (event) =>{
    let selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem('fontSize', selectedFontSize);
}

const selectBgColor = (event) =>{
    let selectedBgCololr = event.target.value;
    mainElement.style.backgroundColor = selectedBgCololr;
    localStorage.setItem('bgColor', selectedBgCololr);
}

const resetbtn = () =>{
    localStorage.removeItem('fontSize');
    localStorage.removeItem('bgColor');
    setValues('18px', 'aqua');
}

//Add Event Listenner
fontSize.addEventListener('change', selectFontSize);
bgColor.addEventListener('change', selectBgColor);
reset.addEventListener('click', resetbtn);

selectBar();