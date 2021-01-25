//Create variables here
var dog, happyDog;
var doggie;
var database;
var foodS,foodStock;

function preload()
{
  //load images here
  
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  doggie = createSprite(250,250,30,30);
  doggie.addImage("dog",dog);
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
  doggie.scale = 0.1;
}


function draw() {  
  background(46,139,87);
  textSize = 20;
  fill("black");
  stroke(5);
  text("Note: use your 'f' key to feed woofie treats");
  if(keyWentDown("f")){
    doggie.changeImage("Happy",happyDog);
    writeStock(foodS);
  }

  drawSprites();
  //add styles here
  
}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref("/").update({
    food:x
  })
}
