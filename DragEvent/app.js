
/*DragEvent Object

ondragstart
ondrag 
ondragended
ondragover
ondrop
ondragleave
*/

console.clear();

var div = document.querySelector('div');
var p = document.querySelector('p');


p.addEventListener('dragstart', function(event){
    event.dataTransfer.setData('text', event.target.id);
});

div.addEventListener('dragover', function(event){
    event.preventDefault();
});

div.addEventListener('drop', function(event){
    var id = event.dataTransfer.getData('text');
    div.appendChild(document.getElementById(id));
    event.preventDefault();
});