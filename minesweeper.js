var bombWeight = 0.05;

function setGrid(xn, yn){
 
    tGrid = [];

    for (i = 0; xn > i; i++){

        yGrid = [];
        
        for (j = 0; yn > j; j++){
 
            yGrid.push(new land(i, j));
        }
        tGrid.push(yGrid);

    }


    return tGrid
}


function update(){
    
    console.log("asd");

}

function generateBomb(bombWeight){
    if (Math.random > bombWeight){
        return true
    }
    return false
}

//constructor


class land {

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.number = 0;
        this.bomb = generateBomb();
    }

    getNeighbours(){

    }


    
    /*get number(){

    }

    setVisible(){

    }
      */   
}


//main

console.log(setGrid(10,10));

