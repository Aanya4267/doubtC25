class paper{
    constructor(x,y,wid,hei){
        
        var options = {
        'isStatic':false , 
        'restitution':0.3 ,
        'friction':0.5 , 
        'density':1.2 
        }
        this.body = Matter.Bodies.circle(x,y,wid,options);
        this.x = x;
        this.y = y;
        this.width = wid; 
        this.height = hei;
        this.img = loadImage("paper.png");
        World.add(world,this.body);
       
    }

    display(){
        var pos = this.body.position ;
        imageMode(CENTER);
        
       // ellipse(pos.x,pos.y,this.width,this.height);
        
        //fill("white");
        image(this.img,pos.x,pos.y,this.width,this.height);
    }

    
}
