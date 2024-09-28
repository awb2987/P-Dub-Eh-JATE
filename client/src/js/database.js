import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// ADD content to the database
export const putDb = async (content) => {
  try {
    const db = await openDB('jate', 1);
    const tx = db.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');

    // ADD the content to the store
    const result = await store.put({ content });
    console.log('Data saved to the database:', result);
  } catch (error) {
    console.error('Error saving data to the database:', error);
  }
};

// GET all content from the database
export const getDb = async () => {
  try {
    const db = await openDB('jate', 1);
    const tx = db.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');

    // RETRIEVE all records from the store
    const allContent = await store.getAll();
    console.log('Data retrieved from the database:', allContent);
    return allContent;
  } catch (error) {
    console.error('Error retrieving data from the database:', error);
  }
};

initdb();
