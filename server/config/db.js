const { openDB } = require('idb');

// Function to initialize the IndexedDB
const initDB = async () => {
  const db = await openDB('TextEditorDB', 1, {
    upgrade(db) {
      // CREATE an object store if it does not already exist
      if (!db.objectStoreNames.contains('notes')) {
        db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
  return db;
};

// Function to ADD a new note
const addNote = async (note) => {
  const db = await initDB();
  await db.add('notes', note);
};

// Function to get all notes
const getNotes = async () => {
  const db = await initDB();
  return await db.getAll('notes');
};

// Function to update a note
const updateNote = async (note) => {
  const db = await initDB();
  await db.put('notes', note);
};

// Function to DELETE a note
const deleteNote = async (id) => {
  const db = await initDB();
  await db.delete('notes', id);
};

// Export functions
module.exports = { addNote, getNotes, updateNote, deleteNote };
