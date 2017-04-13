<!-- Gallery Grid -->
<div class="gallery-grid" data-loop="true" data-items-mobile="2" data-items-tablet="4" data-items-desktop="6" ng-controller="galeriaController">
    <div class="inner">

        @{{imagenes}}

        <div class="gallery-item" ng-repeat="imagen in imagenes">
            <img ng-src="@{{imagen.path}}"  class="img-responsive" alt="">

            <a href="@{{imagen.path}}" class="btn btn-light waves-effect waves-light btn-circle">
                <i class="fe-icon-search"></i>
            </a>
        </div><!-- .gallery-item -->


        <div class="gallery-item">
            <img src="img/gallery/th01.jpg" alt="">

            <a href="img/gallery/01.jpg" class="btn btn-light waves-effect waves-light btn-circle">
                <i class="fe-icon-search"></i>
            </a>
        </div><!-- .gallery-item -->

        <div class="gallery-item">
            <img src="img/gallery/th02.jpg" alt="">

            <a href="img/gallery/02.jpg" class="btn btn-light waves-effect waves-light btn-circle">
                <i class="fe-icon-search"></i>
            </a>
        </div><!-- .gallery-item -->
        <div class="gallery-item">
            <img src="img/gallery/th03.jpg" alt="">

            <a href="img/gallery/03.jpg" class="btn btn-light waves-effect waves-light btn-circle">
                <i class="fe-icon-search"></i>
            </a>
        </div><!-- .gallery-item -->
        <div class="gallery-item">
            <img src="img/gallery/th04.jpg" alt="">

            <a href="img/gallery/04.jpg" class="btn btn-light waves-effect waves-light btn-circle">
                <i class="fe-icon-search"></i>
            </a>
        </div><!-- .gallery-item -->
        <div class="gallery-item">
            <img src="img/gallery/th05.jpg" alt="">

            <a href="img/gallery/05.jpg" class="btn btn-light waves-effect waves-light btn-circle">
                <i class="fe-icon-search"></i>
            </a>
        </div><!-- .gallery-item -->
        <div class="gallery-item">
            <img src="img/gallery/th06.jpg" alt="">

            <a href="img/gallery/06.jpg" class="btn btn-light waves-effect waves-light btn-circle">
                <i class="fe-icon-search"></i>
            </a>
        </div><!-- .gallery-item -->

    </div>
</div><!-- .gallery-grid --><!-- Elements block END -->