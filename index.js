require('node:dns').lookup('localhost', { all: true, family: 0 }, console.log)