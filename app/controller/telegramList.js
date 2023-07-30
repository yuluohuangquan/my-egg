'use strict';

const { Controller } = require('egg');
const axios = require('axios');

class TelegramListController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `更新telegram信息
`;
  }

  // 增删改查
  async insert() {
    const { ctx } = this;
    const url = 'https://api.telegram.org/bot6696659721:AAG6OGIaPdAV398rKSyzByoBa2Po-1vmLfY/getUpdates';
    const res = await axios.get(url);
    const params = [];
    res?.result?.forEach(item => {
      if (item?.message?.chat?.id === -1001487851010) {
        params.push({
          update_id: item?.update_id,
          message: item?.message?.text,
          form_usename: item?.message?.from?.username,
          chat_id: item?.message?.chat?.id,
          data: item?.message?.date,
        });
      }
    });
    const result = await this.app.mysql.insert('telegram_message', params);

    if (result.affectedRows > 0) {
      ctx.body = '新增成功';
    } else {
      ctx.body = '新增失败';
    }
  }

  async query() {
    const { ctx } = this;
    const result = await this.app.mysql.get('agency_list', ctx.params);

    ctx.body = result;
  }
}

module.exports = TelegramListController;
