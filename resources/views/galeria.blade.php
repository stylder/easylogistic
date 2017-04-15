<!-- Gallery Grid -->
<section  ng-controller="galeriaController">
    @{{ slides | json }}
    <div class="gallery-grid" data-loop="true" data-autoplay="true" data-items-mobile="2" data-items-tablet="4"
         data-items-desktop="9">
        <div class="inner">
            <div class="gallery-item" ng-repeat="imagen in slides">
                <div class="col-md-2">
                    <img ng-src="@{{imagen.path}}" class="img-responsive img-">
                    <a href="@{{imagen.path}}" class="btn btn-light waves-effect waves-light btn-circle">
                        <i class="fe-icon-search"></i>
                    </a>
                </div>
            </div><!-- .gallery-item -->
        </div>
    </div><!-- .gallery-grid --><!-- Elements block END -->
</section>