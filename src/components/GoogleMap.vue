<template>
  <div class="map"></div>
</template>

<script>
/* global google */
export default {
  name: 'GoogleMap',
  props: ['center', 'places'],
  mounted() {
    this.map = new google.maps.Map(this.$el, {
      center: this.center || { lat: 51.515, lng: -0.078 },
      zoom: 6,
      styles: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffaa00"
            },
            {
                "saturation": "-33"
            },
            {
                "lightness": "10"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fe8f00"
            },
            {
                "weight": "1.59"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
]
    });
    this.infoWindow = new google.maps.InfoWindow();
  },
  watch: {
    places() {
      this.bounds = new google.maps.LatLngBounds();
      this.markers = this.places.map(place => {
        this.bounds.extend(place.location);
        const marker = new google.maps.Marker({
          position: place.location,
          map: this.map
        });
        marker.addListener('click', () => {
          this.infoWindow.setContent(`
            <a href="/#/places/${place._id}">
            <img src=${place.image} class="icon" />
              <h3>${place.name}</h3>
              <p>${place.address}</p>
              <p>Featured in: ${place.book}</p>
            </a>
          `);
          this.infoWindow.open(this.map, marker);
        });
      });
      this.map.panTo(this.bounds.getCenter());
    },
    center() {
      this.map.setCenter(this.center);
      this.marker = new google.maps.Marker({
        position: this.center,
        map: this.map,
        label: '🤓'
      });
    }
  }
};
</script>
