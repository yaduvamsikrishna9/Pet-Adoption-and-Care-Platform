const express = require('express');
const Pet = require('../models/Pet');

const router = express.Router();

router.get('/', async (req, res) => {
    const pets = await Pet.find();
    res.json(pets);
});

router.post('/', async (req, res) => {
    const pet = new Pet(req.body);
    await pet.save();
    res.status(201).json(pet);
});

router.put('/:id', async (req, res) => {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(pet);
});

router.delete('/:id', async (req, res) => {
    await Pet.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pet deleted' });
});

module.exports = router;
