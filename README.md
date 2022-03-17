![Thermostat](https://github.com/Mornevanzyl/thermostat/blob/main/images/thermostat.jpg?raw=true)

# Thermostat

Thermostat is a simple Javascript class and Jasmine unit test developed to satisfy the end-of-unit requirements of a challenge set during week 6 of the Makers Academy bootcamp.

## Running Tests

```bash
git clone git@github.com:Mornevanzyl/thermostat.git

open SpecRunner.html
```

## Usage

```JS
open index.html # in your browser.

# Use the web interface or,
# Use the console in Chrome Developer Tools

thermostat = new Thermostat # returns instance of Thermostat class

thermostat.up() # increases temperature by 1 degree
thermostat.down() # decreases temperature by 1 degree
thermostat.temperature # displays current temperature

thermostat.energyUsage() # displays low, medium or high
```

## Approach

The assignment was an introcution to web interfaces, and specifically connecting our classes to web interfaces. We were required to use JQuery to achieve this.

As per most of our projects at Makers, I followed a strict [TDD](https://bit.ly/3q65B8q) approach to satisfying the requirements of this challenge. A systematic and iterative cycle of interpreting a series of user stories and developing feature tests/unit tests/feature implmentation/refactoring.

As a bit of a CSS entusiast I extented the scope of the project to try and model my thermostat after the Nest thermostats whilst keeping within the project requirements.

## Acknowledgements/Appreciations

- Thanks to [Giles Hodges](https://seamless-pixels.blogspot.com) for the background texture.
