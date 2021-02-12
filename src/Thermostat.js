'use strict'

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSave = true;
    this.POWERSAVE_ON_MAX = 25;
    this.POWERSAVE_OFF_MAX = 32;
  };

  up() {
    if (this.isPowerSaveOn() && this.temperature >= this.POWERSAVE_ON_MAX) {
      throw("Maximum temperature for PowerSave mode reached");
    } else if (this.temperature >= this.POWERSAVE_OFF_MAX) {
      throw("Maximum temperature reached");
    };
    this.temperature ++;
  };

  down() {
    if (this.temperature > 10) {
      this.temperature --;
    } else {
      throw("Minimum temperature reached");
    }
  };

  reset() {
    this.temperature = 20;
  }

  isPowerSaveOn() {
    return this.powerSave;
  };

  setPowerSaveMode(mode) {
    this.powerSave = mode;
  }

  energyUsage() {
    console.log("hello")
    if (this.temperature < 18) {
      return 'low-usage';
    } else if (this.temperature <= 25) {
      return 'medium-usage';
    };
    console.log('final')
    return 'high-usage';
  }
}