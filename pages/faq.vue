<template>
  <section class="faq-page">
    <div class="container">
      <div class="page-heading">
        <h1>Buy with Prime FAQ</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
          laoreet velit. Nunc ac sagittis odio. Cras non tellus quis sapien
          accumsan vestibulum sit amet ut orci. Fusce sodales nisi a orci
          sagittis, non malesuada augue ultrices.
        </p>
      </div>
      <div class="accordion" role="tablist">
        <div
          class="accordion-item"
          v-for="(faq, index) in storeFaqs"
          :key="faq.id"
        >
          <div class="accordion-heading" header-tag="header" role="tab">
            <b-button block v-b-toggle="'Q-' + index"
              >Q: {{ faq.question }}</b-button
            >
          </div>
          <b-collapse
            :visible="index === 0"
            :id="`Q-${faq.id}`"
            accordion="my-accordion"
            role="tabpanel"
          >
            <p><strong>A:</strong> {{ faq.answer }}</p>
          </b-collapse>
        </div>
        <!-- <div class="accordion-item">
                    <div class="accordion-heading" header-tag="header" role="tab">
                        <b-button block v-b-toggle.Q-1>Q: What is Buy with Prime and how does it work?</b-button>
                    </div>
                    <b-collapse id="Q-1" visible accordion="my-accordion" role="tabpanel">
                        <p>
                            <strong>A:</strong> Buy with Prime allows millions of US-based Prime members to shop directly from participating online stores with the trusted experience you expect from Amazon—including fast, free delivery, an easy checkout experience, and returns on eligible orders. When you shop on Living.Fit, you'll see the Prime logo and delivery promise on eligible products, which signals the item is available for free delivery, as fast as next day, with free returns. By clicking the Buy with Prime button, you can check out by signing into your Amazon account, which prepopulates your payment and shipping details on the checkout page. You will receive an order confirmation email after placing your order and then a shipping confirmation email with a link for tracking when the order is shipped. If you aren't a Prime member, you can sign up and start your 30-day Prime free trial today.
                        </p>
                    </b-collapse>
                </div>
                <div class="accordion-item">
                    <div class="accordion-heading" header-tag="header" role="tab">
                        <b-button block v-b-toggle.Q-2>Q: How do I make a purchase using my Prime benefits on Living.Fit?</b-button>
                    </div>
                    <b-collapse id="Q-2" accordion="my-accordion" role="tabpanel">
                        <p>
                            <strong>A:</strong> When you decide to purchase a product using Buy with Prime on Living.Fit, you will be prompted to sign into your Amazon account. You can then complete your order using your preferred payment method stored in your Amazon account.
                        </p>
                    </b-collapse>
                </div>
                <div class="accordion-item">
                    <div class="accordion-heading" header-tag="header" role="tab">
                        <b-button block v-b-toggle.Q-3>Q: Is this really the same delivery experience I'm familiar with as a Prime member?</b-button>
                    </div>
                    <b-collapse id="Q-3" accordion="my-accordion" role="tabpanel">
                        <p>
                            <strong>A:</strong> Buy with Prime purchases offer the fast, free delivery and free returns on eligible products and a seamless checkout experience shoppers trust.
                        </p>
                    </b-collapse>
                </div>
                <div class="accordion-item">
                    <div class="accordion-heading" header-tag="header" role="tab">
                        <b-button block v-b-toggle.Q-4>Q: Where can I check the status of my order?</b-button>
                    </div>
                    <b-collapse id="Q-4" accordion="my-accordion" role="tabpanel">
                        <p>
                            <strong>A:</strong> You can check your order status by clicking on the link in your shipment confirmation email, which will bring you to your order details page on Living.Fit. For Buy with Prime purchases, you can't see or track orders on your Amazon.com orders page or in the Amazon mobile app.
                        </p>
                    </b-collapse>
                </div>
                <div class="accordion-item">
                    <div class="accordion-heading" header-tag="header" role="tab">
                        <b-button block v-b-toggle.Q-5>Q: Who do I contact for issues or questions for my order?</b-button>
                    </div>
                    <b-collapse id="Q-5" accordion="my-accordion" role="tabpanel">
                        <p>
                            <strong>A:</strong> If you either have a question or experience an issue with your Buy with Prime order, contact us at hello@living.fit.com. You'll receive an order confirmation email with a link to see your order status and how to contact Living.Fit.
                        </p>
                    </b-collapse>
                </div>
                <div class="accordion-item">
                    <div class="accordion-heading" header-tag="header" role="tab">
                        <b-button block v-b-toggle.Q-6>Q: Do I have to be a Prime member to use Buy with Prime?</b-button>
                    </div>
                    <b-collapse id="Q-6" accordion="my-accordion" role="tabpanel">
                        <p>
                            <strong>A:</strong> Yes, you must be a Prime member to purchase products using Buy with Prime on Living.Fit. When you click on the Buy with Prime button, you will be prompted to sign in to your Amazon account, and your order will be processed using your preferred payment and shipping information stored in your Amazon account. 
                        </p>
                        <p>
                            Link to the Buy with Prime customer service page here.
                        </p>
                    </b-collapse>
                </div>
                <div class="accordion-item">
                    <div class="accordion-heading" header-tag="header" role="tab">
                        <b-button block v-b-toggle.Q-7>Q: How do I initiate a return for Buy with Prime purchases</b-button>
                    </div>
                    <b-collapse id="Q-7" accordion="my-accordion" role="tabpanel">
                        <p>
                            <strong>A:</strong> To initiate a return for an eligible product purchased using Buy with Prime, click on the link in the order confirmation email to go to your order details page. From there you will be able to select the item(s) that you want to return and print a return shipping label. Then drop off your package at your local USPS location. Note that Buy with Prime purchases cannot be returned using other carriers besides USPS and may not be dropped off at Amazon locations such as Amazon Lockers, Whole Foods, or Amazon Go. You can verify the return eligibility of your purchase by visiting Living.Fit Returns. 
                        </p>
                    </b-collapse>
                </div>
                <div class="accordion-item">
                    <div class="accordion-heading" header-tag="header" role="tab">
                        <b-button block v-b-toggle.Q-8>Q: How long does it take for me to get a refund?</b-button>
                    </div>
                    <b-collapse id="Q-8" accordion="my-accordion" role="tabpanel">
                        <p>
                            <strong>A:</strong> For eligible orders, you'll receive a refund once the item is dropped off and scanned at a USPS location. Otherwise, the refund will be processed once the item is received and reviewed at our fulfillment center. It could take up to seven business days for the refund to show up in your account.
                        </p>
                    </b-collapse>
                </div>
                <div class="accordion-item">
                    <div class="accordion-heading" header-tag="header" role="tab">
                        <b-button block v-b-toggle.Q-8>Q: Can I use Amazon gift cards, promotional discounts offered by Living.Fit or points when I use Buy with Prime?</b-button>
                    </div>
                    <b-collapse id="Q-8" accordion="my-accordion" role="tabpanel">
                        <p>
                            <strong>A:</strong> Amazon.com gift cards, promotional discounts offered by Living.Fit or points can’t be used as a payment method to place an order using Buy with Prime. Amazon.com Gift Cards can only be used to purchase eligible goods and services on Amazon.com and certain related sites as detailed in the Amazon.com Gift Card Terms and Conditions.
                        </p>
                    </b-collapse>
                </div> -->
      </div>
    </div>
  </section>
