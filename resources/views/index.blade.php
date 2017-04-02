<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>EasyLogistic</title>

    <!--SEO Meta Tags-->
    <meta name="description" content="EasyLogistic"/>
    <meta name="keywords" content="EasyLogistic"/>
    <meta name="author" content="Santiago García Cabral"/>

    @include('imports_librerias')


</head>

<!-- Body -->
<body class="parallax">
<div class="preloader-overlay"></div>

<!-- Page Wrapper -->
<div class="page-wrapper">


    @include('header')

    <main>

        @include('video')

        @include('tipos_transporte')

        @include('consigue_viaje')

        @include('galeria')

        @include('unete_familia')

        @include('registro_unidad')

        @include('testimonios')

        @include('mapa')

    </main>

    <!-- Scroll To Top Button -->
    <a href="#" class="scroll-to-top-btn">
        <i class="fa fa-angle-up"></i>
    </a><!-- .scroll-to-top-btn -->

    @include('footer')


</div><!-- .page-wrapper -->
    @include('import_scripts')

</body><!-- <body> -->

</html>
