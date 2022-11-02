'use strict';

require('dotenv').config();

const io = require('socket.io-client')
const socket = io(`http://localhost:${process.env.PORT}`)

const { faker } = require('@faker-js/faker');

// Details
let info = {
  airLine: 'Royal Jordanian Airlines',
  flightID: faker.datatype.uuid(),
  pilot: faker.name.fullName(),
  destination: faker.address.street(),
};
// console.log(info)

setInterval(() => {
  socket.emit('new-flight', info); // send from clint to srtver use => socket.emit
  socket.emit('took_off', info);
  socket.emit('arrived', info);

  console.log(`Manager: new-flight with ID: ${info.flightID} have been scheduled`);
  console.log(`Manager: Were greatly thankful for the amazing flight, ${info.pilot} ^_^`);
}, 10000);


module.exports = info;
