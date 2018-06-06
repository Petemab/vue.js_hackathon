<template>
  <section class="section">
    <div class="container">
      <form v-on:submit.prevent="handleSubmit()">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" name="name" placeholder="Text name" v-model="place.name">
          </div>
        </div>
        <div class="field">
          <label class="label">Address</label>
          <div class="control">
            <Autocomplete name="address" v-bind:handle-place-change="handlePlaceChange"/>
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <input class="input" type="text" name="description" placeholder="Text description" v-model="place.description">
          </div>
        </div>
        <div class="field">
          <label class="label">Image</label>
          <div class="control">
            <input class="input" type="text" name="image" placeholder="Text image" v-model="place.image">
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
    handlePlaceChange({ formatted_address: address, geometry: { location } }) {
      this.place.address = address;
      this.place.location = location.toJSON();
    }
  },
  components: {
    Autocomplete
  }
};
</script>
<style>
</style>
