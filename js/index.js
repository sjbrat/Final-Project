$(function () {
  $('.grid-item').click(function () {
    console.log('item click')
  })
  $('.container-grid').masonry({
    itemSelector: '.grid-item',
    // columnWidth: 10,
    // margin: 10,
    fitWidth: true
  })
})
