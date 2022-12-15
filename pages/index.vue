<template>
  <div class="text-gotham">
    <Header/>
    <RedesSociales/>
    <MobileNavigation/>
    <Welcome/>
    <Gallery class="mt-5 mb-5"/>
    <Services class="mt-5 mb-5" style="background-color: #eff5de"/>
    <About />
    <Experiences class="mt-5 mb-5" style="background-color: #eff5de"/>
    <Contact class="mt-5 mb-5"/>
    <Frequents class="mt-5 mb-5" style="background-color: #eff5de"/>
    <Comments />
    <Politicas/>
    <Footer />
  </div>
</template>

<script>

import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Welcome from "~/components/Welcome.vue";
import Gallery from "~/components/Gallery.vue";
import Frequents from "~/components/Frequents.vue";
import Services from "~/components/Services.vue";
import About from "~/components/About.vue";
import Experiences from "~/components/Experiences.vue";
import Contact from "~/components/Contact.vue";
import MobileNavigation from "~/components/MobileNavigation.vue";
import RedesSociales from "~/components/RedesSociales.vue";
import Comments from "~/components/Comments.vue";
import Politicas from "~/components/Politicas.vue";


export default {
  components:{
    Header,
    Footer,
    Welcome,
    Gallery,
    Frequents,
    Services,
    About,
    Experiences,
    Contact,
    MobileNavigation,
    RedesSociales,
    Comments,
    Politicas
}
}
</script>
