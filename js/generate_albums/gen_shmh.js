/**
 * Automatically generate album overviews for SHMH
 * Author: Ruize Li
 * Used for Colby East Asian Department
 * Jun 5, 2021
 */


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
        $('#album-overview').append(`<div class="col">
        <div class="card shadow-sm">
           <img src=${data[i].imgpath} class="img-fluid">
           <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>
              <p class="card-text">${data[i].description}</p>
              <div class="d-flex justify-content-between align-items-center">
                 <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" id = ${data[i].btn_id}_view_set>View Set</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" id = ${data[i].btn_id}_view_pdf>View PDF</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" id = ${data[i].btn_id}_view_book>View Book</button>
                 </div>
                 <small class="text-muted">9 mins</small>
              </div>
           </div>
        </div>
     </div>`);
        
    }
    
}


// run the script
buildPage();


