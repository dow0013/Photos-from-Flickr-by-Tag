// This is the file that loads the pictures


function flickrload(){

var tag = "tag";
function getURLParameter(tag) {
    return decodeURI(
        (RegExp(tag + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
    
}

  var APIfeed = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( APIfeed, {
    tags: getURLParameter(tag),
    format: "json"
  })
  .done(function( data ) {
    $.each( data.items, function( i, item ) {
    var title = item.title;
    var image = item.media.m;
    var link = item.link;
    var description = item.description;
    $( '<div/>' ).attr("class", "photo").html('<a href="' + link + '" >' + '<img src="' + image + '" /></a>' + '<div class="info"><h1>' + title + '</h1>' + '</div>').appendTo( ".photo-set" );

    });
  });



};


  
