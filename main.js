function setup() {
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550)
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotResult);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}
leftw=0;
rightw=0;
differnce=0;
function draw() {
    background(51);
    textSize(differnce);
    fill(60,150,120);
    text("Font Size Is Here",50,400);
}

function gotResult(result) {
    if(result.length > 0){
 console.log(result);
 leftw=result[0].pose.leftWrist.x;
 rightw=result[0].pose.rightWrist.x;
 differnce=floor(leftw-rightw);
    }
}