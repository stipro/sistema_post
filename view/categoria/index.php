<?php require 'view/templeate/head.php';?>
<?php
    if(!$_SESSION["almacen"]){
        echo "
        <script>
            location.href = '".SERVERURL."acerca/';
        </script>
        ";
    }
?>
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header card-header-amosis">
                        <h4 class="card-title">Categorias</h4>
                        <p class="card-category">Lista de tus Categorias</p>
                    </div>
                    <div class="card-body table-responsive">
                        <div class="row">
                            <div class="col-md-4 col-sm-6">
                                <div class="card card-stats">
                                    <div class="card-header card-header-info-amosis card-header-icon">
                                        <div class="card-icon">
                                            <i class="fa fa-book-open"></i>
                                        </div>
                                        <p class="card-category">Categorias</p>
                                        <h3 class="card-title"><?=$this->numero_categoria;?></h3>
                                    </div>
                                    <div class="card-footer">
                                        <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#modal">
                                        <i class="fa fa-plus"></i> Nueva Categoria
                                        </button>
                                        <div id="modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5>Nueva Categoria</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <form autocomplete="off" class="FormularioAjax">
                                                        <div class="modal-body">
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <div class="form-group">
                                                                        <label class="bmd-label-floating">Nombre de la Categoria</label>
                                                                        <input type="text" id="nombre-agregar" required class="form-control">
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12">
                                                                    <div class="form-group">
                                                                        <div class="form-group bmd-form-group">
                                                                            <label class="bmd-label-floating"> Detalle de la Categoria</label>
                                                                            <textarea id="detalle-agregar" class="form-control" rows="5"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button id="btn-modal-agregar" class="btn btn-sm btn-primary">Guardar</button>
                                                        </div>
                                                        <div class="RespuestaAjax">

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table id="tb-prov" class="table table-sm table-hover table-striped">
                            <thead class="text-primary-amosis">
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Detalle</th>
                                    <th>Opcion</th>
                                </tr>
                            </thead>
                            <tbody id="table">
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modal-editar" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">EDITAR CATEGORIA</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12" id="modal-body">
                            
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" id="btn-modal-actualizar" class="btn btn-success">Guardar</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>
<?php require 'view/templeate/footer.php';?>
<script>
       let tabla = function(){
        let tokenlistar = "ListaCategoria";
        $.post('<?php echo SERVERURL;?>categoria/lista_categoria',{tokenlistar},function(response){
            let table = $("#tb-prov").DataTable();
            table.destroy();
            $("#table").html(response);
            var tablecc =$('#tb-prov').DataTable({
                responsive: true,
                "language": {
                    "lengthMenu": "Mostrar _MENU_  registros por pagina",
                    "zeroRecords": "No se encontraron resultados - Lo sentimos",
                    "info": "Mostrar pagina _PAGE_ de _PAGES_",
                    "infoEmpty": "No hay registros disponibles",
                    "infoFiltered": "(filtrado de _MAX_ registros totales)",
                    "decimal":        "",
                    "emptyTable":     "No hay datos disponibles en la tabla",
                    "info":           "Mostrando _START_ a _END_ de _TOTAL_ entradas",
                    "infoEmpty":      "Mostrando 0 a 0 de 0 entradas",
                    "infoFiltered":   "(filtrado de _MAX_ entradas totales)",
                    "infoPostFix":    "",
                    "thousands":      ",",
                    "lengthMenu":     "Mostrar _MENU_ entradas",
                    "loadingRecords": "Cargando ...",
                    "processing":     "procesando...",
                    "search":         "Buscar:",
                    "zeroRecords":    "No se encontraron registros coincidentes",
                    "paginate": {
                        "first":      "Primero",
                        "last":       "Ultimo",
                        "next":       "Siguiente",
                        "previous":   "Anterior"
                    },
                    "aria": {
                        "sortAscending":  ": active para ordenar la columna ascendente",
                        "sortDescending": ": active para ordenar la columna descendente"
                    }
                },
            });
        });
    } 
    $(document).ready(function(){
        tabla();
    });
    let categoriaeditar = function(id){
        $.post('<?=SERVERURL;?>categoria/formularioeditar',{id},function(response){
            $("#modal-body").html(response);
        });
    }
    $("#btn-modal-actualizar").click(function(){
        let nombre = $("#marca-editar").val();
        if(nombre.length == 0){
            showNotification('bottom','center','El nombre de la categoria debe ser obligatorio','danger');
        }else{
            let datos = {
                "Id" : $("#id-update").val(),
                "Nombre" : $("#marca-editar").val(),
                "Nombreo" : $("#marcao-editar").val(),
                "Detalle" : $("#detalle-editar").val()
            }
            $.post('<?=SERVERURL;?>categoria/categoria_actualizar',datos,function(response){
                if(response == 1){
                    showNotification('bottom','center','Tu categoria fue actualizada correctamente','success');
                    tabla();
                }else{
                    showNotification('bottom','center','La categoria ya existe','danger');
                }
            });
        }
    });
    $("#btn-modal-agregar").click(function(e){
        e.preventDefault();
        let nombre = $("#nombre-agregar").val();
        if(nombre.length == 0){
            showNotification('bottom','center','El nombre de la categoria debe ser obligatorio','danger');
        }else{
            let datos = {
                "Nombre" : $("#nombre-agregar").val(),
                "Detalle" : $("#detalle-agregar").val()
            }
            $.post('<?=SERVERURL;?>categoria/nuevacategoria',datos,function(response){
                if(response == 1){
                    showNotification('bottom','center','Tu categoria fue agregada correctamente','success');
                    $('.FormularioAjax')[0].reset();
                    tabla();
                }else{
                    showNotification('bottom','center','Ya existe esa categoria','danger');
                }
            });
        }
    });
</script>