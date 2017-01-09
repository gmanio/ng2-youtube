/**
 * Created on 2016-12-27.
 * @author: Gman Park
 */

var compression = require('compression');

module.exports = {
    "port": 8000,
    "files": ["./app/**/*.{html,htm,css,js}"],
    server: {
        middleware: {
            // overrides the second middleware default with new settings
            1: compression(), //gzip configure,
            2: require('connect-history-api-fallback')({
                index: './index.html',
                verbose: true
            })
        }
    }
};