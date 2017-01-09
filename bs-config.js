/**
 * Created on 2016-12-27.
 * @author: Gman Park
 */

var compression = require('compression');

module.exports = {
    server: {
        baseDir: "./app",
        middleware: {
            // overrides the second middleware default with new settings
            1: compression(), //gzip configure,
            // 2: require('connect-history-api-fallback')({
            //     index: '/index.dev.html',
            //     verbose: true
            // })
        }
    }
};