<!-- Navbar -->
<!-- Add class ".navbar-sticky" to make navbar stuck when it hits the top of the page. Another modifier class is: "navbar-fullwidth" to stretch navbar and make it occupy 100% of the page width. The screen width at which navbar collapses can be controlled through the variable "$nav-collapse" in sass/variables.scss -->
<header class="navbar navbar-sticky navbar-ghost">
    <!-- Light Skin for Navbar enables by adding .light-skin class. -->
    <div class="nav-bar-inner">
        <div class="container">
            <a href="index.html" class="site-logo">
                <img src="img/logos/logo1.png" alt="Promo">
            </a><!-- .site-logo -->

            <!-- For alignment navigation use .menu-left-align, .menu-right-align or .menu-center-align class. To get light skin, use .light-skin. -->
            <nav class="main-navigation menu-left-align">
                <div class="stuck-container">
                    <ul class="menu">
                        <li class="current-menu-item menu-item-has-children">
                            <a href="#viajes">Viajes</a>
                        </li>
                        <li class="menu-item-has-children has-mega-menu">
                            <a href="#operador">Unete como Operador</a>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#unidades">Registra tus unidades</a>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#mapa">Dónde tenemos socios</a>
                        </li>
                    </ul><!-- .menu -->
                </div>
            </nav><!-- .main-navigation -->
            <!-- Mobile Menu Toggle -->
            <div class="nav-toggle"><span></span></div>
        </div>
    </div>
</header><!-- .navbar -->

