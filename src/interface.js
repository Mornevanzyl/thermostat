$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();

    $('#temp-up').click(function() {
        thermostat.up();
        updateTemperature();
    });

    $('#temp-down').click(function() {
        thermostat.down();
        updateTemperature();
    });

    $('#reset').click(function() {
        thermostat.reset();
        $('#powersave').removeClass();
        updateTemperature();
    });

    $('#powersave').click(function() {
        thermostat.setPowerSaveMode(true);
        updateTemperature();
    });

    $('#powersave').click(function() {
        currPSM = thermostat.isPowerSaveOn();
        thermostat.setPowerSaveMode(!currPSM);
        $('#powersave').toggleClass('off');
    });

    $('#outside').mouseenter(function() {
        $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#temp').text(Math.round(data.main.temp));
})
    });

    $('#outside').mouseleave(function() {
        updateTemperature();
    });

    function updateTemperature() {
        $('#temp').text(thermostat.temperature);
        if (thermostat.energyUsage() === 'low-usage') {
            $('#usage').addClass('low');
        } else if (thermostat.energyUsage() === 'high-usage') {
            $('#usage').addClass('high');
        } else {
            $('#usage').removeClass();
        }
    }
  })