const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const auth = require('../middleware/auth');

const Manager = require('../models/Manager');

// @route   GET api/auth
// @desc    Get logged in User
//@access   Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await Manager.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Servor Error');
  }
});

// @route   POST api/auth
// @desc    Auth user and get token
//@access   Public
router.post(
  '/',

  async (req, res) => {
    const { email, password } = req.body;

    try {
      let user = await Manager.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Servor Error');
    }
  }
);

module.exports = router;
