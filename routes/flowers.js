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
      winfo,
      einfo,
      einfo2,
      ainfo,
      ainfo2,
      ainfo3,
      ainfo4,
      finfo,
      finfo2,
      finfo3,
      finfo4,
      finfo5,
      finfo6,
      finfo7,
      finfo8,
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
        winfo,
        einfo,
        einfo2,
        ainfo,
        ainfo2,
        ainfo3,
        ainfo4,
        finfo,
        finfo2,
        finfo3,
        finfo4,
        finfo5,
        finfo6,
        finfo7,
        finfo8,
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
    winfo,
    einfo,
    einfo2,
    ainfo,
    ainfo2,
    ainfo3,
    ainfo4,
    finfo,
    finfo2,
    finfo3,
    finfo4,
    finfo5,
    finfo6,
    finfo7,
    finfo8,
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
  if (winfo) fObj.winfo = winfo;
  if (einfo) fObj.einfo = einfo;
  if (einfo2) fObj.einfo2 = einfo2;
  if (ainfo) fObj.ainfo = ainfo;
  if (ainfo2) fObj.ainfo2 = ainfo2;
  if (ainfo3) fObj.ainfo3 = ainfo3;
  if (ainfo4) fObj.ainfo4 = ainfo4;
  if (finfo) fObj.finfo = finfo;
  if (finfo2) fObj.finfo2 = finfo2;
  if (finfo3) fObj.finfo3 = finfo3;
  if (finfo4) fObj.finfo4 = finfo4;
  if (finfo5) fObj.finfo5 = finfo5;
  if (finfo6) fObj.finfo6 = finfo6;
  if (finfo7) fObj.finfo7 = finfo7;
  if (finfo8) fObj.finfo8 = finfo8;

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
