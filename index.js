'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./build/index.min.js');
} else {
    module.exports = require('./build/index.js');
}
