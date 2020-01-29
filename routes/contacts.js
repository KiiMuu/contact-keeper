const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    get all users contacts
// @access  private
router.get('/', (req, res) => {
    res.send('users contacts');
});

// @route   POST api/contacts
// @desc    add new contact
// @access  private
router.post('/', (req, res) => {
    res.send('add new contact');
});

// @route   PUT api/contacts/:id
// @desc    update contact
// @access  private
router.put('/:id', (req, res) => {
    res.send('update contact');
});

// @route   DELETE api/contacts/:id
// @desc    update contact
// @access  private
router.delete('/:id', (req, res) => {
    res.send('delete contact');
});

module.exports = router;