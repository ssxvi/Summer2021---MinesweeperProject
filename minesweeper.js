var bombWeight = 0.50;
var pGridx = 5;
var pGridy = 5;
var playGrid;

class Land {

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.neighbours = [];
    this.number = -1;
    this.bomb = generateBomb(bombWeight);
  }

  setVisible(){
    console.log("visible");
  }

  update(){
    this.neighbours = getNeighbours(this);
    this.number = getNumber(this.neighbours);
  }

}

function setGrid(xn, yn){
 
  tGrid = [];



  for (i = 0; xn > i; i++){

    yGrid = [];
    
    for (j = 0; yn > j; j++){

      yGrid.push(new Land(i, j));
    }


    tGrid.push(yGrid);

  }
  
  return tGrid
}

function getNumber(grid){
  let counter = 0;

    for (i = 0; i < grid.length; i++){
      if (grid[i].bomb == true){
        counter++;
      } 
    }
  
  return counter
}


function getNeighbours(grid){

  let tGrid = [];
  let tX;
  let tY;

  for (i = -1; i <= 1; i++){

    tX = grid.x + i;

    for (j = -1; j <= 1; j++){

      tY = grid.y + j;


      //console.log(tX + " = tX | " + tY + " = tY");


      if ((tX == grid.x)&&(tY == grid.y)){

        //console.log("Center");

      } else if ( ((tX >= 0)&&(tY >= 0)) && ((tX < pGridx - 1)&&(tY < pGridy - 1)) ){

       tGrid.push(playGrid[tX][tY]);
       //console.log("works" + tX + " " + tY);

      } else if((tX < 0)||(tY < 0)){
       // console.log("Empty");



      } else {

        //console.log('wtf');

      }
     // console.log();
    }
  }

  //console.log(tGrid);
  return tGrid;
}

function generateBomb(){
  
  if (Math.random() < bombWeight){
    return true
  }
  return false
}

function updateAll(){

  for (let i = 0; i < (pGridx); i++){
    for (let j = 0; j < (pGridy); j++){

      playGrid[i][j].update();
    }
  }

}


//constructor

//test();


//main
playGrid = setGrid(pGridx, pGridy);
updateAll();
console.log(playGrid);
//getNeighbours(playGrid[0][0]);
//console.log(playGrid[1][1].bomb)
playGrid[1][1].setVisible();

