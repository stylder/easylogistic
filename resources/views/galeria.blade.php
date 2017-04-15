<!-- Gallery Grid -->
<div class="row" ng-controller="galeriaController">
    @{{ slides | json }}
    <div class="gallery-grid" data-loop="true" data-autoplay="true" data-items-mobile="2" data-items-tablet="4"
         data-items-desktop="9">
        <div class="inner">
            <div class="gallery-item" ng-repeat="imagen in slides">
                <img ng-src="@{{imagen.path}}" height="100px" alt="">
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
        </div>
    </div><!-- .gallery-grid --><!-- Elements block END -->
</div>