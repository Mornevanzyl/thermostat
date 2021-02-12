'use strict'

describe('Thermostat', () => {
  var thermostat

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe('Thermostat Controls: ', () => {
    
    it('The UP button ncreases temperature by 1', () => {
      thermostat.up()
      expect(thermostat.temperature).toEqual(21);
    });
  
    it('The DOWN button decreases temperature by 1', () => {
      thermostat.down()
      expect(thermostat.temperature).toEqual(19);
    });

    it('The RESET button sets the temperature to 20', () => {
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });

  });
  
  describe('Reports energy usage of ', () => {
    
    it('LOW when temperature is < 18', () => {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('MEDIUM when temperature is <= 25', () => {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('HIGH when temperature is > 25', () => {
      thermostat.setPowerSaveMode(false);
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });

  });

  describe('Basic settings', () => {
    
    it('checks the starting temperature is 20', () => {
      expect(thermostat.temperature).toEqual(20);
    });

    it("temperature can't decrease lower than 10", () => {
      for (var i = 0; i < 10; i++) {
        thermostat.down();
      }
      expect(function() { thermostat.down() ;}).toThrow("Minimum temperature reached")
    });
    
  });


  describe('PowerSave mode, ', () => {

    it("starts with state = ON", () => {
      expect(thermostat.isPowerSaveOn()).toBe(true);
    });

    it('allows a max temperature of 25 when ON', () => {
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect(function() { thermostat.up() ;}).toThrow("Maximum temperature for PowerSave mode reached")
    });

    it('allows a max temperature of 32 when OFF', () => {
      thermostat.setPowerSaveMode(false);
      for (var i = 0; i < 12; i++) {
        thermostat.up();
      }
      expect(function() { thermostat.up() ;}).toThrow("Maximum temperature reached")
    });

    it('can be turned OFF', () => {
      thermostat.setPowerSaveMode(false);
      expect(thermostat.powerSave).toBe(false);
    });
});

  
})