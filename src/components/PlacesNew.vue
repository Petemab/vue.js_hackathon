<template>
  <section class="section">
    <div class="container">
      <form v-on:submit.prevent="handleSubmit()">
        <div class="field">
          <label class="label">Book</label>
          <div class="control">
            <input class="input" type="text" name="book" placeholder="book title" v-model="place.book">
          </div>
        </div>
        <div class="field">
          <label class="label">Address</label>
          <div class="control">
            <Autocomplete name="address" v-bind:handle-place-change="handlePlaceChange"/>
          </div>
        </div>
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Autocomplete from './Autocomplete';
export default {
  name: 'PlacesNew',
  data() {
    return {
      place : {}
    };
  },
  methods: {
    handleSubmit() {
      axios
        .post('/api/places', this.place)
        .then(() => this.$router.push('/places'));
    },
    handlePlaceChange({ name: name, formatted_address: address, geometry: { location }, photos: image }) {
      this.place.name = name;
      this.place.address = address;
      this.place.location = location.toJSON();
      this.place.image = image[0].getUrl({'maxWidth': 1000, 'maxHeight': 1000})
      console.log(image[0].getUrl({'maxWidth': 1000, 'maxHeight': 1000}))
    }
  },
  components: {
    Autocomplete
  }
};
</script>


<style>
</style>
