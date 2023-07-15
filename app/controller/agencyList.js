'use strict';

const { Controller } = require('egg');

class AgencyListController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `待办列表
    id
    text
    create_time
    update_time
    abandoned
    finished
`;
  }

  // 增删改查
  async insert() {
    const { ctx } = this;
    const result = await this.app.mysql.insert('agency_list', ctx.params);

    if (result.affectedRows === 1) {
      ctx.body = '新增成功';
    } else {
      ctx.body = '新增失败';
    }
  }

  async delete() {
    const { ctx } = this;
    const result = await this.app.mysql.delete('agency_list', {
      id: ctx.params?.id,
    });
    console.log(result);

    if (result.affectedRows > 1) {
      ctx.body = '删除成功';
    } else {
      ctx.body = '删除失败';
    }
  }

  async update() {
    const { ctx } = this;
    const row = ctx.params;

    const options = {
      where: {
        id: ctx.params?.id,
      },
    };
    const result = await this.app.mysql.update('agency_list', row, options);

    if (result.affectedRows > 1) {
      ctx.body = '修改成功';
    } else {
      ctx.body = '修改失败';
    }
  }

  async query() {
    const { ctx } = this;
    const result = await this.app.mysql.get('agency_list', ctx.params);

    ctx.body = result;
  }
}

module.exports = AgencyListController;
