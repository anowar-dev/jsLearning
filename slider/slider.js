
var imgs = ["img/cover.jpg", "img/cover2.jpg", "img/cover3.jpg"];
var imgTag=document.querySelector('img');

var count = 0;

function next(){
    count ++;
    if(count >= imgs.length){
        count = 0;
        imgTag.src = imgs[count];
    }
    else{
        imgTag.src = imgs[count];
    }
}

function prev(){
    count --;
    if(count < 0){
        count = imgs.length -1;
        imgTag.src = imgs[count];
    }
    else{
        imgTag.src = imgs[count];
    }
}





