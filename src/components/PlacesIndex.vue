<template>
  <div>
    <google-map v-bind:places="places" />
    <img class='whale' src='http://www.angelfire.com/home/lake/images/4whale3d.gif' />
    <div class="bird-container bird-container--one">
		<div class="bird bird--one"></div>
  	</div>

  	<div class="bird-container bird-container--two">
  		<div class="bird bird--two"></div>
  	</div>

  	<div class="bird-container bird-container--three">
  		<div class="bird bird--three"></div>
  	</div>

  	<div class="bird-container bird-container--four">
  		<div class="bird bird--four"></div>
  	</div>
  </div>
</template>

<script>
import axios from 'axios';
import GoogleMap from './GoogleMap';
export default {
  name: 'PlacesIndex',
  data() {
    return {
      places: []
    };
  },
  mounted() {
    axios.get('api/places')
      .then(res => this.places = res.data);
  },
  components: {
    GoogleMap
  }
};
</script>

<style scoped>
.map {
  height: calc(100vh - 52px);
}



</style>