</template>
<script>
// import faqs from "~/static/faq.js";
import { mapState } from "vuex";
export default {
  head: {
    bodyAttrs: {
      class: "white-header",
    },
  },
  data() {
    return {
      faqs: [
        // ...faqs
      ],
    };
  },
  // async fetch() {
  //   this.faqs = await fetch(
  //     '/store/faq.js'
  //   ).then(res => res.json())
  // }
  computed: {
    ...mapState("faq", {
      storeFaqs: (state) => state.faqs,
    }),
  },
};
</script>
<style>
.faq-page h1 {
  font-size: 30px;
  color: #162535;
  font-weight: 600;
  margin-bottom: 20px;
}
.page-heading {
  margin-bottom: 20px;
}
.page-heading p {
  margin: 0;
  color: #162535;
}
.accordion-item {
  margin-bottom: 10px;
}
.accordion-item .accordion-heading {
  margin-bottom: 2px;
}
.accordion-item .accordion-heading button:focus,
.accordion-item .accordion-heading button {
  text-align: left;
  background: #162535;
  font-weight: 700;
  padding: 15px 50px 15px 20px;
  position: relative;
  box-shadow: none;
  border: none;
}
.accordion-item .accordion-heading button:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  background: url("/images/down.png") no-repeat center;
  filter: invert(100%);
  background-size: 20px;
}
.accordion-item .accordion-heading button[aria-expanded="true"]:after {
  transform: rotate(180deg) translateY(50%);
}
.accordion-item .collapse {
  background: #f1f1f1;
  padding: 15px 20px;
  border-radius: 4px;
}
.accordion-item .collapse p {
  color: #686868;
}
.accordion-item .collapse p:last-child {
  margin: 0;
}
</style>
