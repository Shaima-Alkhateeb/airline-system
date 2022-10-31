'use strict';

const events = require('./events.js');
const info = require('./manager.js')

require('./manager.js')
require('./pilot.js')



events.on('new-flight', details => {
    // console.log(details)
    console.log(`Flight  { event: 'new-flight', time: ${new Date ()}}`, 'details:', details);
})

events.on('took_off', details => {
    console.log(`Flight  { event: 'took_off', time: ${new Date ()}}`, 'details:', details);
})

events.on('arrived', details => {
    console.log(`Flight  { event: 'arrived', time: ${new Date ()}}`,'details:', details);
    console.log(`Were greatly thankful for the amazing flight, ${details.pilot} ^_^`);
})

module.exports = events;