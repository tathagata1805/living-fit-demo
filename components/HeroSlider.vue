<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="img in images"
        :key="img"
        :img-src="img"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {
  name: "HeroSlider",
  data() {
    return {
      slide: 0,
      sliding: null,
      images: [],
    };
  },

  mounted() {
    const file = require("~/static/data/images");
    var allKeys = Object.keys(file);

    allKeys.forEach((element) => {
      this.images.push(file[element]);
    });
  },
};
</script>
<style></style>
