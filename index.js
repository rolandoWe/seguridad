

let circle=document.querySelector("#circle");
let circleArray=circle.textContent.split('');
    circle.innerHTML='';

    for(let i=0;i<circleArray.length;i++){
        circle.innerHTML+='<span style="transform:rotate('+(i*23)+'deg)">'+circleArray[i]+' </span>';
    }