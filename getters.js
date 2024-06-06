class Rectangle{
    constructor(side, width){
        this.side=side;
        this.width= width;
    }
set side(newSide){
    if(newSide > 0){
        this._side= newSide;
    }
    else {
    console.log("error!!");
    }
}

set width(newWidth){
    if(newWidth > 0){
        this._width= newWidth;
    }
    else {
        console.log("error!!"); 
    
    }
}

get width(){
    return this._width;
}
get side(){
    return this._side;
}
get area(){
    return this._side*this._width;
}
}
// rectangle.side=3;
// rectangle.width=3;
const rectangle= new Rectangle(3, 12);

console.log(rectangle.side);
console.log(rectangle.width);
console.log(rectangle.area);