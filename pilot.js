'use strict';

require('dotenv').config();

const io = require('socket.io-client')
const socket = io(`http://localhost:${process.env.PORT}`)
const socketAirline = io.connect(`http://localhost:${process.env.PORT}/airline`)

const info = require('./manager.js')

// require('./manager.js');
// require('./system.js');

socket.on('new-flight', info => {
  setInterval(() => {
    // socket.on('took_off', () => {
      console.log(`Pilot: flight with ID ${info.flightID} took_off `);
      socketAirline.emit('took_off', info)
    // })
  }, 4000);

  setInterval(() => {
    // socket.on('arrived', info => {
      console.log(`Pilot: flight with ID ${info.flightID} has arrived`);
      socket.emit('arrived', info)
    // })
  }, 7000);
  
});
