<!-- Full Width Map -->
<div class="fw-section padding-top-3x" id="mapa" ng-controller="mapaController">
    <!-- Wrap your map with ".google-map-container" for usage with info box. -->

        <ng-map default-style="true" zoom="6" center="24.6565829, -101.6932475">
            <info-window id="myInfoWindow">
                <div ng-non-bindable>
                    <h4>@{{selectedCity.name}}</h4>
                </div>
            </info-window>
        </ng-map>

</div><!-- Full Width Map End -->

