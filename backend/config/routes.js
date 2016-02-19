router.route('/users/').get(itemsController.all);
router.route('/items/create').post(itemsController.create);
router.route('/items/:id/delete').delete(itemsController.delete);
router.route('/items/:itemname/:password/show').get(itemsController.show);
router.route('/items/:id/edit').put(itemsController.edit);
// Exports route so that other pages can grab this file
module.exports = router
