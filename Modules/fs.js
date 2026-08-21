// Read, Write and Append code can be found in links in Readme.md file

// Delete a file
const fs = require("fs");

fs.unlink("abc.txt", (err) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }

  console.log("File deleted");
});

// Promise version
const fs = require("fs/promises");

async function deleteFile() {
  try {
    await fs.unlink("abc.txt");
    console.log("File deleted");
  } catch (err) {
    console.log(err.message);
  }
}

deleteFile();

// Delete an empty folder — fs.rmdir()
const fs = require("fs");

fs.rmdir("temp", (err) => {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log("Folder deleted");
});

// Delete a folder and everything inside it — fs.rm()
const fs = require("fs");

fs.rm("temp", { recursive: true, force: true }, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log("Folder deleted");
});

// recursive: true means:
// Delete the directory and recursively delete everything inside it.
// What does force: true mean?
// If the path does not exist, Node won't complain with an ENOENT error.

// Modern Promise version
const fs = require("fs/promises");

async function removeFolder() {
  try {
    await fs.rm("temp", {
      recursive: true,
      force: true
    });

    console.log("Folder deleted");
  } catch (err) {
    console.log(err.message);
  }
}

removeFolder();

// Changing file permissions — fs.chmod()
const fs = require("fs");

fs.chmod("script.sh", 0o755, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log("Permissions changed");
});
// 0o755 is an octal number for permissions, refer screenshot in Readme.md
