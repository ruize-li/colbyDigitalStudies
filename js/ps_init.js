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

let items = [
    {
        src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
        w: 964,
        h: 1024
    },
    {
        src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
        w: 1024,
        h: 683
    }
];



let sdmh_album_thumbnail = document.getElementById('shmh_btn_id_0')
console.log(sdmh_album_thumbnail)
sdmh_album_thumbnail.addEventListener('click', function(){
    openPhotoSwipe(items);
});