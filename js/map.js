function showMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-16.3952829, -71.5367908),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapa = new google.maps.Map(document.getElementById("map"), mapOptions);
 
    var marcador = new google.maps.Marker({
	    position: new google.maps.LatLng(-16.3897524, -71.53567320000002),
	    map: mapa,
	  });
    var contentString = "<div style='width:120px; height:20px; color:#D6A00B; text-align:center; font-weight:bold; font-size:1em;'>Casa de investigación</div>";
    var infowindow = new google.maps.InfoWindow({content:contentString});
	infowindow.open(mapa, marcador);
}

showMap();
