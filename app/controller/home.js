'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async test() {
    const { ctx } = this;
    const result = await this.app.mysql.get('daohang', {});

    console.log(result);
    ctx.body = result + '4';
  }
}

module.exports = HomeController;
