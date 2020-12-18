var ball;
var dataBase,pos;

function setup(){
    createCanvas(500,500);
    dataBase = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var db = dataBase.ref('ball/position');
    db.on("value",readMe,showError);



}
function readMe(data){
    pos = data.val();
    ball.x = pos.x;
    ball.y = pos.y;
}
function showError(){
    console.log("ERROR");

}


function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
dataBase.ref('ball/position').set({
    'x':pos.x+x,
    'y':pos.y+y
})
}
