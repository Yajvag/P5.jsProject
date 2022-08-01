function preload(){
}

function setup() {
    canvas = createCanvas(640,500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 125, 90, 400, 300);
  
    fill(230, 10, 5);
    stroke(230, 10, 5);
    circle(50, 50, 80);

    fill(255, 255, 0);
    stroke(255, 255, 0);
    circle(50, 430, 80);
    
    fill(154, 50, 204);
    stroke(230, 230, 250)
    circle(590, 50, 80);

    fill(0, 0, 255);
    stroke(0, 0, 255);
    circle(590, 430, 80);
  
    fill(56, 0, 100);
    stroke(56, 0, 100);
    rect(90, 40, 460, 20, 10);
    
    fill(0, 100, 0);
    stroke(0, 100, 0);
    rect(90, 420, 460, 20, 10);
    
    fill(255, 102, 0);
    stroke(255, 102, 0);
    rect(40, 90, 20, 300, 10);
    
    fill(90, 30, 255);
    stroke(90, 30, 255);
    rect(580, 90, 20, 300, 10);
}

function take_snapshot() {
    save('student_name.png');
}
 