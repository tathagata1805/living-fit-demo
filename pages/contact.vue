<template>
    <div>
        <section class="inner-page-hero-section" style="background: url('/images/contact-us-banner.jpeg') no-repeat center;">
            <div class="container">
                <div class="inner-hero-cont d-flex align-items-center justify-content-center">
                    <h1>Contact Us</h1>
                </div>
            </div>
        </section>
        <section class="contact-form-section">
            <div class="container">
                <div class="row m-0">
                    <div class="col-lg-6 col-md-6 col-sm-12 p-0 padding-right-50">
                        <div class="contact-form-wrap">
                            <h3>Drop Us a Line</h3>
                            <b-form>
                                <b-form-group>
                                    <div  class="row">
                                        <div class="col-md-6 col-sm-12">
                                            <b-form-input type="text" placeholder="First name" required></b-form-input>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <b-form-input type="text" placeholder="Last name" required></b-form-input>
                                        </div>
                                    </div>
                                </b-form-group>
                                <b-form-group>
                                    <div  class="row">
                                        <div class="col-md-6 col-sm-12">
                                            <b-form-input type="email" placeholder="Email address" required></b-form-input>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <b-form-input type="tel" placeholder="Phone number" required></b-form-input>
                                        </div>
                                    </div>
                                </b-form-group>
                                <b-form-group>
                                    <b-form-textarea placeholder="Message"></b-form-textarea>
                                </b-form-group>
                               <div class="submit-wrap">
                                <b-button type="submit">Submit</b-button>
                               </div>
                            </b-form>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 p-0 padding-left-50">
                        <div class="contact-info-wrap">
                            <h3>Contact info</h3>
                            <ul class="contact-links">
                                <li>
                                    <span class="image-holder">
                                        <img src="/images/phone-call.png" alt="call"/>
                                    </span>
                                    <p>
                                        <a href="tel:844-524-0677">844-524-0677</a>
                                    </p>
                                </li>
                                <li>
                                    <span class="image-holder">
                                        <img src="/images/email.png" alt="email"/>
                                    </span>
                                    <p>
                                        <a href="mailto:info@living.fit">info@living.fit</a>
                                    </p>
                                </li>
                                <li>
                                    <span class="image-holder">
                                        <img src="/images/locator.png" alt="Location"/>
                                    </span>
                                    <address>
                                        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                    </address>
                                </li>
                            </ul>
                            <h4>Follow Us</h4>
                            <ul class="d-flex align-items-center flex-wrap social-links">
                                <li><a href="https://www.facebook.com/LivingFit-902949083222595" target="_blank"><img src="/images/facebook.png" alt="Facebook"/></a></li>
                                <li><a href="https://www.instagram.com/living.fit/" target="_blank"><img src="/images/instagram.png" alt="Instagram"/></a></li>
                                <li><a href="https://www.linkedin.com/company/living-dot-fit/" target="_blank"><img src="/images/linkedin.png" alt="Linkedin"/></a></li>
                                <li><a href="https://www.youtube.com/channel/UCYUSG_wrOEgus5op7ESXEkQ" target="_blank"><img src="/images/youtube.png" alt="Youtube"/></a></li>
                                <li><a href="https://twitter.com/LivingFitApp" target="_blank"><img src="/images/twitter.png" alt="twitter"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="map-section p-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d881796.7837624904!2d-97.755742!3d30.307761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b4dcaccf874a3%3A0x8d9e21bea0af6ea!2sLiving.Fit!5e0!3m2!1sen!2sin!4v1677757669015!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </div>
</template>
<script>

    export default {
        name:'ContactPage'
    }
</script>
<style>
.contact-form-section{
    position: relative;
}
.contact-form-section:after{
    content:'';
    position:absolute;
    top:0;
    right:0;
    width:50%;
    height:100%;
    background: #466cce;
}
.padding-right-50{
    padding-right:50px !important;
}
.padding-left-50{
    padding-left:50px !important;
}
.contact-info-wrap h3,
.contact-form-wrap h3{
    font-size:30px;
    color:#000;
    font-weight: 600;
    margin-bottom:30px;
}
.contact-form-wrap  input{
    height:45px;
    border:1px solid #ced4da;
    outline: none;
    font-size:15px;
    border-radius: 4px;
}
.contact-form-wrap textarea,
.contact-form-wrap  input:focus{
    box-shadow: none !important;
}
.contact-form-wrap textarea{
    border:1px solid #ced4da;
    border-radius: 4px;
    height:90px;
    font-size:15px;
}
.contact-form-wrap .submit-wrap{
    text-align: right;
}
.contact-form-wrap .submit-wrap button{
    height:45px;
    line-height:45px;
    padding:0 30px;
    background:#466cce;
    color:#fff;
    text-transform: uppercase;
    border:1px solid #466cce;
    outline: none;
    transition: all 0.5s ease-in-out;
}
.contact-form-wrap .submit-wrap button:focus{
    box-shadow: none !important;
}
.contact-form-wrap .submit-wrap button:hover{
    background:#fff;
    color:#466cce;
}
.contact-info-wrap{
    position:relative;
    z-index:1;
}
.contact-info-wrap h3{
    color:#fff;
}
.contact-info-wrap .contact-links li{
    display:flex;
    flex-wrap:wrap;
    align-items: center;
    margin-bottom:15px;
}
.contact-info-wrap .contact-links li span{
    background:#fff;
    width:40px;
    height:40px;
    line-height: 40px;
    text-align: center;
    border-radius: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
}
.contact-info-wrap .contact-links li address,
.contact-info-wrap .contact-links li p{
    width:calc(100% - 60px);
    margin:0;
    color:#fff;
}
.contact-info-wrap .contact-links li p a{
    display:inline-block;
    color:#fff;
}
.social-links li:not(:last-child){
    margin-right:10px;
}
.social-links li a{
    display:inline-block;
    height:40px;
    width:40px;
    text-align: center;
    line-height: 40px;
    background: #fff;
    border-radius: 4px;
}
.contact-info-wrap h4{
    font-size:25px;
    color:#fff;
    font-weight: 500;
    margin-bottom:15px;
    margin-top:30px;
}
.map-section iframe{
    height:300px;
    width:100%;
}
@media(max-width:999px){
    .inner-hero-cont{
        height:250px;
    }
    .contact-form-section .col-md-6.padding-left-50,
    .contact-form-section .col-md-6.padding-right-50{
        width:100% !important;
        max-width:100%;
        flex: 0 0 100%;
        padding:0 !important
    }
    .contact-form-section:after{
        display:none;
    }
    .contact-form-section .col-md-6.padding-left-50{
        margin-top:50px;
        background:#466cce;
        padding:25px !important;
    }
}
@media(max-width:767px){
    .form-group .row .col-sm-12:not(:last-child){
        margin-bottom:15px;
    }
}
</style>
