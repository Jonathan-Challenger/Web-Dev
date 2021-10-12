const express = require('express')
const router = express.Router()
const Note = require('../../model/Note')

/**
 * @route POST api/notes
 * @desc Post new note
 * @access Public
 */

router.post('/',  (req, res) => {
    const {title, body, status} = req.body
    const newNote = new Note({
        title,
        body,
        status
    })
    newNote.save()
        .then(note => {
            return res.status(201).json({
                success: true,
                msg: 'New Note'
            });
        })
        .catch(err => console.log(err));
})

router.get('/', (req, res) => {
    res.send(req.body)
})


module.exports = router;