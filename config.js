
var path = require('path');
var os = require('os');
var fs = require('fs');

var home = path.join(os.homedir(), '.chemr');
var version = fs.readFileSync(path.join(__dirname, 'VERSION'), 'utf8');

module.exports = {
	DEBUG: false,
	version: version,
	cachePath: path.join(home, 'cache'),
	indexerPath: path.join(home, 'indexers'),
	root: __dirname
};

