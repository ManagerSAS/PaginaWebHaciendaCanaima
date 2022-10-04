<template>
  <div>
    <Header/>
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
import Gallery from "~/components/Gallery.vue";
import CallToAction from "~/components/CallToAction.vue";
import Services from "~/components/Services.vue";
import About from "~/components/About.vue";
import Experiences from "~/components/Experiences.vue";
import Contact from "~/components/Contact.vue";
export default {
  components:{
    Header,
    Footer,
    Gallery,
    CallToAction,
    Services,
    About,
    Experiences,
    Contact
}
}
</script>
