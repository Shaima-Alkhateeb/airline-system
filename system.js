'use strict';

const { format } = require('date-fns')
const events = require('./events.js');
const info = require('./manager.js')
// const fs = require('fs')

require('./manager.js')
require('./pilot.js')



events.on('new-flight', details => {
    // console.log(details)
    console.log(`Flight  { event: 'new-flight', time: ${format(new Date (), 'yyyy-MM-dd\tHH:mm:ss')}}`, 'details:', details);
})

events.on('took_off', details => {
    console.log(`Flight  { event: 'took_off', time: ${format(new Date (), 'yyyy-MM-dd\tHH:mm:ss')}}`, 'details:', details);
})

events.on('arrived', details => {
    console.log(`Flight  { event: 'arrived', time: ${format(new Date (), 'yyyy-MM-dd\tHH:mm:ss')}}`,'details:', details);
    console.log(`Were greatly thankful for the amazing flight, ${details.pilot} ^_^`);
})

module.exports = events;