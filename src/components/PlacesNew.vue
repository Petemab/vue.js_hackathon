<template>
  <section class="section">
    <div class="container">
      <div class='fail'><p>sorry, something went wrong with your submission... please try again!</p></div>
      <form v-on:submit.prevent="handleSubmit()">
        <div class="field">
          <label class="label">Book</label>
          <div class="control">
            <input class="input" type="text" name="book" placeholder="book title" v-model="place.book">
          </div>
        </div>
        <div class="field">
          <label class="label">Place</label>
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
        .then(() => this.$router.push('/places'))
        .catch(() => document.getElementsByClassName('fail')[0].style.display = 'block' );

    },
    handlePlaceChange({ name: name, formatted_address: address, geometry: { location }, photos: image }) {
      this.place.name = name;
      this.place.address = address;
      this.place.location = location.toJSON();
      if (image) {
      this.place.image = image[0].getUrl({'maxWidth': 1000, 'maxHeight': 1000})
    } else {
      this.place.image = 'https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2015/04/London-skyline_CS.jpg'
    }
      // console.log(image[0].getUrl({'maxWidth': 1000, 'maxHeight': 1000}))
    }
  },
  components: {
    Autocomplete
  }
};
</script>


<style>
</style>
