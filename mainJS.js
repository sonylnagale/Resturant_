var map;
      function initMap() {
        map = new google.maps.Map(document.getElementsById('map'), {
          center: {lat: -40.8054491, lng: -73.9654415},
          zoom: 8
        });
      }
