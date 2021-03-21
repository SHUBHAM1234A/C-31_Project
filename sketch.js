const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var q,bg;
var maxDrops=100;
var TF=0;
var rs,ts

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
    bg = loadImage("BG.jpg");
    rs = loadSound("Sound/Rain.mp3");
    ts = loadSound("Sound/Thunder.mp3")
}

function setup(){
    
    //raining Sound 😀
    rs.loop();

    engine = Engine.create();
    world = engine.world;

    createCanvas(480,720);
    umbrella = new Umbrella(175,300);

    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }
    }    
}

function draw(){
    Engine.update(engine);
    background(bg); 

    if(frameCount%80===0){
       //thunder sound😀
        ts.play();
    }

    q = Math.round(random(1,4));
    if(frameCount%80===0){
        TF=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(q){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(TF + 10 ===frameCount && thunder){
        thunder.destroy();
    }


    for(var i = 0; i<maxDrops; i++){
        drops[i].sd();
        drops[i].y()
    }


    umbrella.display();

    //displaying rain drops
    
    drawSprites();
}