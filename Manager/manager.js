'use strict';

// require('dotenv').config();

const io = require('socket.io-client')
const socket = io('http://localhost:3000')
// const socket = io(`http://localhost:${process.env.PORT}`)

const { faker } = require('@faker-js/faker');


setInterval(() => {

    let airLine= 'Royal Jordanian Airlines';
    let flightID= faker.datatype.uuid();
    let pilot= faker.name.fullName();
    let destination= faker.address.street();

  let details = {
    airLine,
    flightID,
    pilot,
    destination,
  }

  // socket.emit('new-flight', details); // send from clint to srtver use => socket.emit
  // socket.emit('took-off', details);
  // socket.emit('arrived', details);

  console.log(`Manager: new-flight with ID: ${details.flightID} have been scheduled`);
  socket.emit('new-flight', details);
  // console.log(`Manager: Were greatly thankful for the amazing flight, ${info.pilot} ^_^`);
}, 10000);

socket.on("arrived", (details) => {
  console.log(`Manager: Were greatly thankful for the amazing flight, ${details.pilot} ^_^`);
});

// module.exports = info;