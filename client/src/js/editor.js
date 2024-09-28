// Import methods to save and get data from the indexedDB database in './database.js'
import { getDb, putDb } from './database';
import { header } from './header';

export default class {
  constructor() {
    const localData = localStorage.getItem('content');

    // Check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // Load data from IndexedDB and set editor value
    getDb()
      .then((data) => {
        console.info('Loaded data from IndexedDB, injecting into editor');
        this.editor.setValue(data || localData || header);
      })
      .catch((error) => {
        console.error('Failed to load data:', error);
        this.editor.setValue(localData || header);
      });


      // UPDATE localStorage on change
    this.editor.on('change', () => {
      localStorage.setItem('content', this.editor.getValue());
    });

    // Save content to IndexedDB when the editor loses focus
    this.editor.on('blur', () => {
      console.log('The editor has lost focus');
      putDb(localStorage.getItem('content'));
    });
  }
}
