var colors = ["#02b3e4", "#2d3c49", "#7d97ad"];

var works = [{"work-title":"Asobibox", "work-url":"http://www.asobibox.com/", 
              "work-img-src":"./img/work/asobibox.png", "work-img-alt":"Asobibox"},
             {"work-title":"CCQL", "work-url":"https://github.com/dibbs-vdc/ccql/", 
              "work-img-src":"./img/work/ccql.png", "work-img-alt":"DIBBS VDC CCQL"},
             {"work-title":"Foobar", "work-url":"https://github.com/shabububu/foobar2016/", 
              "work-img-src":"./img/work/foobar.png", "work-img-alt":"Google Foobar Challenge"}];

function displayPalette() {
  const palette = $( '#color-palette' );
  for (var i = 0; i < colors.length; i++) {
    color = colors[i];
    square = $( '<div />', { class: 'row-2 square', 
			     css: { "background-color": color }});
    squareDesc = $( '<div />', { class: 'row-2 color-description',
                                 text: color });
    palette.append( square );
    palette.append( squareDesc );
  }
}

function displayFeaturedWork() {
  var worksList = $( '#works-list' );
  for (var i = 0; i < works.length; i++) {
    work = works[i];

    workImg = $( '<img />', { src: work["work-img-src"],
                              alt: work["work-img-alt"] });
    workTitle = $( '<h3 />', { class: "featured-site-title",
                               text: work["work-title"] });
    workLink = $( '<p />' ).append( $( '<a />', { href: work["work-url"],
                                                  text: work["work-url"] }));

    singleWork = $( '<div />', { class: 'featured-site' });
    singleWork.append( workImg ).append( workTitle ).append( workLink );
    colWrapper = $( '<div />', { class: 'col-md-4' });
    worksList.append( colWrapper.append( singleWork ));
  }
}

$( document ).ready(function() {
  displayPalette();
  displayFeaturedWork();
});
