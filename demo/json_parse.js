"use strict"

JSON.parse('{"p": 5,"q":6,"g":{"g1": 5,"g2":6}}', (k,v) =>
	console.log(k,v)
);  