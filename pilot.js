'use strict';

require('dotenv').config();

const io = require('socket.io-client')
const socket = io.connect(`http://localhost:${process.env.PORT}/airline`)

const info = require('./manager.js')

// require('./manager.js');
// require('./system.js');

socket.on('new-flight', () => {
  setInterval(() => {
    socket.on('took_off', () => {
      console.log(`Pilot: flight with ID ${info.flightID} took_off `);
      socket.emit('took_off', took_off)
    })
  }, 4000);

  setInterval(() => {
    socket.on('arrived', info => {
      socket.emit('arrived', arrived)
      console.log(`Pilot: flight with ID ${info.flightID} has arrived`);
    })
  }, 7000);
  
});
