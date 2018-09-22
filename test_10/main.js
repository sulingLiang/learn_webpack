require.ensure(['./a'],function(require){
	let content = require('./a');
	document.open();
	document.write(`<h1>${content}</h1>`);
	document.close();
});