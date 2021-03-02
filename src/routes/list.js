"use strict";

const express = require('express');
const router = express.Router();

const Item = require ('../models/item');


router.get('/', async (req, res) => {
    const items = await Item.find();
    res.json(items);
  });

router.post('/', async (req, res) => {
    console.log(req.body);
    res.json('received');
  });  

module.exports = router;