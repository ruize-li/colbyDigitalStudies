// dependencies:
let fs = require("fs");
let path = require("path");


/**
 * @param:{top_level_path}
 * Start from parent path, go through sub folders, and return an json object containing all file names
 * 
 */

const top_path = 'database/galleries';
const data = {}

let folder_names = fs.readdirSync(top_path);
// console.log(folder_names);
folder_names.forEach( function(folder) {
  
    let folder_path = top_path + "/" + folder + "/content";
    console.log(folder_path);
    let f_names = fs.readdirSync(folder_path);
    // remove .DS_Store
    f_names.shift();
    // 'shmh' : {path : "..", folders = ["No.0", "No.1", ..]}
    // remove thumbnail folder and cover.jpg
    data[folder] = {
      path : folder_path,
      folders : f_names
    }
});
// output JSON files
fs.writeFile("test.json", JSON.stringify(data), function(err, result) {
  if (err) console.log('error', err);
});
