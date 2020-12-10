const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var umbrella;
var maxDrops = 100;

var dropsArray = [];
var thunder1, thunder2, thunder3, thunder4;
var thunder;
var thunderFrame;
//var drops;
function preload() {

    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");

}

function setup() {
    createCanvas(400, 700);
    engine = Engine.create();
    world = engine.world;

    umbrella = new umbrellaClass(200, 500);

    if (frameCount % 150 === 0) {
        for (var i = 0; i < maxDrops; i++) {
            dropsArray.push(new dropsClass(random(0, 400), random(0, 400)))
        }
    }

    Engine.run(engine);
}

function draw() {
    Engine.update(engine);

    background(0, 0, 50);

    var rand = Math.round(random(1, 4));

    if (frameCount % 80 === 0) {
        thunderFrame = frameCount;
        thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
        switch (rand) {
            case 1: thunder.addImage(thunder1);
                break;
            case 2: thunder.addImage(thunder2);
                break;
            case 3: thunder.addImage(thunder3);
                break;
            case 4: thunder.addImage(thunder4);
                break;
            default: break
        }
        thunder.scale = random(0.3, 0.6);
    }
    if (thunderFrame + 10 === frameCount && thunder) {
        thunder.destroy();
    }

    umbrella.display();
    for (var i = 0; i < dropsArray.length; i++) {

        dropsArray[i].update();
        dropsArray[i].draw_ellipse();

    }
    //drops.update();
    drawSprites();
}

