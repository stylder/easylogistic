

<!-- Page Title -->
<!--Add modifier class : "pt-fullwidth" to stretch page title and make it occupy 100% of the page width, or "pt-mega", for full width and imaged background -->
<section class="page-title pt-mega bg-parallax" data-stellar-background-ratio="0.65" style="background-image: url(img/page-title/page-hiring.jpg)" ng-controller="contadoresController">
    <span class="overlay" style="background-color: rgba(0, 0, 0, .6);"></span>
    <div class="title text-light">
        <h1>Contadores</h1>

        <div class="row">
            <div class="col-md-4">
                <div class="counter" data-duration="10000">
                    <header class="counter-icon">
                        <i class="icon-map"></i>
                    </header>
                    <div class="digits">@{{ contadores.municipio.municipios }}</div>
                    <footer class="counter-footer">
                        <p>Municipios</p>
                    </footer>
                </div>
            </div><!-- .col-sm-4 -->
            <div class="col-md-4">
                <div class="counter" data-duration="10000">
                    <header class="counter-icon">
                        <i class="fa fa-users"></i>
                    </header>
                    <div class="digits">@{{ contadores.operadores }}</div>
                    <footer class="counter-footer">
                        <p>Operadores</p>
                    </footer>
                </div>
            </div><!-- .col-sm-4 -->
            <div class="col-md-4">
                <div class="counter" data-duration="10000">
                    <header class="counter-icon">
                        <i class="fa fa-truck"></i>
                    </header>
                    <div class="digits">@{{ contadores.unidades }}</div>
                    <footer class="counter-footer">
                        <p>Unidades</p>
                    </footer>
                </div>
            </div><!-- .col-sm-4 -->
        </div>

    </div><!-- .title -->
</section><!-- .page-title -->