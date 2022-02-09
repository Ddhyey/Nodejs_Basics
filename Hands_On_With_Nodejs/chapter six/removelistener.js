function connListener(stream) {
    console.log('Ah, we have our first user!');
    server.removeListener('connection', connListener);
    }
    server.on('connection', connListener);
    erver.removeAllListeners('connection');    