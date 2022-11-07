'use strict';

// require('dotenv').config();
// const PORT = process.env.PORT

// const io = require('socket.io')(PORT)
const io = require('socket.io')(3000)

const airline_io = io.of('/airline') 

const { format } = require('date-fns')

io.on('connection', (socket) => {
    socket.on('new-flight', (details) => {
        // console.log(details)
        io.emit('new-flight', details)
        console.log(`Flight  { event: 'new-flight', time: ${format(new Date (), 'yyyy-MM-dd\tHH:mm:ss')},
            Details: {flightID: ${details.flightID}, airLine: ${details.airLine}, pilot: ${details.pilot}, destination: ${details.destination}}}`);
    })
    
    // socket.on('took_off', details => {
    //     console.log(`Flight  { event: 'took_off', time: ${format(new Date (), 'yyyy-MM-dd\tHH:mm:ss')}}`, '\ndetails:', details);
    //     // io.emit('took_off', details)
    // })
    
    // socket.on('arrived', (details) => {
    //     io.emit('arrived', details)
    //     console.log(`Flight  { event: 'arrived', time: ${format(new Date (), 'yyyy-MM-dd\tHH:mm:ss')},
    //         Details: {flightID: ${details.flightID}, airLine: ${details.airLine}, pilot: ${details.pilot}, destination: ${details.destination}}}`);
    // })
})

airline_io.on('connection', socket => {
    socket.on('took-off', (details) => {
        console.log(`Flight  { event: 'took_off', time: ${format(new Date (), 'yyyy-MM-dd\tHH:mm:ss')},
            Details: {flightID: ${details.flightID}, airLine: ${details.airLine}, pilot: ${details.pilot}, destination: ${details.destination}}}`);
    })
})

airline_io.on('connection', socket => {
    socket.on('arrived', (details) => {
        io.emit('arrived', details)
        console.log(`Flight  { event: 'arrived', time: ${format(new Date (), 'yyyy-MM-dd\tHH:mm:ss')},
            Details: {flightID: ${details.flightID}, airLine: ${details.airLine}, pilot: ${details.pilot}, destination: ${details.destination}}}`);
    })
})


//server:
// socket.emit --> send a message to the client  
// socket.on -->  receive a message from the client 
// io.emit --> send to all connected clients 


//client:
// socket.emit -->  send a message to the server 
// socket.on --> receive a message from the server  


// socket.emit(' ',  ) // send a message
// socket.on(' ',   ) // receive a message
