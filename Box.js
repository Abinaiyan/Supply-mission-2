class Box{

constructor(x,y,width,height){

var options = {
isStatic: false,
restitution = 0.1

}

this.body = Bodies.rectangle(x,y,width,height, options);
World.add(world, this.body);
}

display(){
var pos = this.body.position;
rectMode(CENTER)
fill(255);
rect(pos.x, pos.y, this.width, this.height)
}


}