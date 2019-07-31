var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;
myVar = setInterval(drawClock, 1000);
function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}
var newVar;
function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  document.getElementById("timedisp").innerHTML = `The time is  ${hour} :: ${minute} :: ${second}`;

    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}
function drawTime2(ctx, radius){
  let hour=0,minute=0,second=0;
  document.getElementById("timedisp").innerHTML = `The clock is reset to  ${hour} :: ${minute} :: ${second}`;

    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);

    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawTime3(ctx, radius,seconds){
  console.log(seconds );
  let minute=0,hour=0;
  if(seconds>3600){
   hour = (seconds/3600);}
    let remainingSeconds = seconds - (3600 * hour);
    if(remainingSeconds>60)
  	 minute= remainingSeconds/60;

  	//7
remainingSeconds = remainingSeconds - (minute*60);
  let	second = remainingSeconds;

console.log(hour );
console.log(minute );
console.log(second );



  document.getElementById("timedisp").innerHTML = `The stop watch time is  ${hour} :: ${minute} :: ${second}`;

    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);

    drawHand(ctx, second, radius*0.9, radius*0.02);
}
function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
function live(){
  myVar = setInterval(drawClock, 1000);
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);

}
var sec=0,hour=0,minute=0;
function drawTimer(){
  console.log("sec"+sec);
  sec=(sec+1);
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime3(ctx, radius,sec);
}
var timerflag=0;
function timer(){
  if(timerflag==0){
  var btnTimer = document.getElementById("Timer");
  console.log(btnTimer);
  btnTimer.value="Stop Timer";
  console.log(btnTimer);

  reset();
  console.log(btnTimer);

  console.log("here");
  drawTimer();
  console
  newVar= setInterval(drawTimer, 1000);
  timerflag=1;

}
else{
  var btnTimer = document.getElementById("Timer");
  btnTimer.value="start Timer";
  console.log("here");

  clearInterval(newVar);
  timerflag=0;


}
}
function reset(){
  clearInterval(myVar);
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime2(ctx, radius);
}
