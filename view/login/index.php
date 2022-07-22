<?php
    session_id('AMOSIS');
    session_start();
    if(isset($_SESSION["usuario"])){
        $usuario = $_SESSION["usuario"];
        if($usuario != ""){
            echo '<script> window.location.href="'.SERVERURL.'dashboard/" ;</script>';
        }
    }

?>
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>AMOSIS | LOGIN</title>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <link rel="icon" type="image/png" href="<?=SERVERURL?>archives/assets/AMOSIS-LOGO.png" sizes="64x64"/>
    <meta name="description" content="Amosis, es un sistema web desarrollado con el objetivo que el usuario pueda tener un control automatizado y eficiente de sus bienes en almacén">
    <meta name="HandheldFriendly" content="true">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
    <link href="<?=SERVERURL;?>view/assets/fontawesome-free-5.12.1-web/css/all.css" rel="stylesheet" />
    <link href="<?=SERVERURL;?>view/assets/css/material-dashboard.css?v=2.1.1" rel="stylesheet" />
    <link href="<?=SERVERURL;?>view/assets/datatables/datatables.css" rel="stylesheet" />
    <link href="<?=SERVERURL;?>view/assets/datatables/responsive.bootstrap.css" rel="stylesheet" />
    <link href="<?=SERVERURL;?>view/assets/datatables/fixedHeader.bootstrap.css" rel="stylesheet" />
    <link href="<?=SERVERURL;?>view/assets/css/amosis-demo.css" rel="stylesheet" />
    <link rel="shortcut icon" type="image/png" href="<?=SERVERURL?>archives/assets/AMOSIS-LOGO.png" sizes="64x64">
    <link rel="apple-touch-icon" href="<?=SERVERURL?>archives/icons/apple-icon-60x60.png">
    <link rel="apple-touch-startup-image" href="<?=SERVERURL?>archives/icons/apple-icon-120x120.png">
    <link rel="manifest" href="<?=SERVERURL;?>manifest.json">
  </head>
  <body>
    <div id="preloader">
        <div id="loader" style="background: url('<?=SERVERURL;?>archives/assets/AMOSIS-LOGO.png') no-repeat center 0; background-size: 200px;top: 30%;">
        </div>
    </div>
    <div class="container mt-5">
        <div class="row mt-5">
            <div class="col-lg-4 col-md-6 ml-auto mr-auto mt-5">
                <div class="card card-login">
                    <form autocomplete="off" class="FormularioAjax" action = "<?php echo SERVERURL;?>login/iniciar_sesion" method="POST" data-form="save" ectype="multipart/form-data">
                        <div class="card-header card-header-amosis text-center">
                            <h4 class="card-title logo-text-amosis">AMOSIS</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-12">
                                    <img width="100%"src="<?=SERVERURL;?>archives/assets/AMOSIS-LOGO.png" alt="Logo del Sistema">
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group bmd-form-group">
                                        <label class="bmd-label-floating">Usuario</label>
                                        <input type="text" name="usuario" class="form-control">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group bmd-form-group">
                                        <label class="bmd-label-floating">Contraseña</label>
                                        <input type="password" name="pass" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
                            <?=$this->registrar;?>
                        </div>
                        <div class="RespuestaAjax">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </body>
  <script src="<?=SERVERURL;?>view/assets/js/core/jquery.min.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/core/popper.min.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/core/bootstrap-material-design.min.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/material-kit.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/moment.min.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/sweetalert2.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/jquery.validate.min.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/jquery.bootstrap-wizard.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/bootstrap-selectpicker.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/bootstrap-datetimepicker.min.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/bootstrap-tagsinput.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/jasny-bootstrap.min.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/fullcalendar.min.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/jquery-jvectormap.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/nouislider.min.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/arrive.min.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/chartist.min.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/plugins/bootstrap-notify.js"></script>
  <script src="<?=SERVERURL;?>view/assets/js/material-dashboard.js?v=2.1.1" type="text/javascript"></script>
  <script src="<?=SERVERURL;?>view/assets/js/main.js"></script>
  <script src="<?=SERVERURL;?>view/assets/demo/demo.js"></script>
  <script src="<?=SERVERURL;?>view/assets/datatables/datatables.js"></script>
  <script src="<?=SERVERURL;?>view/assets/datatables/datatables.bootstrap4.js"></script>
  <script src="<?=SERVERURL;?>view/assets/datatables/datatables.responsive.js"></script>
  <script src="<?=SERVERURL;?>view/assets/datatables/resposive.bootstrap.js"></script>
  <script>
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register("./../sw.js")
        .then(reg => console.log('Registro de SW exitoso', reg))
        .catch(err => console.warn('Error al tratar de registrar el sw', err))
    }
  </script>
</html>