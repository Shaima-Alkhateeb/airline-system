'use strict';

// require('dotenv').config();

const io = require('socket.io-client')
const socket = io(`http://localhost:3000`)
const socketAirline = io.connect(`http://localhost:3000/airline`)


socket.on('new-flight', (details) => {
  setInterval(() => {
    // socket.on('took-off', () => {
      console.log(`Pilot: flight with ID ${details.flightID} took-off `);
      socketAirline.emit('took-off', details)
    // })
  }, 4000);

  setInterval(() => {
    // socket.on('arrived', info => {
      console.log(`Pilot: flight with ID ${details.flightID} has arrived`);
      socketAirline.emit('arrived', details)
    // })
  }, 7000);
  
});
