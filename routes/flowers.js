const express = require('express');
const router = express.Router();

const cors = require('../middleware/cors');

const Flower = require('../models/Flower');

// @route   POST api/flowers
// @desc    Add a flower
// @access   Public

router.post(
  '/',

  async (req, res) => {
    const {
      name,
      water,
      earth,
      earth2,
      air,
      air2,
      air3,
      air4,
      fire,
      fire2,
      fire3,
      fire4,
      fire5,
      fire6,
      fire7,
      fire8,
      date,
    } = req.body;

    try {
      flower = new Flower({
        name,
        water,
        earth,
        earth2,
        air,
        air2,
        air3,
        air4,
        fire,
        fire2,
        fire3,
        fire4,
        fire5,
        fire6,
        fire7,
        fire8,
        date,
      });

      await flower.save();

      res.json(flower);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   GET api/flowers
// @desc    Get all flowers
// @access   Public
router.get('/', cors, async (req, res) => {
  try {
    const flowers = await Flower.find();
    res.json(flowers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/flowers/:id
// @desc    Delete Flower
//@access   Public
router.delete('/:id', async (req, res) => {
  try {
    const deletedFlower = await Flower.findByIdAndRemove(req.params.id);
    res.json(deletedFlower);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
