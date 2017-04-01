
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>EasyLogistic</title>

    <!--SEO Meta Tags-->
    <meta name="description" content="EasyLogistic" />
    <meta name="keywords" content="EasyLogistic" />
    <meta name="author" content="Santiago García Cabral" />


    <!--Favicon-->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <!-- Revolution Slider 5.0 Main Stylesheet -->
    <!-- --
    <link rel="stylesheet" type="text/css" href="revolution/css/settings.css">
    <link rel="stylesheet" type="text/css" href="revolution/css/layers.css">
    <link rel="stylesheet" type="text/css" href="revolution/css/navigation.css">
    <!-- -->

    <!-- Video -->
    <link href="{{asset('video/video.css')}}" rel="stylesheet" media="screen">

    <!-- Icon Fonts -->
    <link href="{{asset('css/fonts/et-line-font-icon.css')}}" rel="stylesheet" media="screen">
    <link href="{{asset('css/fonts/feather-icons.css')}}" rel="stylesheet" media="screen">
    <link href="{{asset('css/fonts/font-awesome.css')}}" rel="stylesheet" media="screen">

    <!-- Bootstrap Core -->
    <link href="{{asset('css/bootstrap/bootstrap.min.css')}}" rel="stylesheet" media="screen">

    <!-- All Theme Styles -->
    <link href="{{asset('css/theme.min.css')}}" rel="stylesheet" media="screen">

    <!--Google Maps API-->
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA5DLwPPVAz88_k0yO2nmFe7T9k1urQs84"></script>

    <!--Modernizr / Detectizr-->
    <script src="{{asset('js/vendor/modernizr.custom.js')}}"></script>
    <script src="{{asset('js/vendor/detectizr.min.js')}}"></script>


</head>

<!-- Body -->
<body class="parallax">
<div class="preloader-overlay"></div>

