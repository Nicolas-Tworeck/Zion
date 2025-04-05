function animationSequence(){
    const backIni = document.getElementById('backIni');
    const title1 = document.getElementById('title1');
    const title2 = document.getElementById('title2');
    const title3 = document.getElementById('title3');
    const p1 = document.getElementById('p1');
    const b1 = document.getElementById('b1');
    const video1 = document.getElementById('video1');
    setTimeout(() =>{
        backIni.style.opacity = 1;
    },100);
    setTimeout(() =>{
        title1.style.opacity = 1;
    },1000);
    setTimeout(() =>{
        title2.style.opacity = 1;
    },1500);
    setTimeout(() =>{
        title3.style.opacity = 1;
    },2000);
    setTimeout(() =>{
        p1.style.opacity = 1;
    },2500);
    setTimeout(() =>{
        b1.style.opacity = 1;
    },3000);
    setTimeout(() =>{
        video1.style.opacity = 1;
    },3500);
}

window.onload = animationSequence;




