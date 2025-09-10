const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();

router.post('/', async (req, res) => {
  const transaction = new Transaction(req.body);
  await transaction.save();
  res.status(201).json(transaction);
});

router.get('/', async (req, res) => {
  const txs = await Transaction.find().populate('petId userId');
  res.json(txs);
});

module.exports = router;
