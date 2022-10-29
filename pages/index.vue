<template>
  <div>
    <Header/>
    <RedesSociales/>
    <MobileNavigation/>
    <Welcome/>
    <Gallery/>
    <CallToAction/>
    <Services/>
    <About/>
    <Experiences/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>

import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Welcome from "~/components/Welcome.vue";
import Gallery from "~/components/Gallery.vue";
import CallToAction from "~/components/CallToAction.vue";
import Services from "~/components/Services.vue";
import About from "~/components/About.vue";
import Experiences from "~/components/Experiences.vue";
import Contact from "~/components/Contact.vue";
import MobileNavigation from "~/components/MobileNavigation.vue";
import RedesSociales from "~/components/RedesSociales.vue";

export default {
  components:{
    Header,
    Footer,
    Welcome,
    Gallery,
    CallToAction,
    Services,
    About,
    Experiences,
    Contact,
    MobileNavigation,
    RedesSociales
}
}
</script>
