const express = require('express');

const router = express.Router();

const controllers = require('../controllers/controllers');

router
  .get('/', controllers.renderAllEntries)
  .get('/entry/:id', controllers.getEntry)
  .delete('/entry/:id', controllers.deleteEntry);

router.route('/new')
  .get(controllers.renderNewEntryForm)
  .post(controllers.createNewEntry);

router.route('/entry-form/:id')
  .get(controllers.renderEditEntryForm)
  .post(controllers.editEntry);

module.exports = router;
