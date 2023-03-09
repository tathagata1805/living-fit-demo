<template>
  <div class="megamenu-wrap d-flex flex-wrap">
    <div class="column w-20">
      <p>Buy With Prime</p>
      <div class="prime-link-holder">
        <nuxt-link to="/">
          <img src="/images/prime-badge.png" alt="Badge" />
        </nuxt-link>
      </div>
    </div>

    <div
      v-for="k in allKeys"
      :key="k"
      :class="
        'column w-' + Math.ceil(((actualData[k].length / 5) * 20) / 20) * 20
      "
    >
      <p>{{ k }}</p>
      <div
        v-if="Math.ceil(((actualData[k].length / 5) * 20) / 20) * 20 == 60"
        class="d-flex flex-wrap strength-row"
      >
        <ul v-for="(chunk, index) in dataChunks(actualData[k], 5)" :key="index">
          <li v-for="v in chunk" :key="v">
            <a href="#">{{ v }}</a>
          </li>
        </ul>
      </div>
      <div v-else>
        <ul v-for="(chunk, index) in dataChunks(actualData[k], 5)" :key="index">
          <li v-for="v in chunk" :key="v">
            <a href="#">{{ v }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="column w-20">
      <div class="image-holder">
        <img src="/images/logo-badge.png" alt="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MegaMenu",

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
  computed: {
    dataChunks() {
      return (array, size) =>
        Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
          array.slice(i * size, i * size + size)
        );
    },
  },
};
</script>

<style scoped>
.megamenu-wrap {
  background: #fff;
  padding: 25px 15px 10px 15px;
  margin: 0 -15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}
.megamenu-wrap .column {
  padding: 0 15px;
  margin-bottom: 20px;
}
.megamenu-wrap .column:nth-child(1),
.megamenu-wrap .column:nth-child(2),
.megamenu-wrap .column:nth-child(3) {
  margin-bottom: 40px;
}
.megamenu-wrap .column.w-15 {
  width: 15%;
}
.megamenu-wrap .column.w-20 {
  width: 20%;
}
.megamenu-wrap .column.w-60 {
  width: 60%;
}
.megamenu-wrap .column p {
  font-size: 18px;
  color: #162535;
  font-weight: 700;
  border-bottom: 2px solid #000;
  line-height: 38px;
  margin-bottom: 30px;
}
.prime-link-holder a {
  display: inline-block;
}
.prime-link-holder a img {
  width: auto;
  max-width: 100%;
}
.megamenu-wrap .column .strength-row {
  margin: 0 -15px;
}
.megamenu-wrap .column .strength-row ul {
  width: calc(100% / 3);
  padding: 0 15px;
}
.megamenu-wrap .column ul li:not(:last-child) {
  margin-bottom: 13px;
}
.megamenu-wrap .column ul li a {
  color: #000;
  font-size: 16px;
}
.megamenu-wrap .column .image-holder img {
  max-width: 70%;
}
</style>
