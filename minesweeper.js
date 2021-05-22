var bombWeight = 0.20;
var pGridx = 10;
var pGridy = 10;
var playGrid = [];

//class for squares
class Land {

  //constructor
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.neighbours = [];
    this.number = -1;
    this.bomb = generateBomb(bombWeight);
    this.flagged = false;
    this.visible = false;
  }

  //visible + finds number
  setVisible(){
    this.visible = true;
    this.getNumber();
  }

  //updates Neighbours
  update(){
    this.neighbours = getNeighbours(this);
    this.getNumber();
  }

  //gets number based on neighbour array
  getNumber(){


    if (this.flagged == true){
      this.number = -2;
    } else if (this.bomb == true){
      this.number = -8; 
      
    } else {
    
      let counter = 0;

        for (i = 0; i < this.neighbours.length; i++){
          if (this.neighbours[i].bomb === true){
            counter++;
          } 
        }

      this.number = counter;
    }

  }

  //guesses
  guess() {

    this.setVisible();

    if (this.bomb == true){
      //lose();
      console.log('Lose');
    }
 
    for (let i = 0; i < this.neighbours.length; i++){

      this.neighbours[i].update();

      if (this.number == 0){

        if (this.neighbours[i].visible == false){

          this.neighbours[i].guess();

        }

      }
    }
  }
  
  flag(){

    if (this.visible == false){}
    this.visible = true;
    this.flagged = true;
    this.number = -2;
    
  }
  
}

//fills grid w/ 2d array of land
function setGrid(xn, yn){
 
  tGrid = [];


  for (i = 0; xn > i; i++){

    yGrid = [];
    
    for (j = 0; yn > j; j++){

      yGrid.push(new Land(i, j));

    }

    tGrid.push(yGrid);

  }
  
  return tGrid;
}





//Returns array 
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

      } else if ( ((tX >= 0)&&(tY >= 0)) && ((tX < pGridx)&&(tY < pGridy)) ){

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



//generates bomb chance
function generateBomb(){
  
  if (Math.random() < bombWeight){
    return true;
  }

  return false;

}


//updates all
function updateAll(grid){

  for (let i = 0; i < (pGridx); i++){
    for (let j = 0; j < (pGridy); j++){

      grid[i][j].update();

    }
  }

}

function budgetTrueVisualizer(grid){
  updateAll(playGrid);
  for (let i = 0; i < (pGridx); i++){

    let line = "";

    for (let j = 0; j < (pGridy); j++){

     grid[i][j].getNumber();

    switch(grid[i][j].number){
      case -1:
      line = line + '  -';
      break;
      case -2:
      line = line + '  !';
      break;
      case -8:
      line = line + '  *';
      break;
      default:
      line = line + '  ' + grid[i][j].number;
      break;
    }


    }
    console.log(line);
  }

}

function budgetVisualizer(grid){4
updateAll(playGrid);

  for (let i = 0; i < (pGridx); i++){

    let line = "";

    for (let j = 0; j < (pGridy); j++){

      if (grid[i][j].visible === true){

        switch(grid[i][j].number){
          case -1:
           line = line + '  -';
          break;
          case -2:
            line = line + '  !';
          break;
          case -8:
            line = line + '  *';
          break;
          default:
           line = line + '  ' + grid[i][j].number;

          } 
        } else {
          line = line + '  -';
      }
    }
    console.log(line);
  }

}


function firstGuessSetup(x, y){


  do {
    playGrid = setGrid(pGridx, pGridy);
    updateAll(playGrid);
    playGrid[x][y].getNumber();
    console.log(playGrid[x][y].number);
  } while(playGrid[x][y].number !== 0)

    playGrid[x][y].guess();
  
}








//constructor

//test();


//main


//playGrid = setGrid(pGridx, pGridy);
firstGuessSetup(Math.floor(pGridx/2), Math.floor(pGridy/2));

playGrid[0][0].flag();
updateAll(playGrid);

budgetTrueVisualizer(playGrid);
console.log();
budgetVisualizer(playGrid);
console.log();
//console.log(playGrid);

//console.log();

//budgetVisualizer(playGrid);
//getNeighbours(playGrid[0][0]);
//console.log(playGrid[1][1].neighbours)
//playGrid[1][1].setVisible();

