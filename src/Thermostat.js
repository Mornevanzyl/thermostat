'use strict'

class Thermostat {
  constructor() {
    this.temperature = 20;
  };

  up(){
    this.temperature ++;
  };

  down(){
    if (this.temperature > 10) {
      this.temperature --;
    } else {
      throw("Minimum temperature reached");
    }
  };
}