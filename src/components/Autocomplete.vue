<template>
  <div class="field">
    <input ref="autocomplete" class="input" placeholder="place name" />
  </div>
</template>

<script>
export default {
  name: 'Autocomplete',
  props: ['handlePlaceChange'],
  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      { types: ['geocode'], componentRestrictions: {country: "uk"} }
    );
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace();

      this.handlePlaceChange(place);
    });
  }
};
</script>

<style>
</style>
