<template>
  <div>
    <google-map v-bind:places="places" />
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
