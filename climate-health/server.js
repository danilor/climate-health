/**
 * Main Server module for API call and Distribution service
 */

/**
 * Includes
 */

const Console = require('./server/class/Console.class');
const response = require('./server/util/responses.util');
const ServerConfig = require('./server/config/server.config');
const ApiPath = require('./server/util/Path.util');

Console.title('NASA Climate Health App');

/**
 * Variables
 */


/**
 * Requires the express library
 */
const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
/**
 * Routes listeners
 */

Console.c('Public Static Path: ' + '/' + ServerConfig.path);

// Public path
app.use('/' + ServerConfig.path, express.static('build'));

app.get(ApiPath.createApiURL('status'), (req, res) => {
  return response.respondSuccess(res, {'status': true});
});



app.get(ApiPath.createApiURL('server'), async (req, res) => {
  return response.respondSuccess(res, {
    'userInfo': require("os").userInfo(),
    'process.env': process.env,
    'headers': req.headers
  });
});

/**
 * Starting the application
 */
app.listen(ServerConfig.port, () => {
  Console.s();
  Console.c(`-- NASA Climate Health listening to PORT ${ServerConfig.port} --`);
  Console.s();
});
