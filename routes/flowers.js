const express = require('express');
const router = express.Router();

const Flower = require('../models/Flower');
const { update } = require('../models/Flower');

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
router.get('/', async (req, res) => {
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

// @route   PUT api/flowers/:id
// @desc    Update existing Flowers
//@access   Public
router.put('/:id', async (req, res) => {
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
  let fObj = {};
  if (name) fObj.name = name;
  if (water) fObj.water = water;
  if (earth) fObj.earth = earth;
  if (earth2) fObj.earth2 = earth2;
  if (air) fObj.air = air;
  if (air2) fObj.air2 = air2;
  if (air3) fObj.air3 = air3;
  if (air4) fObj.air4 = air4;
  if (fire) fObj.fire = fire;
  if (fire2) fObj.fire2 = fire2;
  if (fire3) fObj.fire3 = fire3;
  if (fire4) fObj.fire4 = fire4;
  if (fire5) fObj.fire5 = fire5;
  if (fire6) fObj.fire6 = fire6;
  if (fire7) fObj.fire7 = fire7;
  if (fire8) fObj.fire8 = fire8;
  if (date) fObj.date = date;

  try {
    const updatedFlower = await Flower.findByIdAndUpdate(
      req.params.id,
      { $set: fObj },
      { new: true }
    );

    res.json(updatedFlower);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
