class Character {
    constructor(image){
        this.image = image;
        this.matrix = []
        this.initializeMatrix();
        this.positionMatrix = 0; //Current witch frame
      }
      
      //Creat a matrix with the sprites positions
      initializeMatrix () {
        var matrizColumns = 4;
        var matrizRows = 4;

        for(var i=0; i < matrizColumns; i++){
            for(var j=0; j < matrizRows; j++){
                var x0 = 0;
                var y0 = 0;
                var dx = 220;
                var dy = 270;
                var xf = x0 + j * dx;
                var yf = y0 + i * dy;
                this.matrix.push([xf, yf]);
            } 
        }
      }

      show () {
        image(this.image, 50, height-310, 220, 270, this.matrix[this.positionMatrix][0], this.matrix[this.positionMatrix][1], 220, 270);
        this.animation();
      }
      
      animation () {
        this.positionMatrix++; //Change the current witch frame
        if(this.positionMatrix >= this.matrix.length){
            this.positionMatrix = 0; //Ensures looṕ
        }
      }
}