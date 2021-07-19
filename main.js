nosex = 0;
nosey = 0;
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    x = ml5.poseNet(video, modelLoaded);
    x.on('pose', gotposes);
}
function draw(){
    image(video, 0, 0, 300, 300);
    circle(nosex, nosey, 20);
    fill("red");
    stroke("red");
}
function modelLoaded(){
    console.log("Model loaded!");s
}
function gotposes(y){
    if(y.length > 0){
        console.log(y);
        nosex = y[0].pose.nose.x-5;
        nosey = y[0].pose.nose.y-5;
        console.log(nosex, nosey);
    }
}