<!-- Navbar -->
<!-- Add class ".navbar-sticky" to make navbar stuck when it hits the top of the page. Another modifier class is: "navbar-fullwidth" to stretch navbar and make it occupy 100% of the page width. The screen width at which navbar collapses can be controlled through the variable "$nav-collapse" in sass/variables.scss -->
<header class="navbar navbar-sticky navbar-ghost">
    <!-- Light Skin for Navbar enables by adding .light-skin class. -->
    <div class="nav-bar-inner">
        <div class="container">
            <a href="index.html" class="site-logo">
                <img src="img/logos-main/logo_01.png" alt="Promo">
            </a><!-- .site-logo -->

            <!-- For alignment navigation use .menu-left-align, .menu-right-align or .menu-center-align class. To get light skin, use .light-skin. -->
            <nav class="main-navigation menu-left-align">
                <div class="stuck-container">
                    <ul class="menu">
                        <li class="current-menu-item menu-item-has-children">
                            <a href="#">Home</a>
                            <ul class="sub-menu">
                                <li><a href="index.html">Theme Presentation</a></li>
                                <li><a href="home-agency.html">Home Agency</a></li>
                                <li><a href="home-saas.html">Home SAAS</a></li>
                                <li><a href="home-app.html">Home App Showcase</a></li>
                                <li><a href="home-tour.html">Home Tour</a></li>
                                <li><a href="home-event.html">Home Event</a></li>
                                <li><a href="home-development.html">Home Development</a></li>
                                <li><a href="home-medical.html">Home Medical</a></li>
                                <li class="current-menu-item"><a href="home-logistics.html">Home Logistics</a></li>
                                <li><a href="home-lawyer.html">Home Lawyer</a></li>
                                <li><a href="home-product.html">Home Product Promo</a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children has-mega-menu">
                            <a href="#">Blog</a>
                            <ul class="sub-menu">
                                <li>
                                    <ul>
                                        <li><a href="blog-list-rs.html">Blog List Right Sidebar</a></li>
                                        <li><a href="blog-list-ls.html">Blog List Left Sidebar</a></li>
                                        <li><a href="blog-list-ns.html">Blog List No Sidebar</a></li>
                                        <li><a href="blog-grid-4-cols.html">Blog Grid 4 Cols</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><a href="blog-grid-3-cols.html">Blog Grid 3 Cols</a></li>
                                        <li><a href="blog-grid-3-cols-rs.html">Blog Grid 3 Cols Right Sidebar</a></li>
                                        <li><a href="blog-grid-3-cols-ls.html">Blog Grid 3 Cols Left Sidebar</a></li>

                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><a href="blog-grid-2-cols.html">Blog Grid 2 Cols</a></li>
                                        <li><a href="blog-grid-2-cols-rs.html">Blog Grid 2 Cols Right Sidebar</a></li>
                                        <li><a href="blog-grid-2-cols-ls.html">Blog Grid 2 Cols Left Sidebar</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><a href="blog-single-rs.html">Single Post Right Sidebar</a></li>
                                        <li><a href="blog-single-ls.html">Single Post Left Sidebar</a></li>
                                        <li><a href="blog-single-ns.html">Single Post No Sidebar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#">Portfolio</a>
                            <ul class="sub-menu">
                                <li><a href="portfolio-3-cols.html">Portfolio 3 Columns</a></li>
                                <li><a href="portfolio-2-cols.html">Portfolio 2 Columns</a></li>
                                <li><a href="portfolio-hexagon.html">Portfolio Hexagon Tumbnails</a></li>
                                <li><a href="portfolio-masonry.html">Portfolio Masonry Grid</a></li>
                                <li><a href="portfolio-single.html ">Single portfolio</a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#">Pages</a>
                            <ul class="sub-menu">
                                <li><a href="page-about.html">About Us</a></li>
                                <li><a href="page-contacts.html">Contacts</a></li>
                                <li><a href="page-team.html">Our team</a></li>
                                <li><a href="page-pricing.html">Pricing</a></li>
                                <li><a href="page-help-center.html">Help Center</a></li>
                                <li><a href="page-customers.html">Customers / Clients</a></li>
                                <li><a href="page-we-are-hiring.html">We are Hiring</a></li>
                                <li><a href="page-under-construction.html">Under Construction</a></li>
                                <li><a href="page-404.html">404</a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#">Headers</a>
                            <ul class="sub-menu">
                                <li><a href="home-tour.html">Full Widht With Tools</a></li>
                                <li><a href="home-saas.html">Ghost Full Widht With Tools</a></li>
                                <li><a href="home-app.html">Boxed Right Menu</a></li>
                                <li><a href="elements.html">Boxed With Menu Below</a></li>
                            </ul>
                        </li>
                        <li class="has-mega-menu">
                            <a href="elements.html">Elements</a>
                            <ul class="sub-menu">
                                <li>
                                    <ul>
                                        <li><a href="elements.html#typography">Typography </a></li>
                                        <li><a href="elements.html#buttons">Buttons</a></li>
                                        <li><a href="elements.html#cta_buttons">CTA Buttons</a></li>
                                        <li><a href="elements.html#social">Social Buttons</a></li>
                                        <li><a href="elements.html#forms">Forms</a></li>
                                        <li><a href="elements.html#tables">Table</a></li>
                                        <li><a href="elements.html#timetable">Timetable</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><a href="elements.html#tabs">Tabs</a></li>
                                        <li><a href="elements.html#panels">Panels &amp; Accordions</a></li>
                                        <li><a href="elements.html#fclick">Features: Clickable Icons</a></li>
                                        <li><a href="elements.html#fhexa">Features: Hexagon Images</a></li>
                                        <li><a href="elements.html#ficons">Features: Icons</a></li>
                                        <li><a href="elements.html#fimaged">Features: Images</a></li>
                                        <li><a href="elements.html#tcolored">Features: Solid Color Tiles</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><a href="elements.html#timaged">Features: Image Tiles</a></li>
                                        <li><a href="elements.html#image_link">Image Links</a></li>
                                        <li><a href="elements.html#pricing">Pricing</a></li>
                                        <li><a href="elements.html#tpricing">Pricing Table</a></li>
                                        <li><a href="elements.html#testimonial">Testimonials</a></li>
                                        <li><a href="elements.html#port1">Portfolio Tiles: Type 1</a></li>
                                        <li><a href="elements.html#port2">Portfolio Tiles: Type 2</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li><a href="elements.html#gallery">Gallery</a></li>
                                        <li><a href="elements.html#carousel">Carousels</a></li>
                                        <li><a href="elements.html#to_video">Responsive Video</a></li>
                                        <li><a href="elements.html#cta_info">CTA Info Box</a></li>
                                        <li><a href="elements.html#progress">Progress Bars</a></li>
                                        <li><a href="elements.html#counters">Counters</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul><!-- .menu -->
                </div>
            </nav><!-- .main-navigation -->

            <div class="toolbar text-right">
                <a href="#" class="text-sm" data-toggle="modal" data-target="#loginModal"><i class="fe-icon-head"></i>Sign up</a>
                <a href="#" class="text-sm" data-toggle="modal" data-target="#loginModal"><i class="fe-icon-unlock"></i>Log In</a>

                <div class="search-btn">
                    <i class="fe-icon-search"></i>
                    <form method="post" class="search-box">
                        <input type="text" class="form-control input-sm" placeholder="Search">
                        <button type="submit"><i class="fe-icon-search"></i></button>
                    </form>
                </div> <!-- .search-btn -->
            </div> <!-- .toolbar -->

            <!-- Mobile Menu Toggle -->
            <div class="nav-toggle"><span></span></div>
        </div>
    </div>
</header><!-- .navbar -->

