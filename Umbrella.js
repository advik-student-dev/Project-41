class umbrellaClass {
    constructor(x, y) {

        var options =
        {
            'isStatic': true
        }
        this.image = loadImage("walking_1.png")//, "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png");
        //this.image2 = loadImage("walking_2.png");
        //this.image3 = loadImage("walking_3.png");
        //this.image4 = loadImage("walking_4.png");
        //this.image5 = loadImage("walking_5.png");
        //this.image6 = loadImage("walking_6.png");
        //this.image7 = loadImage("walking_7.png");
        //this.image8 = loadImage("walking_8.png");

        this.umbrella = Bodies.circle(x, y, 50, options);
        //this.width = 100;
        //this.height = 100;
        //this.image.scale = 0.3;
        World.add(world, this.umbrella);

    }


    display() {
        var pos = this.umbrella.position; //position
        //push();
        //translate(pos.x, pos.y); //drawing
        imageMode(CENTER);
        fill(255);
        image(this.image, pos.x, pos.y + 70, 300, 300);
        //pop();
    }


}