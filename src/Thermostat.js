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
    this.setPowerSaveMode(true)
  }

  isPowerSaveOn() {
    return this.powerSave;
  };

  setPowerSaveMode(mode) {
    this.powerSave = mode;
  }

  energyUsage() {
    if (this.temperature < 18) {
      return 'low-usage';
    } else if (this.temperature <= 25) {
      return 'medium-usage';
    };
    return 'high-usage';
  }

  outsideTemp() {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  console.log(data.main.temp);
})
  }
}