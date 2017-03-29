console.time("time");

var fs = require('fs');

var data=JSON.parse(fs.readFileSync("./match.json"));


console.log(data.matches);

console.timeEnd("time");