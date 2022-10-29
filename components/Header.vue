<template>
    <div class="header-section" >
        <div class="header-inner">
            <div class="container position-relative">
                <div class="row justify-content-between align-items-center">
                    <!-- Header Logo Start -->
                    <div class="col-xl-2 col-auto order-0">
                        <div class="header-logo">
                            <n-link to="/">
                                <nuxt-img format="png" loading="lazy" placeholder="/Images/LogoHeader.png"  sizes="sm:100vw md:50vw lg:400px" quality="70" fit="cover"  src="/Images/LogoHeader.png" alt="Agency Logo"/>
                            </n-link>
                        </div>
                    </div>
                    <!-- Header Logo End -->
                    <v-spacer></v-spacer>
                    <!-- Header Main Menu Start -->
                    <div class="col-auto col-xl d-flex align-items-center justify-content-xl-left justify-content-end order-2 order-xl-1">
                        <div class="menu-column-area d-none d-xl-block d-lg-block  position-static">
                            <nav class="site-main-menu">
                                <ul>
                                    <li>
                                        <n-link style="text-decoration: none" to="#Advantage">Galeria </n-link>
                                    </li>
                                    <li>
                                        <n-link style="text-decoration: none" to="#Presentation">Planes y Actividades</n-link>
                                    </li>
                                    <li>
                                        <n-link style="text-decoration: none" to="#Plans">Quiénes somos </n-link>
                                    </li>
                                    <li>
                                        <n-link style="text-decoration: none" to="#Tarjeta">Experiencias</n-link>
                                    </li>
                                    <li>
                                        <n-link style="text-decoration: none" to="#Questions">Contacto</n-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                
                        <div class="header-mobile-menu-toggle d-xl-none ml-sm-2">
                            <button aria-label="Menu hamburguesa " class="toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <i class="icon-top"></i>
                                <i class="icon-middle"></i>
                                <i class="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
</template>

<script>
    export default {
        methods: {
            // offcanvas mobile menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>