/**
 * Initialize a photo swipe instance and loads
 */
var openPhotoSwipe = function(items) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    
    
    // define options (if needed)
    var options = {
       // history & focus options are disabled on CodePen        
        history: false,
        focus: false,

        showAnimationDuration: 500,
        hideAnimationDuration: 500,
        bgOpacity : 0.7,
        closeOnScroll : false,
        maxSpreadZoom : 4
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};




/**
 * Configurations
 * generate each image and store them for display
 */
 var request = new XMLHttpRequest();
 request.open("GET", "../../../test.json", false);
 request.send(null)
 var my_JSON_object = JSON.parse(request.responseText);
//  console.log(my_JSON_object);

for (let i = 0; i < 3; i++) {
    // let issueNum = 0;
    let imgpath = `../../../database/galleries/shmh/content/No.${i}/`;
    let numItems = [4, 8, 8]
    let resrc = [];
    for (let j = 0; j < numItems[i]; j++) {
        resrc.push({
            src : imgpath + `00${j+1}.jpg`,
            w : 924,
            h : 1024,
            title : "test Caption" + j
        })
    }

    // get the VIEW_SET button
    let sdmh_album_view_set_btn = document.getElementById("shmh_btn_id_" + i + "_view_set");
    // console.log(sdmh_album_view_set_btn)
    sdmh_album_view_set_btn.addEventListener('click', function(){
        openPhotoSwipe(resrc);
    });

    // get the VIEW_PDF button
    let sdmh_album_view_pdf_btn = document.getElementById("shmh_btn_id_" + i + "_view_pdf");
    sdmh_album_view_pdf_btn.addEventListener('click', function() {
        console.log(`../../../database/galleries/shmh/content/No.${i}/No.${i}.pdf`);
        window.open(`../../../database/galleries/shmh/content/No.${i}/No.${i}.pdf`);
        // database/galleries/shmh/content/No.0/No.0.pdf
    });

    // get the VIEW_BOOK button
    // ON_CLICK: generate the book view page accordingly
    let sdmh_album_view_book_btn = document.getElementById("shmh_btn_id_" + i + "_view_book");
    sdmh_album_view_book_btn.addEventListener('click', function() {
        let new_page = window.open("../../js/turnjs4/samples/docs/index.html");
        
    });

}