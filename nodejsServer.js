var connect = require('connect'),
    directory = './';

const PORT = 8000
connect()
    .use(connect.static(directory))
    .listen(80);

console.log('Listening on port 80.');
