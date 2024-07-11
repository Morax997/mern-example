const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');
router.get('/test', (req, res) => res.send('book route testing'));

router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({nobooksfound: 'No Books Found'}));
});

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({nobookfoumd: 'No Book Found'}));
});

router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({msg: 'Book Added Successfully'}))
        .catch(err => res.status(400).json({error: 'Unable To Add This Book'}));
});

router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({msg: 'Updated Successfully'}))
        .catch(err => res.status(400).json({error: 'Unable To Update The Database'}));
});

router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(book => res.json({mgs: 'Book Entry Deleted Successfully'}))
        .catch(err => res.status(404).json({error: 'No Such A Book'}));
});

module.exports = router;