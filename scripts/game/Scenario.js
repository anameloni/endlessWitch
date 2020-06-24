//Encapsulate the scenario
class Scenario {
    constructor(image, speed){
      this.image = image;
      this.speed = speed;
      this.xStartScenario1 = 0; //The first scenario will stard at x=0
      this.xStartScenario2 = width; //The second scenario will stard at x=canvas.width, the end of the first scenario
    }
    //Show the background image on the screen
    show () {
      image(this.image, this.xStartScenario1, 0, width, height);
      image(this.image, this.xStartScenario2, 0, width, height);
    }
    //Make the ilusion of moving scenario
    move () {
      this.xStartScenario1 -= this.speed; //Determines the scenario's moviment acdording the speed set
      this.xStartScenario2 -= this.speed;
      
      //To ensure that when the second scenario ends, the first restarts
      if(this.xStartScenario1 < -width) { //Ensure the xStartScenario1 be less than 0
        this.xStartScenario1 = width; //When the xStartScenario1 be 0, it restarts
      }
      if(this.xStartScenario2 < -width) { 
        this.xStartScenario2 = width; 
      }
  
    }
  }