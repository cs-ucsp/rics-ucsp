function showMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-16.3893096,-71.5355712),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapa = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marcador = new google.maps.Marker({
	    position: new google.maps.LatLng(-16.389150, -71.534852),
	    map: mapa,
	  });
    var contentString = "<div style='width:150px; height:20px; color:#D6A00B; text-align:center; font-weight:bold; font-size:1em;'>Casa de investigación</div>";
    var infowindow = new google.maps.InfoWindow({content:contentString});
    infowindow.open(mapa, marcador);
};

google.maps.event.addDomListener(window, 'load', showMap);


