
const fileToRun = process.argv[2];

console.log("Running ", fileToRun);

const test = require("./"+fileToRun);

test();
