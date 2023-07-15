'use strict';

const { Controller } = require('egg');

class EssayListController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '随记列表';
  }
}

module.exports = EssayListController;
