
<template>
  <section class="section">
    <div class="container">
      <google-map v-bind:center="place.location" />

      <div class="columns show-box">
        <div class="column">
          <h1 class="title is-2">{{ place.name }}</h1>
          <h2 class="subtitle is-5">{{ place.address }}</h2>

          <div class="content">
            <p>{{ this.description }}</p>

          </div>
        </div>
        <div class="column">

          <img class='imageshow' v-bind:src="place.image" v-bind:alt="place.name" />

        </div>

      </div>
      <div class='literary'>
        <h3 class="booky title is-3">{{place.book}}</h3>
        <p class='byline'></p>
            <div class = 'synopsis'><p>{{ this.synopsis }}</p></div>
          <div class='extracted'></div>
        </div>
        <!-- <router-link v-bind:to="editLink" class="button is-info" >Edit</router-link> -->
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
      place: {},
      extract: {},
      synopsis: {},
      description: {}
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
      .then(res => {
        this.place = res.data;
        var name = this.place.name;
        var book = this.place.book;
        this.handleDescription(name);
        this.handleExtract(book);
        this.handleSynopsis(book);
      }
      )
  },
  methods: {
    handleDelete() {
      axios
        .delete(`/api/places/${this.$route.params.id}`)
        .then(() => this.$router.push('/places'));
    },

    handleDescription(name) {
      axios
      .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${name.toLowerCase()}`)
      .then(res => {
        // console.log(res.data.extract);
        this.description = res.data.extract;
      });
    },



    handleExtract(book) {
      axios
      .get(`http://extracts.panmacmillan.com/getextracts?titlecontains=${book.toLowerCase()}`)
      .then(res => {
        this.extract = res.data;
        // console.log(this.extract.Extracts[0].extractHtml);
        document.getElementsByClassName('extracted')[0].innerHTML = this.extract.Extracts[0].extractHtml;
        document.getElementsByClassName('byline')[0].innerHTML = `by ${this.extract.Extracts[0].author}`;
      })
      .catch((err) => console.log(err));
    },

    handleSynopsis(book) {
      axios
      .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${book.toLowerCase()}`)
      .then(res => {
        // console.log(res.data.extract);
        this.synopsis = res.data.extract;
      });
    }


  },
  components: {
    GoogleMap
  }
};
</script>

<style scoped>
.map {
  height: 250px;
  margin-bottom: 50px;
}
</style>
