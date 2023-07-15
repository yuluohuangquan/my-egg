'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `
    agencyList  待办列表
    essayList   随记列表
    nagivationList  导航列表
    `;
  }
}

module.exports = HomeController;
