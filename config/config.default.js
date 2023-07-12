/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1689088395169_5089';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  const mysql = {
    // database configuration
    client: {
      // host
      host: '123.60.13.75',
      // port
      port: '3306',
      // username
      user: 'my-egg',
      // password
      password: 'bnT8Pp2PbDkfY8x3',
      // database
      database: 'my-egg',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  return {
    ...config,
    ...userConfig,
    ...mysql,
  };
};
