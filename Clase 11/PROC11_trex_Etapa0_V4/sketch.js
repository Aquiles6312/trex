var PLAY = 1;
var END = 0;
var gameStade = PLAY;
var score ;

var trex ,trex_running,trex_collicion,trex_end;
var suelo,suelo2,suelo_imagen;
var clound, clound_imagen,clound_img,clound_group;
var obstaculo,obs1_imagen,obs2_imagen,obs3_imagen,obs4_imagen,obs5_imagen,obs6_imagen,captus_group;

function preload(){
  trex_running= loadAnimation ("trex1.png","trex3.png","trex4.png")
  trex_end= loadAnimation ("trex_collided.png")
  suelo_imagen= loadAnimation ("ground2.png")
  clound_imagen= loadAnimation ("cloud.png")
  obs1_imagen= loadAnimation ("obstacle1.png")
  obs2_imagen= loadAnimation ("obstacle2.png")
  obs3_imagen= loadAnimation ("obstacle3.png")
  obs4_imagen= loadAnimation ("obstacle4.png")
  obs5_imagen= loadAnimation ("obstacle5.png")
  obs6_imagen= loadAnimation ("obstacle6.png")
}

function setup(){
  createCanvas(600,200)
  


  //crear sprite de Trex
 trex = createSprite(60,175,20,50)
 trex.addAnimation ("trexrunning",trex_running)
 suelo = createSprite (200,180,400,20)
 suelo.addAnimation ("suelo",suelo_imagen)
 suelo2 = createSprite(200,190,400,10)
 
 suelo.velocityX=-4
 suelo.x=suelo.width/2
 suelo2.visible=false
 trex.scale= 0.5
score = 0
}

function draw(){
  background("white")
  text ("Score  "+score,500,50 )
  if (gameStade==PLAY){
  score=score+Math.round(frameCount/60)
  if (keyDown("space")&& trex.y>=150){
    trex.velocityY=-10
     }
     trex.velocityY=trex.velocityY+0.8
     if(suelo.x<0){
      suelo.x=suelo.width/2
     }
     nubes ()
     obstaculos ()
    if(captus_group.isTouching(trex)){
    gameStade=END
    }
  } else if(gameStade==END){
   suelo.velocityX=0 
  }
  
 

 trex.collide(suelo2)
 console.log(trex.y)
 
 drawSprites()
}

function nubes (){
  if (frameCount%45==0){
  clound = createSprite (600,100,40,10)
  clound.velocityX=-3
  clound.addAnimation ("nube",clound_imagen)
  clound.y=Math.round(random(10,60))
  clound.scale=1.2
  clound.lifetime=220
clound_group.add(clound)
  }
}

function obstaculos () {
  if (frameCount%65==0){
    obstaculo = createSprite (650,159,50,50)
    obstaculo.velocityX=-6
    var medidor=Math.round(random(1,6))
    switch (medidor) {
      case 1:
        obstaculo.addAnimation("obs1",obs1_imagen);
        obstaculo.scale=0.9
        break;
        case 2:
        obstaculo.addAnimation("obs2",obs2_imagen);
        obstaculo.scale=0.9
        break;
        case 3:
        obstaculo.addAnimation("obs3",obs3_imagen);
        obstaculo.scale=0.8
        break;
        case 4:
        obstaculo.addAnimation("obs4",obs4_imagen);
        obstaculo.scale=0.6
        break;
        case 5:
        obstaculo.addAnimation("obs5",obs5_imagen);
        obstaculo.scale=0.5
        break;
        case 6:
        obstaculo.addAnimation("obs6",obs6_imagen);
        obstaculo.scale=0.5
        break;
        

    }
    obstaculo.lifetime=110
    captus_group.add(obstaculo)
  }
}

