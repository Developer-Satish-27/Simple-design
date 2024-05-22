
let boxes = document.getElementsByClassName("box");

for(i=0; i<boxes.length;i++){
    a=Math.random()*255;
    b=Math.random()*255;
    c=Math.random()*255;
    
    boxes[i].style.backgroundColor = `rgb(${a},${b},${c})`;
    boxes[i].style.color =`rgb(${c},${a},${b})`;
    boxes[i].style.height="100px";
    boxes[i].style.width="100px";
}
