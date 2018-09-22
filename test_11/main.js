let load = require("bundle-loader!./a.js");

load(function(file){
	document.open();
	document.write(`<h1>${content}</h1>`);
	document.close();
})