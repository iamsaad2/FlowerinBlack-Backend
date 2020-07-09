const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');

const Profile = require('../models/Profile');
const auth = require('../middleware/auth');

// @route   POST api/users
// @desc    Add User to Profile
//@access   Public

router.post(
  '/',
  [check('name', 'Please add a name').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, role, flower } = req.body;

    try {
      user = new Profile({
        name,
        role,
        flower,
      });

      await user.save();

      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/profiles/:id
// @desc    Update existing Profile
//@access   Public
router.put('/:id', auth, async (req, res) => {
  const { name, role } = req.body;
  let pObj = {};
  if (name) pObj.name = name;
  if (role) pObj.role = role;

  try {
    const updatedProfile = await Profile.findByIdAndUpdate(
      req.params.id,
      { $set: pObj },
      { new: true }
    );

    res.json(updatedProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/profiles/:id
// @desc    Delete profile
//@access   Public
router.delete('/:id', auth, async (req, res) => {
  try {
    const deletedProfile = await Profile.findByIdAndRemove(req.params.id);
    res.json(deletedProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/profiles
// @desc    Get all profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/profiles/:id
// @desc    Get one profiles
// @access   Public
router.get('/:id', async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
