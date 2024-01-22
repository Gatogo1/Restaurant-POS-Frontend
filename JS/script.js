function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
  }
  
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
  }

    // isotope filter
    var $grid = $(".menu").isotope({
      itemSelector : '.menu-items',
      layoutMode : 'fitRows'
  });

  // filter items on button click
  $(".button-group").on("click", "button", function(){
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue});
  })

  // use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope({ filter: filterValue});
}) );

