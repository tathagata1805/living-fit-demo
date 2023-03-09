<template>
  <div class="accordion" role="tablist">
    <div header-tag="header" class="parent-category" role="tab">
      <a block v-b-toggle.accordion-1 variant="info">Buy With Prime</a>
    </div>
    <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
      <div class="prime-link-holder">
        <nuxt-link to="/">
          <img src="/images/prime-badge.png" alt="Badge" />
        </nuxt-link>
      </div>
    </b-collapse>
    <div v-for="k in allKeys" :key="k">
      <div header-tag="header" class="parent-category" role="tab">
        <a
          block
          v-b-toggle="`accordion-${k.replace(/\s+/g, '%20')}`"
          variant="info"
          >{{ k }}</a
        >
      </div>
      <b-collapse
        :id="'accordion-' + k.replace(/\s+/g, '%20')"
        accordion="my-accordion"
        role="tabpanel"
      >
        <ul class="sub-category">
          <li v-for="v in actualData[k]" :key="v">
            <a href="#">{{ v }}</a>
          </li>
        </ul>
      </b-collapse>
    </div>
  </div>
</template>
<script>
export default {
  name: "MobileMegamenu",
  data() {
    return {
      backdrop: true,
      actualData: [],
      allKeys: [],
      mobileViewData: [],
    };
  },

  methods: {
    bro() {
      console.log(this.mobileViewData);
    },
  },

  mounted() {
    const file = require("~/static/data/header");
    this.actualData = file;
    this.allKeys = Object.keys(file);

    this.allKeys.forEach((element) => {
      this.mobileViewData.push(this.actualData[element]);
    });
  },
};
</script>
<style scoped>
.prime-link-holder a {
  display: inline-block;
  padding: 15px;
}
.prime-link-holder a img {
  width: auto;
  max-width: 100%;
}
</style>
