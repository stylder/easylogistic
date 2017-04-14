<!-- Full Width Map -->
<section class="section-fw next-to-footer" id="mapa" ng-controller="mapaController">
    <!-- Wrap your map with ".google-map-container" for usage with info box. -->
    <div class="google-map-container">
        <ng-map default-style="true" zoom="4" center="23.3655288, -111.5572888">
            <info-window id="myInfoWindow">
                <div ng-non-bindable>
                    <h4>@{{selectedCity.name}}</h4>
                </div>
            </info-window>
        </ng-map>
    </div>
</section><!-- Full Width Map End -->