<!-- Page Wrapper -->
<div class="page-wrapper">

    <!-- Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog">
        <div class="modal-dialog">
            <button type="button" class="close-btn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div class="modal-content text-center">
                <h4>Login With Social Account</h4>
                <div class="space-bottom-2x">
                    <a href="#" class="btn google-login">Google<i class="fa fa-google"></i></a>
                    <a href="#" class="btn twitter-login">Twitter<i class="fa fa-twitter"></i></a>
                    <a href="#" class="btn facebook-login">Facebook<i class="fa fa-facebook"></i></a>
                </div>
                <h4>Or by Email</h4>
                <form method="post">
                    <input type="email" class="form-control" placeholder="Email">
                    <input type="password" class="form-control" placeholder="Password">
                    <div class="form-group">
                        <button type="submit" class="btn login-btn btn-default">Login into your account<i class="icon-head"></i></button>
                    </div>
                    <div class="text-left">
                        <span class="text-sm text-semibold">New to Promo? <a href="#">Sign Up</a></span>
                    </div>
                </form><!-- <form> -->
            </div><!-- .modal-content -->
        </div><!-- .modal-dialog -->
    </div><!-- .modal.fade -->

    <!-- Navbar -->
    <!-- Add class ".navbar-sticky" to make navbar stuck when it hits the top of the page. Another modifier class is: "navbar-fullwidth" to stretch navbar and make it occupy 100% of the page width. The screen width at which navbar collapses can be controlled through the variable "$nav-collapse" in sass/variables.scss -->
    <header class="navbar navbar-sticky navbar-ghost">

        <!-- <div class="topbar" style="background-color: #ccc;">
          <div class="container">
            <a href="#" class="btn btn-ghost btn-primary">call us</a>
            <span class="text"><i class="fa fa-phone"></i> +38 050 111 22 33</span>

            <ul class="social pull-right">
              <li><a href="#"><i class="fa fa-facebook"></i>Facebook</a></li>
              <li><a href="#"><i class="fa fa-youtube"></i>Youtube</a></li>
              <li><a href="#"><i class="fa fa-vk"></i>Vkontakte</a></li>
              <li><a href="#"><i class="fa fa-tumblr"></i>Tumblr</a></li>
            </ul>
          </div>
        </div> -->

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

    <main>
        <!-- START REVOLUTION SLIDER 5.0 -->
        <section class="">

            <div class="videoWrapper">
                <!-- Copy & Pasted from YouTube -->
                <iframe width="560" height="349" src="https://www.youtube.com/embed/Vu3o2-3uSKE" frameborder="0" allowfullscreen></iframe>

            </div>


        </section><!-- END OF SLIDER WRAPPER -->

        <section class="fw-section padding-bottom padding-top-3x">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="box-with-icon text-center">
                            <div class="bwi-inner">
                                <div class="hexagon-img">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271.03 313.15">
                                        <clipPath id="hexagon_03">
                                            <path d="M300,246.5l135,78v156l-135,78-135-78v-156Z" transform="translate(-164.48 -245.92)"/>
                                        </clipPath>

                                        <a class="hexa-link" xlink:href="http://www.8guild.com" target="_blank">
                                            <image clip-path="url(#hexagon_03)" width="100%" height="100%" xlink:href="img/features/hexa_01.jpg"></image>
                                        </a>
                                    </svg>

                                    <div class="button-overlay">
                                        <div class="bwi-btn">
                                            <a href="#" class="btn btn-primary waves-effect btn-circle"><i class="fa fa-firefox"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="bwi-title">Get Posture Coaching</h3>
                                <p class="bwi-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#" class="bwi-link">Learn more <i class="fe-icon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="box-with-icon text-center">
                            <div class="bwi-inner">
                                <div class="hexagon-img">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271.03 313.15">
                                        <clipPath id="hexagon_04">
                                            <path d="M300,246.5l135,78v156l-135,78-135-78v-156Z" transform="translate(-164.48 -245.92)"/>
                                        </clipPath>

                                        <a class="hexa-link" xlink:href="http://www.8guild.com" target="_blank">
                                            <image clip-path="url(#hexagon_04)" width="100%" height="100%" xlink:href="img/features/hexa_02.jpg"></image>
                                        </a>
                                    </svg>

                                    <div class="button-overlay">
                                        <div class="bwi-btn">
                                            <a href="#" class="btn btn-primary waves-effect btn-circle"><i class="fa fa-chrome"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="bwi-title">Always With You</h3>
                                <p class="bwi-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#" class="bwi-link">Learn more <i class="fe-icon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="box-with-icon text-center">
                            <div class="bwi-inner">
                                <div class="hexagon-img">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271.03 313.15">
                                        <clipPath id="hexagon_01">
                                            <path d="M300,246.5l135,78v156l-135,78-135-78v-156Z" transform="translate(-164.48 -245.92)"/>
                                        </clipPath>

                                        <a class="hexa-link" xlink:href="http://www.8guild.com" target="_blank">
                                            <image clip-path="url(#hexagon_01)" width="100%" height="100%" xlink:href="img/features/hexa_03.jpg"></image>
                                        </a>
                                    </svg>

                                    <div class="button-overlay">
                                        <div class="bwi-btn">
                                            <a href="#" class="btn btn-primary waves-effect btn-circle"><i class="fa fa-safari"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="bwi-title">Track Your Posture</h3>
                                <p class="bwi-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#" class="bwi-link">Learn more <i class="fe-icon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="fw-section padding-top-3x" style="background-image: url(img/home/38.jpg)">
            <div class="overlay" style="background-color: rgba(33, 33, 33, .78"></div>

            <div class="container">
                <div class="row padding-bottom-2x">
                    <div class="col-sm-4">
                        <h2 class="block-title text-light">
                            Warehouse
                            <small>Some features. Some words.</small>
                        </h2>

                        <!-- Nav Tabs -->
                        <ul class="nav-tabs vertical" role="tablist">
                            <li class="active"><a href="#tab1" role="tab" data-toggle="tab">Warehouse function</a></li>
                            <li><a href="#tab2" role="tab" data-toggle="tab">shipping systems</a></li>
                            <li><a href="#tab3" role="tab" data-toggle="tab">Data warehouse</a></li>
                        </ul><!-- .nav-tabs -->
                    </div>

                    <div class="col-sm-8">
                        <!-- Tab panes -->
                        <div class="tab-content text-light">
                            <div role="tabpanel" class="tab-pane transition fade in active" id="tab1">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <ul class="list-icons">
                                            <li class="padding-bottom-2x">
                                                <i class="fa fa-cogs" style="color: #4290e4;"></i>
                                                The most intelligent Java IDE
                                                <p class="list-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </li>
                                            <li>
                                                <i class="fa fa-database" style="color: #de549c;"></i>
                                                Lightning-smart PHP IDE
                                                <p class="list-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-sm-6">
                                        <ul class="list-icons">
                                            <li class="padding-bottom-2x">
                                                <i class="fa fa-cc-jcb" style="color: #00ff48;"></i>
                                                Visual Studio extension
                                                <p class="list-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </li>
                                            <li>
                                                <i class="fa fa-github-alt" style="color: #f69b0e;"></i>
                                                .NET memory profiler
                                                <p class="list-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane transition fade" id="tab2">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <ul class="list-icons">
                                            <li class="padding-bottom-2x">
                                                <i class="fa fa-cogs" style="color: #4290e4;"></i>
                                                The most intelligent Java IDE
                                                <p class="list-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </li>
                                            <li>
                                                <i class="fa fa-database" style="color: #de549c;"></i>
                                                Lightning-smart PHP IDE
                                                <p class="list-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-sm-6">
                                        <ul class="list-icons">
                                            <li class="padding-bottom-2x">
                                                <i class="fa fa-cc-jcb" style="color: #00ff48;"></i>
                                                Visual Studio extension
                                                <p class="list-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </li>
                                            <li>
                                                <i class="fa fa-github-alt" style="color: #f69b0e;"></i>
                                                .NET memory profiler
                                                <p class="list-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane transition fade" id="tab3">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <ul class="list-icons">
                                            <li class="padding-bottom-2x">
                                                <i class="fa fa-cogs" style="color: #4290e4;"></i>
                                                The most intelligent Java IDE
                                                <p class="list-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </li>
                                            <li>
                                                <i class="fa fa-database" style="color: #de549c;"></i>
                                                Lightning-smart PHP IDE
                                                <p class="list-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-sm-6">
                                        <ul class="list-icons">
                                            <li class="padding-bottom-2x">
                                                <i class="fa fa-cc-jcb" style="color: #00ff48;"></i>
                                                Visual Studio extension
                                                <p class="list-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </li>
                                            <li>
                                                <i class="fa fa-github-alt" style="color: #f69b0e;"></i>
                                                .NET memory profiler
                                                <p class="list-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div><!-- .tab-content -->
                    </div>
                </div>
            </div>
        </section>

        <section class="fw-section padding-top-3x padding-bottom-2x">
            <div class="container">
                <h2 class="block-title text-right">
                    Service Calculate
                    <small>Some features. Some words.</small>
                </h2>

                <div class="row">
                    <div class="col-sm-6">
                        <img src="img/home/39.jpg" alt="">
                    </div>
                    <div class="col-sm-6 padding-top-2x">
                        <input type="text" class="form-control" placeholder="Distance">
                        <div class="row">
                            <div class="col-sm-6">
                                <input type="text" class="form-control" placeholder="Weight">
                                <input type="text" class="form-control" placeholder="Height">
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" placeholder="Length">
                                <input type="text" class="form-control" placeholder="Width">
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-sm-4">
                                    <label class="checkbox checkbox-inline">
                                        <input type="checkbox"> Fragile
                                    </label>
                                </div>
                                <div class="col-sm-4">
                                    <label class="checkbox checkbox-inline">
                                        <input type="checkbox" checked> Express Delivery
                                    </label>
                                </div>
                                <div class="col-sm-4">
                                    <label class="checkbox checkbox-inline">
                                        <input type="checkbox"> Insurance
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-7">
                                <p style="padding-top: 8px;">Starting form. Basic calculated fields sample.</p>
                            </div>
                            <div class="col-sm-5">
                                <a href="#" class="btn btn-3d btn-primary btn-block btn-sm">calculate shippng</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="fw-section padding-top-3x padding-bottom-3x" style="background-image: url(img/home/40.jpg);">
            <div class="container padding-bottom-3x">
                <h2 class="block-title">
                    Our Clients
                    <small>Some features. Some words.</small>
                </h2>

                <!-- Data API:
                  data-loop="true/false" enable/disable looping
                  data-autoplay="true/false" enable/disable carousel autoplay
                  data-interval="3000" autoplay interval timeout in miliseconds
                  Simply add necessary data attribute to the ".logo-carousel" with appropriate value to adjust carousel functionality.
                 -->
                <div class="logo-carousel" data-loop="true" data-nav="true" data-autoplay="" data-interval="4000">
                    <div class="inner">
                        <a href="#" class="flat-hovered-logotype">
                            <img src="img/logos/square/01.jpg" alt="">
                        </a>
                        <a href="#" class="flat-hovered-logotype">
                            <img src="img/logos/square/02.jpg" alt="Logo">
                        </a>
                        <a href="#" class="flat-hovered-logotype">
                            <img src="img/logos/square/03.jpg" alt="Logo">
                        </a>
                        <a href="#" class="flat-hovered-logotype">
                            <img src="img/logos/square/04.jpg" alt="Logo">
                        </a>
                        <a href="#" class="flat-hovered-logotype">
                            <img src="img/logos/square/05.jpg" alt="Logo">
                        </a>
                        <a href="#" class="flat-hovered-logotype">
                            <img src="img/logos/square/06.jpg" alt="Logo">
                        </a>
                    </div>
                </div><!-- .logo-carousel -->
            </div>
        </section>

        <section class="padding-top-3x" style="background-color: #ff8f2b;">
            <div class="container">
                <!-- Data API:
                  data-loop="true/false" enable/disable looping
                  data-autoplay="true/false" enable/disable carousel autoplay
                  data-interval="3000" autoplay interval timeout in miliseconds
                  Simply add necessary data attribute to the ".comments-carousel" with appropriate value to adjust carousel functionality.
                 -->
                <div class="comments-carousel" data-loop="true" data-autoplay="true" data-interval="4000">
                    <div class="inner">
                        <!-- testimonial -->
                        <div class="testimonial testimonial-bubble">
                            <div class="text">“Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</div>
                            <div class="author-ava">
                                <img src="img/testimonials/03.png" alt="Author">
                            </div>
                            <div class="author-info">
                                <h3 class="author-name text-light">by <a href="#">Bedismo</a></h3>
                                <div class="autho-company text-light">Designer at <a href="#">8Guild</a></div>
                            </div>
                        </div><!-- .testimonial -->

                        <!-- testimonial -->
                        <div class="testimonial testimonial-bubble">
                            <div class="text">“Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</div>
                            <div class="author-ava">
                                <img src="img/testimonials/02.png" alt="Author">
                            </div>
                            <div class="author-info">
                                <h3 class="author-name text-light">by <a href="#">Bedismo</a></h3>
                                <div class="autho-company text-light">Designer at <a href="#">8Guild</a></div>
                            </div>
                        </div><!-- .testimonial -->

                        <!-- testimonial -->
                        <div class="testimonial testimonial-bubble">
                            <div class="text">“Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</div>
                            <div class="author-ava">
                                <img src="img/testimonials/01.png" alt="Author">
                            </div>
                            <div class="author-info">
                                <h3 class="author-name text-light">by <a href="#">Bedismo</a></h3>
                                <div class="autho-company text-light">Designer at <a href="#">8Guild</a></div>
                            </div>
                        </div><!-- .testimonial -->

                        <!-- testimonial -->
                        <div class="testimonial testimonial-bubble">
                            <div class="text">“Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</div>
                            <div class="author-ava">
                                <img src="img/testimonials/05.png" alt="Author">
                            </div>
                            <div class="author-info">
                                <h3 class="author-name text-light">by <a href="#">Bedismo</a></h3>
                                <div class="autho-company text-light">Designer at <a href="#">8Guild</a></div>
                            </div>
                        </div><!-- .testimonial -->

                        <!-- testimonial -->
                        <div class="testimonial testimonial-bubble">
                            <div class="text">“Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</div>
                            <div class="author-ava">
                                <img src="img/testimonials/02.png" alt="Author">
                            </div>
                            <div class="author-info">
                                <h3 class="author-name text-light">by <a href="#">Bedismo</a></h3>
                                <div class="autho-company text-light">Designer at <a href="#">8Guild</a></div>
                            </div>
                        </div><!-- .testimonial -->

                        <!-- testimonial -->
                        <div class="testimonial testimonial-bubble">
                            <div class="text">“Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</div>
                            <div class="author-ava">
                                <img src="img/testimonials/06.png" alt="Author">
                            </div>
                            <div class="author-info">
                                <h3 class="author-name text-light">by <a href="#">Bedismo</a></h3>
                                <div class="autho-company text-light">Designer at <a href="#">8Guild</a></div>
                            </div>
                        </div><!-- .testimonial -->
                    </div>
                </div><!-- .comments-carousel -->
            </div>
        </section>

        <!-- Full Width Map -->
        <section class="section-fw next-to-footer">
            <!-- Wrap your map with ".google-map-container" for usage with info box. -->
            <div class="google-map-container">
                <div class="container">
                    <div class="map-info-box">
                        <div class="map-info-box-logo">
                            <img src="img/logos-main/logo_06.png" alt="">
                        </div>

                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                        <div class="">
                            <address class="space-bottom">
                                <strong>8 Guild, Inc.</strong><br>
                                105448 Cross Bay BLVD, Suite 600<br>
                                New York, NY 96200<br>
                                <abbr title="Phone">P:</abbr> (135) 646-7980
                                <div class="social-buttons">
                                    <a href="#" class="cbutton cbutton--effect"><i class="bi-facebook"></i></a>
                                    <a href="#" class="cbutton cbutton--effect"><i class="bi-twitter"></i></a>
                                    <a href="#" class="cbutton cbutton--effect"><i class="bi-skype"></i></a>
                                </div>
                                <div class="divider"></div>
                            </address>
                            <address>
                                <strong>Bedismo</strong><br>
                                <a href="mailto:first.last@example.com">first.last@example.com</a>
                                <div class="social-buttons">
                                    <a href="#" class="cbutton cbutton--effect"><i class="bi-facebook"></i></a>
                                    <a href="#" class="cbutton cbutton--effect"><i class="bi-twitter"></i></a>
                                    <a href="#" class="cbutton cbutton--effect"><i class="bi-skype"></i></a>
                                </div>
                            </address>
                        </div>
                    </div>
                </div>

                <!-- Data API:
                     data-height="500" height of the map in pixels
                     data-address="Your address" string
                     data-zoom="number" to control map zoom when loaded
                     data-disable-controls="false/true" enable/disable map controls like pan, zoom, etc.
                     data-scrollwheel="true/false" enable/disable mouse scroll wheel zoom
                     data-marker="path_to_your_image" path to custom marker image
                     data-marker-title=" Your title" appears on marker hover
                     data-styles="[array]" you can adjust the look and feel of your map. Recommend to use https://snazzymaps.com
                 -->
                <div class="google-map"
                     data-address="New York, USA"
                     data-height="450"
                     data-zoom="14"
                     data-disable-controls="false"
                     data-scrollwheel="false"
                     data-marker="img/map-marker.png"
                     data-marker-title="Nucleus Office"
                ></div><!-- .google-map -->
            </div>
        </section><!-- Full Width Map End -->
    </main>

    <!-- Scroll To Top Button -->
    <a href="#" class="scroll-to-top-btn">
        <i class="fa fa-angle-up"></i>
    </a><!-- .scroll-to-top-btn -->

    <!-- Footer -->
    <footer class="footer dark-skin"  style="background-image: url(img/footer/footer_bg.jpg)">
        <div class="top-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <section class="widget widget_text">
                            <a href="index.html" class="site-logo">
                                <img src="img/logos-main/logo_01.png" alt="Promo">
                            </a><!-- .site-logo -->
                            <p>Left your phone on the train? Your photos, and videos are safe. Just sign in  from any device, and your files will be there waiting for you.</p>
                        </section><!-- .widget.widget_text -->
                    </div><!-- .col-md-3 -->
                    <div class="col-md-3 col-sm-6">
                        <section class="widget widget_categories">
                            <h3 class="widget-title">
                                <i class="fe-icon-layers"></i>
                                Categories
                            </h3>
                            <ul>
                                <li><a href="#">Support<span>3</span></a></li>
                                <li><a href="#">Design<span>4</span></a></li>
                                <li><a href="#">Hosting<span>11</span></a></li>
                            </ul>
                        </section><!-- .widget.widget_categories -->
                    </div><!-- .col-md-3 -->
                    <div class="clearfix visible-sm"></div>
                    <div class="col-md-3 col-sm-6">
                        <section class="widget widget_recent_news">
                            <h3 class="widget-title">
                                <i class="fe-icon-paper"></i>
                                Recent News
                            </h3>
                            <div class="item">
                                <div class="info">
                                    <h4><a href="blog-single-rs.html">Making Cents of Online Investment Services – Which is Best?</a></h4>
                                </div>
                                <div class="meta">
                                    <a href="#"><i class="icon-calendar"></i> October 7, 2015</a>
                                </div>
                            </div><!-- .item -->
                            <div class="item">
                                <div class="info">
                                    <h4><a href="blog-single-rs.html">Making Cents of Online Investment Services – Which is Best?</a></h4>
                                </div>
                                <div class="meta">
                                    <a href="#"><i class="icon-calendar"></i> October 7, 2015</a>
                                </div>
                            </div><!-- .item -->
                        </section><!-- .widget.widget_recent_news -->
                    </div><!-- .col-md-3 -->
                    <div class="col-md-3 col-sm-6">
                        <!-- Subscribe Widget -->
                        <section class="widget widget_subscribe">
                            <h3 class="widget-title">
                                <i class="fe-icon-paper-clip"></i>
                                Subscribe
                            </h3>
                            <form method="post" class="subscribe-box">
                                <input type="text" class="form-control input-sm" placeholder="E-mail">
                                <button type="submit" class="btn btn-primary btn-block btn-sm waves-effect waves-light">Subscribe for news</button>
                            </form>
                        </section><!-- widget_subscribe -->
                    </div><!-- .col-md-3 -->
                </div><!-- .row -->
            </div>
        </div>

        <div class="container">
            <div class="bottom-footer">
                <div class="column">
                    <ul class="social list-unstyled list-inline">
                        <li><a href="#"><i class="fa fa-facebook"></i>Facebook</a></li>
                        <li><a href="#"><i class="fa fa-youtube"></i>Youtube</a></li>
                        <li><a href="#"><i class="fa fa-vk"></i>Vkontakte</a></li>
                        <li><a href="#"><i class="fa fa-tumblr"></i>Tumblr</a></li>
                    </ul>
                </div><!-- .column -->
                <div class="column text-right">
                    <ul class="list-unstyled list-inline">
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </div><!-- .column -->
            </div>
        </div>

        <div class="copyright">
            <div class="container">
                <div class="column">
                    <p>&copy; Promo 2016. Made by <a href="http://8guild.com/" target="_blank">8Guild</a> with <i class="fa fa-heart text-danger"></i> love.</p>
                </div><!-- .column -->
            </div>
        </div><!-- .copyright -->

    </footer><!-- .footer -->


    <div class="template-settings">
        <div class="settings-inner">
            <div class="settings-toggle">
                <i class="fa"></i>
            </div>

            <h5 class="title">Headers</h5>

            <div class="settings-select">
                <select name="headers" onChange="window.location.href=this.value">
                    <option value="home-tour.html">Full Widht With Tools</option>
                    <option value="home-saas.html">Ghost Full Widht With</option>
                    <option value="home-app.html">Boxed Right Menu</option>
                    <option value="elements.html">Boxed With Menu Below</option>
                </select>
            </div>

            <h5 class="title">Demos(11)</h5>

            <div class="settings-carousel" data-loop="false" data-nav="true" data-autoplay="" data-interval="4000">
                <div class="inner">
                    <div class="slide">
                        <a href="index.html" class="preview-page">
                            <img src="img/presentation/home-01.jpg" alt="">

                            <span class="page-name">Home Presentation</span>
                        </a>

                        <a href="home-tour.html" class="preview-page">
                            <img src="img/presentation/home-02.jpg" alt="">

                            <span class="page-name">Home Tour</span>
                        </a>

                        <a href="home-app.html" class="preview-page">
                            <img src="img/presentation/home-03.jpg" alt="">

                            <span class="page-name">Home Application</span>
                        </a>

                        <a href="home-saas.html" class="preview-page">
                            <img src="img/presentation/home-04.jpg" alt="">

                            <span class="page-name">Home SAAS</span>
                        </a>
                    </div>

                    <div class="slide">
                        <a href="home-lawyer.html" class="preview-page">
                            <img src="img/presentation/home-05.jpg" alt="">

                            <span class="page-name">Home Lawyer</span>
                        </a>

                        <a  href="home-logistics.html" class="preview-page">
                            <img src="img/presentation/home-06.jpg" alt="">

                            <span class="page-name">Home Logistic</span>
                        </a>

                        <a  href="home-medical.html" class="preview-page">
                            <img src="img/presentation/home-07.jpg" alt="">

                            <span class="page-name">Home Medical</span>
                        </a>

                        <a  href="home-development.html" class="preview-page">
                            <img src="img/presentation/home-08.jpg" alt="">

                            <span class="page-name">Home Development</span>
                        </a>
                    </div>

                    <div class="slide">
                        <a href="home-event.html" class="preview-page">
                            <img src="img/presentation/home-09.jpg" alt="">

                            <span class="page-name">Home Event</span>
                        </a>

                        <a  href="home-agency.html" class="preview-page">
                            <img src="img/presentation/home-10.jpg" alt="">

                            <span class="page-name">Home Agency</span>
                        </a>

                        <a  href="home-product.html" class="preview-page">
                            <img src="img/presentation/home-11.jpg" alt="">

                            <span class="page-name">Home Product</span>
                        </a>
                    </div>

                </div>
            </div><!-- .logo-carousel -->

            <a href="#" class="btn btn-primary btn-block waves-effect waves-light btn-icon-left space-bottom-none"><i class="fa fa-shopping-cart"></i>Purchase promo</a>
        </div>
    </div>
