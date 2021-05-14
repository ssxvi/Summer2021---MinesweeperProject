

function setGrid(xn, yn){
 
    tGrid = [];

    for (i = 0; xn > i; i++){
        for (j = 0; yn > j; j++){
            tGrid.push(new land(i, j));
        }
    }


    return tGrid
}


function update(){
    
    console.log("asd");

}

function generateBomb(){
    if (Math.random > 0.5){
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
    
    /*get number(){

    }

    setVisible(){

    }
      */   
}


//main

console.log(setGrid(10,10));

