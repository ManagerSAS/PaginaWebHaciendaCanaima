<template>
    <div class="header-section header-transparent" :class="{'is-sticky': isSticky}">
        <div class="header-inner">
            <div class="container position-relative">
                <div class="row justify-content-between align-items-center">
                    <!-- Header Logo Start -->
                    <div class="col-xl-2 col-auto order-0">
                        <div class="header-logo">
                            <n-link to="/">
                                <img format="png" loading="lazy"  sizes="sm:100vw md:50vw lg:400px" quality="70" fit="cover"  :src="logo" alt="Agency Logo"/>
                            </n-link>
                        </div>
                    </div>
                    <!-- Header Logo End -->
                    <v-spacer></v-spacer>
                    <!-- Header Main Menu Start -->
                    <div class="col-auto col-xl d-flex align-items-center justify-content-xl-left justify-content-end order-2 order-xl-1">
                        <div class="menu-column-area d-none d-xl-block d-lg-block position-static">
                            <nav class="site-main-menu">
                                <ul>
                                    <li>
                                        <n-link style="text-decoration: none" to="#galeria">Galeria </n-link>
                                    </li>
                                    <li>
                                        <n-link style="text-decoration: none" to="#services">Planes y Actividades</n-link>
                                    </li>
                                    <li>
                                        <n-link style="text-decoration: none" to="#about">Quiénes somos </n-link>
                                    </li>
                                    <li>
                                        <n-link style="text-decoration: none" to="#experiencas">Experiencias</n-link>
                                    </li>
                                    <li>
                                        <n-link style="text-decoration: none" to="#contacto">Contacto</n-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                
                        <div class="header-mobile-menu-toggle d-xl-none d-md-none ml-sm-2 mt-5">
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
        data(){
            return{
                logo:'/Images/LogoHeader.png',
                isSticky: false,
            }
        },
        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },
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