'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/agencyList', controller.agencyList.index);
  router.post('/agencyList/insert', controller.agencyList.insert);
  router.delete('/agencyList/delete/:id', controller.agencyList.delete);
  router.update('/agencyList/update', controller.agencyList.update);
  router.query('/agencyList/query', controller.agencyList.query);

  router.get('/essayList', controller.essayList.index);
  router.get('/nagivationList', controller.nagivationList.index);
};
