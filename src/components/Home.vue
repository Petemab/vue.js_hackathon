<template>
  <section class="section homeSection">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <div class="homeWords has-text-centered">
            <h1 class="titleHome">Britain By The Book</h1>
            <hr/>
            <h2 class="subtitleHome">Explore the UK, city by city and page by page</h2>
            <p class="homeP">Click on Charles Dickens to begin</p>
            <hr/>
          </div>
            <router-link tag="div" to="/places" class="homePic"></router-link>
              <p class='credit'>Created by Pete Bennett and Stephanie Ye</p>
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
