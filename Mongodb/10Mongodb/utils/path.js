const path = require('path');

// Get the directory of the entry point file (like app.js)
module.exports = path.dirname(require.main.filename);
