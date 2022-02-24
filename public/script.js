const showRulesButton=document.getElementById("rules-btn");
showRulesButton.addEventListener("click",handleOnClickShowRules);
const rulesElement=document.getElementById("rules");
const closeButton=document.getElementById("close-btn");
closeButton.addEventListener("click",handleOnClickCloseButton);
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
let score =0;

// create ball props
const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    size:10,
    speed:4,
    dx:4,
    dy:-4
}

//create paddle props
const paddle={
x:canvas.width/2-40,
y:canvas.height-11,
w:80,
h:10,
speed:8,
dx:0
}

// draw ball on canvas
function drawBall(){
ctx.beginPath();
ctx.arc(ball.x,ball.y,ball.size,0,Math.PI*2)
ctx.fillStyle="#0095dd";
ctx.fill();
ctx.closePath();
}

// draw paddle on canvas
function drawPaddle(){
ctx.beginPath();
ctx.rect(paddle.x,paddle.y,paddle.w,paddle.h)
ctx.fillStyle="#0095dd";
ctx.fill();
ctx.closePath();
}

// draw the score
function drawScore(){
 ctx.font="20px Arial";
 ctx.fillText(`Score: ${score}`,canvas.width-100,30)
}

//draw everything
function draw(){
    drawBall();
    drawPaddle();
    drawScore();
}

draw();

function handleOnClickShowRules(){
  if(rulesElement.className==="rules"){
      rulesElement.className="rules show"
  }
}

function handleOnClickCloseButton(){
    if(rulesElement.className==="rules show"){
        rulesElement.className="rules"
    }
  }