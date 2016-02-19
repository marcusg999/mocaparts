router.route('/users/').get(UsersController.all);
router.route('/users/create').post(UsersController.create);
router.route('/users/:id/delete').delete(UsersController.delete);
router.route('/users/:username/:password/show').get(UsersController.show);
router.route('/users/:id/edit').put(UsersController.edit);
// Exports route so that other pages can grab this file
module.exports = router
