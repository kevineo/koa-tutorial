var koa = require('koa');
var app = new koa();

app.use(function* () {
	this.body = 'Hello World!';
});

app.listen(3000, function() {
	console.log('koa running on http://localhost:3000')
});

