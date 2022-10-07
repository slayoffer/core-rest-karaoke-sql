const renderTemplate = require('./handlers');

const Entries = require('../views/entries/Entries');
const NewEntry = require('../views/entries/NewEntry');
const EditEntry = require('../views/entries/EditEntry');
const ShowEntry = require('../views/entries/ShowEntry');

const { Entry } = require('../db/models');

exports.renderAllEntries = async (req, res) => {
  const entries = await Entry.findAll();
  renderTemplate(Entries, { entries }, res);
};

exports.renderNewEntryForm = (req, res) => {
  renderTemplate(NewEntry, {}, res);
};

exports.createNewEntry = async (req, res) => {
  const entry = await Entry.create(req.body.entry);
  try {
    await entry.save();
    res.redirect(`/entries/entry/${entry.id}`);
  } catch (err) {
    renderTemplate(NewEntry, { errors: [err] }, res);
  }
};

exports.renderEditEntryForm = async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  renderTemplate(EditEntry, { entry }, res);
};

exports.editEntry = async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const { singer, songTitle } = req.body.entry;
  entry.singer = singer;
  entry.songTitle = songTitle;
  entry.save();
  res.redirect(`/entries/entry/${entry.id}`);
};

exports.getEntry = async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  renderTemplate(ShowEntry, { entry }, res);
};

exports.deleteEntry = async (req, res) => {
  try {
    await Entry.destroy({ where: { id: req.params.id } });
    res.status(200).end();
  } catch (error) {
    console.log('BIG ERROR --->', error);
  }
};
