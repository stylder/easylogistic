<!-- Footer -->
<footer class="footer dark-skin" style="background-image: url(img/footer/footer_bg.jpg)" ng-controller="footerController">
    <div class="top-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-12">
                    <section class="widget widget_text">
                        <a class="site-logo">
                            <img src="img/logos-main/logo_01.png" alt="Promo">
                        </a><!-- .site-logo -->
                        <p>¿Necesitas hablar con nosotros? </p>
                        <p>Contáctanos vía correo eléctronico</p>
                    </section><!-- .widget.widget_text -->
                </div><!-- .col-md-3 -->

                <div class="clearfix visible-sm"></div>


                <div class="col-md-9 col-sm-12">
                    <!-- Subscribe Widget -->
                    <section class="widget widget_subscribe">
                        <h3 class="widget-title">
                            <i class="fe-icon-paper-clip"></i>
                            Contactanos
                        </h3>
                        <form method="post" class="subscribe-box">
                            <input type="text" class="form-control input-sm" placeholder="Correo" ng-model="contacto.email">
                            <textarea class="form-control space-bottom" rows="6" ng-model="contacto.texto"
                                      placeholder="Mensaje"></textarea>
                            <button ng-click="enviarCorreo()" class="btn btn-primary btn-block btn-sm waves-effect waves-light">
                                Enviar
                            </button>
                        </form>
                    </section><!-- widget_subscribe -->
                </div><!-- .col-md-3 -->
            </div><!-- .row -->
        </div>
    </div>




    <div class="copyright">
        <div class="container">
            <div class="column">
                <p>&copy; EasyLogistic 2017.
            </div><!-- .column -->
        </div>
    </div><!-- .copyright -->

</footer><!-- .footer -->
