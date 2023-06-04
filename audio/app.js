
var btns = document.querySelectorAll('.btn').length;

for(var i=0; i<btns; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        audioPlay(text);
        playAnim(text);
    });
}

document.addEventListener("keypress", function(event){
    var keyP = event.key;
    audioPlay(keyP);
    playAnim(keyP);
});

function audioPlay (text){
    switch(text){
        case "a":
            var mp3 = new Audio("musics/1.mp3");
            mp3.play();
        break;
        case "b":
            var mp3 = new Audio("musics/2.mp3");
            mp3.play();
        break;
        case "c":
            var mp3 = new Audio("musics/3.mp3");
            mp3.play();
        break;
        case "d":
            var mp3 = new Audio("musics/4.mp3");
            mp3.play();
        break;
    }
}


function playAnim (text){
    var selectBtn = document.querySelector('.'+text);
    selectBtn.classList.add('anim');
    
    setTimeout(function(){
        selectBtn.classList.remove("anim");
    },2000);
}