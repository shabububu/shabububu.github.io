var colors = ["#02b3e4", "#2d3c49", "#7d97ad"];

function displayPalette() {
  console.log( "Displaying colors: " + colors );

  const palette = $('#color-palette');

  for (var i = 0; i < colors.length; i++) {
    color = colors[i];
    //square = '<div class="row-2 square">';
    square = jQuery('<div/>', {class: 'row-2 square', 
			       css: {"background-color": color}});
    palette.append(square);
    palette.append('</div><div class="row-2 color-description">'+color+'</div>');
  }
}

$( document ).ready(function() {
  displayPalette();
});
