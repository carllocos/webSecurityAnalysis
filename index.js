
//PORTS for all servers
const ports = {
    host: process.env.HOST || 3000,
    guest1: process.env.GUEST1 || 3030,
    guest2: process.env.GUEST2 || 3050
}

//Host server
const expHost = require('express');
const appHost     = expHost();
const corsHost = require('cors')
appHost.use(corsHost())
const pathHost    = require('path');
const serverHost  = require('http').createServer(appHost);
serverHost.listen(ports.host, () => { console.log('Server listening at port %d', ports.host);});
appHost.use(expHost.static(pathHost.join(__dirname, 'public')))

//Guest server1
const expGuest1 = require('express');
const appGuest1     = expGuest1();
const corsGuest1 = require('cors')
appGuest1.use(corsGuest1())
const pathGuest1    = require('path');
const serverGuest1  = require('http').createServer(appGuest1);
serverGuest1.listen(ports.guest1, () => { console.log('Server listening at port %d', ports.guest1);});
appGuest1.use(expGuest1.static(pathGuest1.join(__dirname, 'public')))
const routerGuest1 = require('./router.js')
appGuest1.use(routerGuest1);



//Guest server2
const expGuest2 = require('express');
const appGuest2     = expGuest2();
const corsGuest2 = require('cors')
appGuest2.use(corsGuest2())
const pathGuest2    = require('path');
const serverGuest2  = require('http').createServer(appGuest2);
serverGuest2.listen(ports.guest2, () => { console.log('Server listening at port %d', ports.guest2);});
appGuest2.use(expGuest2.static(pathGuest2.join(__dirname, 'public')))

