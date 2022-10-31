'use strict';

const events = require('./events.js');
const info = require('./manager.js')

require('./manager.js');
require('./system.js');

events.on('new-flight', details => {
  //Wait 4 second
  setInterval(() => {
    //Log the status of the flight to the console with its ID.
    console.log(`flight with ID ${info.flightID} took_off `);

    //Emit 'took-off' event with the flight details to be the payload.
    events.emit('took_off', details);
  }, 4000);

  //Wait 3 seconds
  setInterval(() => {
    //Log the status of the flight to the console with its ID.
    console.log(`flight with ID ${info.flightID} has arrived`);

    //Emit 'Arrived' event with the flight details to be the payload.
    events.emit('arrived', details);
  }, 7000);
});

module.exports = events;
