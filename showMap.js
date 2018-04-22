
function showMap() {

    // Check to see if the browser supports the GeoLocation API.
    if (navigator.geolocation) {

    } else {
        // Print out a message to the user.
        alert('Your browser does not support GeoLocation');
    }

    //user position
    var userLat;
    var userLon;

    //Bikes position
    //hardcoded, but will be changed later
    var bikeLat = 52.359094;
    var bikeLon = 4.908010;

    // Get the location
    navigator.geolocation.getCurrentPosition(function(position) {
        //user position
        userLat = position.coords.latitude;
        userLon = position.coords.longitude;
    });



        // Create a LatLng object with the GPS coordinates.
        var bikeLatLng = new google.maps.LatLng(bikeLat, bikeLon);
        var userLatLng = new google.maps.LatLng(userLat, userLon);

        // Create the Map Options
        var mapOptions = {
            zoom: 15,
            center: bikeLatLng,
            styles: getMapStyle()
        };

        // Generate the Map
        var map = new google.maps.Map(document.getElementById('content'), mapOptions);

        // Add a Marker to the Map
        var markerBike = new google.maps.Marker({
            position: userLatLng,
            map: map,
            title: 'Found you!'
        });

        // Add a Marker to the Map
        var markerUser = new google.maps.Marker({
            position: bikeLatLng,
            map: map,
            title: 'Found you!'
        });
    }

