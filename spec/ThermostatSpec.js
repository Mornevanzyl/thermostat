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
      thermostat.down()
      console.log(thermostat)
    }
    expect(function() { thermostat.down() ;}).toThrow("Minimum temperature reached")
  });
})