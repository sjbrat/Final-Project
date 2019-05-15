$(function() {
  $(".grid-item").click(function(){
    console.log('item click')
  })
  $(".container-grid").masonry({
    itemSelector: '.grid-item',
    columnWidth: 100
  });
})
  //   console.log( "ready!" );
  //
  //
  // $( "#bio-grid-item" ).hide();
  //   console.log('hide me')
