/**
 * Automatically generate album overviews for SHMH
 * Author: Ruize Li
 * Used for Colby East Asian Department
 * Jun 5, 2021
 */

// dependencies:
//      file system
// var fs = require("fs");
// var path = require("path");
/**
 * 
 * Reading all files from dir
 */
// function readFiles(dirname, onFileContent, onError) {
//     fs.readdir(dirname, function(err, filenames) {
//       if (err) {
//         // console.log("error!");
//         onError(err);
//         return;
//       }
//       filenames.forEach(function(filename) {
//         fs.readFile(dirname + filename,  (err, content) => {
//           if (err) {
//             onError(err);
//             return;
//           }
//           console.log("read the file");
//           onFileContent(filename.slice(0,3), filename);
//         });
//       });
//     });
// }

// /**
//  * Storing data
//  */
// var data = {};
// readFiles('../../database/galleries/shmh/thumbnails/', function(filename, content) {
//     console.log("got it");
//   data[filename] = content;
// }, function(err) {
//     console.log("error");
//   throw err;
// });


// fs.writeFile ("input.json", JSON.stringify(data), function(err) {
//     if (err) throw err;
//     console.log('complete');
//     }
// );



/**
 * Hard code to generate data for the moment
 * @todo: create json file to store information of each one
 * Last Updated: Jul 5, 2021
 */
let data = {};

for (let i = 0; i < 3; i++) {
    data[i] = {
        imgpath : `/database/galleries/shmh/thumbnails/00${i}-thumbnail.jpg`,
        description : `Description for No.${i}`,
        title : `title for No.${i}`,
        btn_id : `shmh_btn_id_${i}`
    };
};


/**
 * Iterates through the directory, fetch the thumbnail for each one
 * Builds the element and append it to the HTML
 * A helper function that counts the size of obj
 */

Object.size = function(obj) {
var size = 0,
    key;
for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
}
return size;
};
let buildPage = function() {
    for(let i = 0; i < Object.size(data); i++) {
        // let imgpath = element.imgpath;
        $('#album-overview').append(`<div class="col"><div class="card shadow-sm"><img src=${data[i].imgpath} class="img-fluid"><div class="card-body"><h5 class="card-title">${data[i].title}</h5><p class="card-text">${data[i].description}</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" class="btn btn-sm btn-outline-secondary" id = ${data[i].btn_id}>View Set</button></div><small class="text-muted">9 mins</small></div></div></div></div>`);
        
    }
    
}


// run the script
buildPage();


