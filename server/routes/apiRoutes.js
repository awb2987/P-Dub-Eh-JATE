const express = require('express');
const router = express.Router();
const { addNote, getNotes, updateNote, deleteNote } = require('../config/db.js');

// Route to ADD a new note
router.post('/api/notes', async (req, res) => {
  try {
    const newNote = req.body;
    await addNote(newNote);
    res.status(201).json(newNote); // Respond with the created note
  } catch (error) {
    res.status(500).json({ error: 'Failed to save note' });
  }
});

// Route to GET all notes
router.get('/api/notes', async (req, res) => {
  try {
    const notes = await getNotes();
    res.status(200).json(notes); // Respond with list of notes
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve notes' });
  }
});

// Route to UPDATE a note
router.put('/api/notes/:id', async (req, res) => {
  try {
    const updatedNote = req.body;
    updatedNote.id = parseInt(req.params.id);
    await updateNote(updatedNote);
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update note' });
  }
});

// Route to DELETE a note
router.delete('/api/notes/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await deleteNote(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete note' });
  }
});

// Use export default for the router
module.exports = router;
