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
})