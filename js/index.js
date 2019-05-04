$(document).ready(function() {
    console.log( "ready!" );



    // external js: masonry.pkgd.js, imagesloaded.pkgd.js
var images = [
  '<div class="grid-item"><img src="images/1963_bombing.jpg" /></div>',
  '<div class="grid-item"><img src="images/abner_louima.jpg" /></div>',
  '<div class="grid-item"><img src="images/akai_kareem_gurley.jpg" /></div>',
  '<div class="grid-item"><img src="images/alton_sterling.jpg" /></div>',
  '<div class="grid-item"><img src="images/amadou_diallo.jpg" /></div>',
  '<div class="grid-item"><img src="images/charleston_church_masacre.jpg" /></div>',
  '<div class="grid-item"><img src="images/christian_taylor.jpg" /></div>',
  '<div class="grid-item"><img src="images/cp5.jpg" /></div>',
  '<div class="grid-item"><img src="images/danye_jones.jpg" /></div>',
  '<div class="grid-item"><img src="images/emmett_till.jpg" /></div>',
  '<div class="grid-item"><img src="images/eric_garner.jpg" /></div>',
  '<div class="grid-item"><img src="images/freddie_gray.jpg" /></div>',
  '<div class="grid-item"><img src="images/james_byrdJr.jpg" /></div>',
  '<div class="grid-item"><img src="images/jordan_edwards.jpg" /></div>',
  '<div class="grid-item"><img src="images/keith_lamont_scott.jpg" /></div>',
  '<div class="grid-item"><img src="images/kendrick_johnson.jpg" /></div>',
  '<div class="grid-item"><img src="images/korryn_gaines.jpg" /></div>',
  '<div class="grid-item"><img src="images/laquan_mcdonald.jpg" /></div>',
  '<div class="grid-item"><img src="images/michael_brown.jpg" /></div>',
  '<div class="grid-item"><img src="images/omar_edwards.jpg" /></div>',
  '<div class="grid-item"><img src="images/paul_oneal.jpg" /></div>',
  '<div class="grid-item"><img src="images/philando_castile.jpg" /></div>',
  '<div class="grid-item"><img src="images/sam_dubose.jpg" /></div>',
  '<div class="grid-item"><img src="images/sandra_bland.jpg" /></div>',
  '<div class="grid-item"><img src="images/sean_bell.jpg" /></div>',
  '<div class="grid-item"><img src="images/tamir_rice.jpg" /></div>',
  '<div class="grid-item"><img src="images/terence_crutcher.jpg" /></div>',
  '<div class="grid-item"><img src="images/trayvon_martin.jpeg" /></div>',
  '<div class="grid-item"><img src="images/tyrique_hudson.jpg" /></div>',
  '<div class="grid-item"><img src="images/walter_l_scott.jpg" /></div>',
  '<div class="grid-item"><img src="images/charles_kinsey.png" /></div>',
  '<div class="grid-item"><img src="images/botham_jean.jpg" /></div>',];
// init Masonry after all images have loaded

 $.each(images, function(i, image)
				{ console.log(image);
 				$('.grid').append(image);
});
var $grid = $('.grid').imagesLoaded( function() {
  $grid.masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
});
});
