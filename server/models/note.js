class Note {
  constructor(title, content) {
    this.title = title;        // Title of the note
    this.content = content;    // Content of the note
    this.id = null;            // Will be set when saved in the database
  }
}
  
export default Note;
  