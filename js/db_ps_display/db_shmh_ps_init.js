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
        closeOnScroll : false
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};




/**
 * Configurations
 */


for (let i = 0; i < 3; i++) {
    // let issueNum = 0;
    let imgpath = `../../../database/galleries/shmh/No.${i}/`;
    let numItems = [4, 8, 8]
    let resrc = [];
    for (let j = 0; j < numItems[i]; j++) {
        resrc.push({
            src : imgpath + `00${j+1}.jpg`,
            w : 924,
            h : 1024
        })
    }
    
    
    
    
    // initiate function
    let sdmh_album_thumbnail = document.getElementById("shmh_btn_id_" + i)
    console.log(sdmh_album_thumbnail)
    sdmh_album_thumbnail.addEventListener('click', function(){
        openPhotoSwipe(resrc);
    });
}