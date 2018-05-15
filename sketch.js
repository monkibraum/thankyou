
  // ./img/kwangyoung.png
//Collision detection - Bouncing behavior

var circles;
var boxes;
var MARGIN = 40;

function preload() {
}

function setup() {
  createCanvas(1200,800);  
  textSize(20);
  circles = new Group();
  
  for(var i=0; i<14; i++)
  {
  var circle = createSprite(random(0,width),random(0,height));
  circle.addAnimation("normal", "./img/bear1.png",  "./img/bear1.png", "./img/bear2.png", "./img/bear2.png");
  circle.setCollider("circle", -2,2,55);
  circle.setSpeed(random(2,3), random(0, 360));
  
  //scale affects the size of the collider
  circle.scale = random(0.5, 1);
  //mass determines the force exchange in case of bounce
  circle.mass = circle.scale;
  //restitution is the dispersion of energy at each bounce
  //if = 1 the circles will bounce forever
  //if < 1 the circles will slow down
  //if > 1 the circles will accelerate until they glitch
  //circle.restitution = 0.9;
  circles.add(circle);
  }
  
  boxes = new Group();
  
  for(var i=0; i<4; i++)
  {
  var box = createSprite(i*300+100, i*130+100);
  box.addAnimation("normal", "./img/bear1.png",  "./img/bear1.png", "./img/bear2.png", "./img/bear2.png");
  //setting immovable to true makes the sprite immune to bouncing and displacements
  //as if with infinite mass
  box.immovable = true;
  
  //rotation rotates the collider too but it will always be an axis oriented
  //bounding box, that is an ortogonal rectangle
  if(i%2==0)
    box.rotation = 90;
    
  boxes.add(box);
  }
}



function draw() {
  background(255,255,255);  

  var s = '교수님! 오랜만입니다 ㅎㅎ 잘 지내고 계시죠? 저는 잘 살고있답니다. 계속 개발 일을 하면서 재밌게 배워가고 있습니다. 오늘은 특별한 편지를 위해 프로세싱을 꺼내들었습니다. 교수님 덕에 입문했던! ㅋㅋ 많이 산만하죠...? 귀엽게 봐주세요..ㅎㅎ 스승의날 축하드립니다! 교수님께 늘 감사하게 생각하고 있는 제 마음이 전해지길 바랍니다.   - 윤원 드림 ';
  fill(50);
  text(s, 120, 400, 500, 550) 
  //circles bounce against each others and against boxes
  circles.bounce(circles);
  //boxes are "immovable"
  circles.bounce(boxes);
  
  //all sprites bounce at the screen edges
  for(var i=0; i<allSprites.length; i++) {
  var s = allSprites[i];
  if(s.position.x<0) {
    s.position.x = 1;
    s.velocity.x = abs(s.velocity.x);
  }
  
  if(s.position.x>width) {
    s.position.x = width-1;
    s.velocity.x = -abs(s.velocity.x);
    }
  
  if(s.position.y<0) {
    s.position.y = 1;
    s.velocity.y = abs(s.velocity.y);
  }
  
  if(s.position.y>height) {
    s.position.y = height-1;
    s.velocity.y = -abs(s.velocity.y);
    } 
  }
    
  drawSprites();
  
}

