const { spawn } = require("child_process");
const { Buffer } = require("buffer");

const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0], 10);
let cmdArray = [];

majorVersion < 17 ? cmdArray = ['craco', '--max_old_space_size=4096', 'start'] : cmdArray = ['craco', '--max_old_space_size=4096', '--openssl-legacy-provider', 'start']

