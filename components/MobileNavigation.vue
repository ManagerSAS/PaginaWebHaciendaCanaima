<template>
    <div class="popup-mobile-menu popup-mobile-visiable order-2" id="offcanvas-menu">
        <div @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"></div>
        <div class="inner custom-scrollbar">
            <div class="mobile-header">
                <div class="header-logo">
                    <n-link class="logo" to="/">
                        <img format="png" loading="lazy"  sizes="sm:100vw md:50vw lg:400px" quality="70" fit="cover"  :src="logo" alt="Agency Logo"/>
                    </n-link>
                </div>
                <button class="mobile-close-btn" @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"></button>
            </div>
            <div class="menu-content">
                <div class="mobile-navigation">
                    <nav class="offcanvas-navigation" id="offcanvas-navigation">
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                logo:'/Images/LogoHeader.png'
            }
        },
        mounted() {
            const offCanvasNav = document.querySelector('#offcanvas-navigation');
            const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
            const anchorLinks = offCanvasNav.querySelectorAll('a');
        
            for (let i = 0; i < offCanvasNavSubMenu.length; i++){
                offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
            }
        
            const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
            const numMenuExpand = menuExpand.length;
        
            for (let i = 0; i < numMenuExpand; i++) {
                menuExpand[i].addEventListener("click", (e) => {sideMenuExpand(e)});
            }
        
            for (let i = 0; i < anchorLinks.length; i++) {
                anchorLinks[i].addEventListener("click", () => {closeMobileMenu()});
            }

            const sideMenuExpand = (e) => {
                e.currentTarget.parentElement.classList.toggle('active');
            }
            const closeMobileMenu = () => {
                const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
                offcanvasMobileMenu?.classList.remove('active');
            }
        },
        methods: {
            // offcanvas menu close
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            }
        }
    };
</script>


<style lang="scss">
    .offcanvas-navigation {
        ul {
            padding-left: 0;
            li {
                border-bottom: 1px solid rgba($color: #95bd20, $alpha: 1.0);
                &.menu-item-has-children {
                    .sub-menu {
                        height: 0;
                        opacity: 0;
                        transition: 0.3s;
                        visibility: hidden;
                    }
                    &.active > {
                        .sub-menu {
                            height: 100%;
                            opacity: 1;
                            visibility: visible;
                            padding-left: 0;
                        }
                    }
                }
                a {
                    text-decoration: none;
                    color: $white;
                    font-size: 16px;
                    font-weight: 500;
                    padding: 10px 0;
                    display: block;
                    &:hover {
                        color: $primary;
                    }
                }
            }
        }
    }
</style>