</div><!-- .page-wrapper -->

<!-- JavaScript (jQuery) libraries, plugins and custom scripts -->
<script src="{{asset('js/vendor/jquery-2.1.4.min.js')}}"></script>
<script src="{{asset('js/vendor/jquery.easing.min.js')}}"></script>
<script src="{{asset('js/vendor/bootstrap.min.js')}}"></script>
<script src="{{asset('js/vendor/pace.min.js')}}"></script>
<script src="{{asset('js/vendor/placeholder.js')}}"></script>
<script src="{{asset('js/vendor/smoothscroll.js')}}"></script>
<script src="{{asset('js/vendor/waypoints.min.js')}}"></script>
<script src="{{asset('js/vendor/icheck.min.js')}}"></script>
<script src="{{asset('js/vendor/waves.min.js')}}"></script>
<script src="{{asset('js/vendor/velocity.min.js')}}"></script>
<script src="{{asset('js/vendor/jquery.stellar.min.js')}}"></script>
<script src="{{asset('js/vendor/magnific-popup.min.js')}}"></script>
<script src="{{asset('js/vendor/owl.carousel.min.js')}}"></script>
<script src="{{asset('js/vendor/jquery.spincrement.js')}}"></script>
<script src="{{asset('js/vendor/scrollspy.js')}}"></script>
<script src="{{asset('js/vendor/scrollreveal.min.js')}}"></script>
<script src="{{asset('js/vendor/gmap3.min.js')}}"></script>

<!-- RS5.0 Core JS Files -->
<!-- --
<script src="revolution/js/jquery.themepunch.tools.min.js"></script>
<script src="revolution/js/jquery.themepunch.revolution.min.js"></script>
<!-- -->
<script src="{{asset('js/scripts.js')}}"></script>

</body><!-- <body> -->

</html>
