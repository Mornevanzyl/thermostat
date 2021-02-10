'use strict'

describe('Thermostat', () => {
  var thermostat

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('checks the starting temperature is 20', () => {
    expect(thermostat.temperature).toEqual(20);
  });

  it('Increases temperature by 1', () => {
    thermostat.up()
    expect(thermostat.temperature).toEqual(21);
  });

  it('Decreases temperature by 1', () => {
    thermostat.down()
    expect(thermostat.temperature).toEqual(19);
  });

  it("temperature can't decrease lower than 10", () => {
    for (var i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(function() { thermostat.down() ;}).toThrow("Minimum temperature reached")
  });

  describe('Powersave functionality', () => {

    it("starts with power saving mode ON", () => {
      expect(thermostat.isPowerSaveOn()).toBe(true);
    });

    it('has a max temperature of 25 when ON', () => {
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(function() { thermostat.up() ;}).toThrow("Maximum temperature for PowerSave mode reached")
    });

    it('has a max temperature of 32 when OFF', () => {
      thermostat.powerSaveOn = false;
      for (var i = 0; i < 12; i++) {
        thermostat.up();
      }
      expect(function() { thermostat.up() ;}).toThrow("Maximum temperature reached")
    });
  });

  
})