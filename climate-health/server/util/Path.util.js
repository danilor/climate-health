
const ServerConfig = require('../config/server.config');
const Console = require('../class/Console.class');

module.exports = {

  separator: '/',
  prefix: '[PATH] ',

  /**
   * Builds an API URL
   * @param finalPath
   * @returns {string}
   */
  createApiURL(finalPath){
    const result = this.separator + ServerConfig.path + this.separator + ServerConfig.apiEnd + this.separator + finalPath;
    Console.c(this.prefix + result);
    return result;
  }
}
