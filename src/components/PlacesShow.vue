


// html goes here
<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-2">{{ place.name }}</h1>
      <h2 class="subtitle is-5">{{ venue.address }}</h2>
      <div class="columns">
        <div class="column">
          <img v-bind:src="place.image" v-bind:alt="place.name" />
          <div class="content">
            <p>{{ place.description }}</p>
          </div>
        </div>
        <div class="column">
          <google-map v-bind:center="place.location" />
        </div>
      </div>
        <router-link v-bind:to="editLink" class="button is-info" >Edit</router-link>
        <button v-on:click="handleDelete" class="button is-danger">Delete</button>
    </div>
  </section>
</template>


<script>
import axios from 'axios';
import GoogleMap from './GoogleMap';
export default {
  name: 'PlacesShow',
  data() {
    return {
      place: {}
    };
  },
  computed: {
    editLink() {
      return `/places/${this.$route.params.id}/edit`;
    }
  },
  mounted() {
    axios
      .get(`/api/places/${this.$route.params.id}`)
      .then(res => this.venue = res.data);
  },
  methods: {
    handleDelete() {
      axios
        .delete(`/api/places/${this.$route.params.id}`)
        .then(() => this.$router.push('/places'));
    }
  },
  components: {
    GoogleMap
  }
};
</script>
