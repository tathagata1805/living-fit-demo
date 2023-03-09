<template>
  <div>
    <section class="hero-section">
      <HeroSlider />
    </section>
    <section class="product-slider">
      <div class="container">
        <div class="section-header">
          <h3>Product Slider</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="owl-carousel" id="product-slider">
          <div class="item"><img src="/images/Attachment-1-(1).png" /></div>
          <div class="item"><img src="/images/Attachment-1.png" /></div>
          <div class="item">
            <img src="/images/circle-sadie-sticker-copy.png" />
          </div>
          <div class="item"><img src="/images/Girl-Front.png" /></div>
          <div class="item"><img src="/images/SC-Notebook.png" /></div>
          <div class="item">
            <img src="/images/Share-tote-bag-pink-copy.png" />
          </div>
          <div class="item">
            <img src="/images/singers-black-t-blank-strong-girls-1.png" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.hero-section {
  padding: 0;
}
.hero-section .left-part {
  width: 100%;
  max-width: 58%;
}
.hero-section .left-part img {
  max-width: 100%;
}
.hero-section .right-part {
  width: 100%;
  max-width: 42%;
  background: #466cce;
}
#product-slider .owl-nav {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
}
#product-slider .owl-nav button {
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background: #466cce;
  color: #fff;
  border-radius: 100%;
  padding: 0;
  line-height: 30px;
  font-size: 18px;
}
#product-slider .owl-nav button.owl-next {
  left: auto;
  right: 0;
}
#product-slider .owl-nav button span {
  display: inline-block;
  line-height: 1;
}
</style>
