<!-- Gallery Grid -->
<div ng-controller="galeriaController">

    <div class="row" ng-repeat="tipo_transporte in imagenes">
        <div class="col-md-2" ng-repeat="imagen in tipo_transporte">
            <img ng-src="@{{imagen.path}}"/>
        </div>
    </div>


    <div class="wrap-gallery">
        <div class="gallery">
            <div ng-repeat="tipo_transporte in imagenes">
                <div class="imgWrap imgWrap1" ng-if="tipo_transporte.length > 0"
                     style="background-image:url(http://lorempixel.com/1200/800/sports/2); ">
                    <div class="full-content">
                        <!--Image Gallery Begins-->
                        <div class="images">
                            <ul class="gallery">
                                <li>
                                    <a href="http://lorempixel.com/1200/800/sports/1"
                                       class="with-caption image-link">
                                        <img ng-src="http://lorempixel.com/150/125/sports/1"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://lorempixel.com/1200/800/sports/1"
                                       class="with-caption image-link">
                                        <img src="http://lorempixel.com/150/125/sports/1"/>
                                    </a>
                                </li>

                            </ul>
                            <!--Image Gallery Ends-->
                        </div>
                    </div>
                </div>

            </div>


            <div class="imgWrap imgWrap2" style="background-image:url(http://lorempixel.com/1920/1080/sports/2);">
                <div class="full-content">
                    <div class="images">
                        <ul class="gallery">
                            <li>
                                <a href="http://lorempixel.com/1200/800/sports/1"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/sports/1"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/sports/2"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/sports/2"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/sports/3"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/sports/3"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/sports/4"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/sports/5"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/sports/5"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/sports/5"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/sports/6"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/sports/6"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/sports/7"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/sports/7"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/sports/8"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/sports/8"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/sports/9"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/sports/9"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!--Image Gallery Ends-->
                </div>
            </div>
            <div class="imgWrap imgWrap3" style="background-image:url(http://lorempixel.com/1920/1080/people/9);">
                <div class="full-content">
                    <div class="images">
                        <ul class="gallery">
                            <li>
                                <a href="http://lorempixel.com/1200/800/people/1"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/people/1"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/people/2"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/people/2"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/people/3"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/people/3"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/people/4"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/people/5"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/people/5"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/people/5"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/people/6"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/people/6"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/people/7"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/people/7"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/people/8"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/people/8"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://lorempixel.com/1200/800/people/9"
                                   class="with-caption image-link">
                                    <img src="http://lorempixel.com/150/125/people/9"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!--Image Gallery Ends-->
                </div>
            </div>


        </div>

        <div id="close" title="Close (Esc)" class="mfp-close">XXXS</div>
    </div>


</div>