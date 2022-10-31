'use strict';

const events = require('./events.js');

// const faker = require('faker')
const { faker } = require('@faker-js/faker');
const uuid = require('uuid').v4;

// Details
let info = {
  airLine: 'Royal Jordanian Airlines',
  flightID: faker.datatype.uuid(),
  pilot: faker.name.fullName(),
  destination: faker.address.street(),
};
// console.log(info)

// Trigger a 'new-flight' event every 10 seconds:
setInterval(() => {
    // Log a statement to the console informing that a new flight with its ID has been scheduled.
    console.log(`new-flight with ID: ${info.flightID} have been scheduled`);

    // Emit a 'new-flight' event with the flight details to be the payload.
    events.emit('new-flight', info);
}, 10000);

// Keep the manager alerted when a flight has arrived:
// events.on('arrived', details => {
//     // Log a message of appreciation to the pilot with his name to the console.
//     console.log(`Thank you ${details.pilot} for flying with us!`);
// })

module.exports = info;
