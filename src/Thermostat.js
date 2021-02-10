'use strict'

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaveOn = true;
    this.POWERSAVE_ON_MAX = 25;
    this.POWERSAVE_OFF_MAX = 32;
  };

  up(){
    if (this.powerSaveOn && this.temperature === this.POWERSAVE_ON_MAX) {
      throw("Maximum temperature for PowerSave mode reached");
    } else if (this.temperature === this.POWERSAVE_OFF_MAX) {
      throw("Maximum temperature reached");
    };
    this.temperature ++;
  };

  down(){
    if (this.temperature > 10) {
      this.temperature --;
    } else {
      throw("Minimum temperature reached");
    }
  };

  isPowerSaveOn() {
    return this.powerSaveOn;
  };
}