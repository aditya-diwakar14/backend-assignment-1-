// fileManager.js
// CRUD file operations using the fs module

const fs = require("fs");
const { log } = require("./modules/logger");

const filePath = "./test.txt";

// CREATE
log("Creating File...");
fs.writeFile(filePath, "Hello Node.js", (err) => {
  if (err) {
    log("Error creating file: " + err.message);
    return;
  }
  log("File Created");

  // READ
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      log("Error reading file: " + err.message);
      return;
    }
    log("Reading File");
    console.log(data);

    // UPDATE (append)
    fs.appendFile(filePath, "\nLearning FS Module", (err) => {
      if (err) {
        log("Error updating file: " + err.message);
        return;
      }
      log("File Updated");

      fs.readFile(filePath, "utf8", (err, updatedData) => {
        if (err) {
          log("Error reading updated file: " + err.message);
          return;
        }
        console.log(updatedData);

        // DELETE
        fs.unlink(filePath, (err) => {
          if (err) {
            log("Error deleting file: " + err.message);
            return;
          }
          log("File Deleted");
        });
      });
    });
  });
});
