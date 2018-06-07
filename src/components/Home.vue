<template>
  <section class="section homeSection">
    <div class="container">
      <div class="columns">
        <div class="column is-half">
          <div class="homeWords has-text-centered">
            <h1 class="titleHome">Britain By The Book</h1>
            <hr/>
            <h2 class="subtitleHome">Explore the UK city by city and page by page</h2>
            <p class="homeP">Click on Oliver Twist below to begin</p>
            <hr/>
          </div>
          <div class="columns">
            <div class="column is-one-third">
            </div>
            <router-link tag="div" to="/places" class="twistPic column is-one-third">
            </router-link>>
            <div class="column is-one-third">
            </div>
          </div>

        </div>
        <div class="column is-half">
          <div class="homePic">

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style>

</style>
