<script type="text/javascript"><!--  
    var map;  
    var gdir;  
    var geocoder = null;  
    var addressMarker;  
    function load() {  
      if (GBrowserIsCompatible()) {        
        map = new GMap2(document.getElementById("google_map"));  
        map.setMapType(G_HYBRID_MAP);  
        // Centramos el mapa en las coordenadas con zoom 15  
        map.setCenter(new GLatLng(40.396764, -3.713379), 15);  
        // Creamos el punto.  
        var point = new GLatLng(40.396764, -3.713379);  
        // Pintamos el punto  
        map.addOverlay(new GMarker(point));  
        // Controles que se van a ver en el mapa  
        map.addControl(new GLargeMapControl());  
        var mapControl = new GMapTypeControl();  
        map.addControl(mapControl);  
        // Asociamos el div 'direcciones' a las direcciones que devolveremos a Google  
        gdir = new GDirections(map, document.getElementById("direcciones"));  
        // Para recoger los errores si los hubiera  
        GEvent.addListener(gdir, "error", handleErrors);  
      }  
    }  
    // Esta función calcula la ruta con el API de Google Maps  
    function setDirections(Address) {  
      gdir.load("from: " + Address + " to: @40.396764, -3.713379",  
                { "locale": "es" });  
      //Con la opción locale:es hace que la ruta la escriba en castellano.  
    }  
    // Se han producido errores  
    function handleErrors(){  
       if (gdir.getStatus().code == G_GEO_UNKNOWN_ADDRESS)  
         alert("Direccion desconocida");  
       else if (gdir.getStatus().code == G_GEO_SERVER_ERROR)  
         alert("Error de Servidor");  
       else if (gdir.getStatus().code == G_GEO_MISSING_QUERY)  
         alert("Falta la direccion inicial");  
       else if (gdir.getStatus().code == G_GEO_BAD_KEY)  
         alert("Clave de Google Maps incorrecta");  
       else if (gdir.getStatus().code == G_GEO_BAD_REQUEST)  
         alert("No se ha encontrado la direccion de llegada");  
       else alert("Error desconocido");  
    }  
    function onGDirectionsLoad(){   
    }  
// --></script> 