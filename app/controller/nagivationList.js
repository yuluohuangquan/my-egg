'use strict';

const { Controller } = require('egg');

class NagivationListController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '导航列表';
  }
}

module.exports = NagivationListController;
