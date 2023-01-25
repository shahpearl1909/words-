noseX=0;
noseY=0;
difference=0;
leftWrist=0;
rightWrist=0;

function preload(){
}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(150,150);

    canvas=createCanvas(500,500);
    canvas.position(850,150);
    
    posenet=ml5.poseNet(video, modelLoad);
    posenet.on("pose", gotPose);
}
function draw(){
background("#ffffff");
document.getElementById("font_size").innerHTML=difference+"px";
textSize(difference);
fill("#ac000a");
text("Pearl", noseX, noseY);
}
function modelLoad(){
    console.log("poseNet is initialized");
}
function gotPose(results){
    if (results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        difference=floor(leftWrist-rightWrist);
        console.log("right wrist = "+rightWrist," left wrist = "+leftWrist," difference = "+difference);
    }
    
}
