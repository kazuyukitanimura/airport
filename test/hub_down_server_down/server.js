#!/usr/bin/env node
var air = require('../../')(process.argv[2]);
air(function() {}).listen('beep');
