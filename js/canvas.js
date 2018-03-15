
let canvas=document.querySelector('canvas');

console.log(canvas);
var c=canvas.getContext("2d");
c.fillStyle='rgba(0,255,0,0.3)';
c.fillRect(100,100,100,100);

c.fillRect(150,100,100,100);
c.fillRect(200,100,100,100);

c.beginPath();
c.moveTo(60,100);
c.lineTo(300,100);
c.lineTo(100,300);

c.stroke();

for(let i=0;i<100;i++){
    var x=Math.random()*window.innerWidth;
    var y=Math.random()*window.innerHeight;

    c.beginPath();
    c.arc(x,y,30,0,Math.PI*2,false);
    c.stroke();
}



