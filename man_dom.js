$(document).ready(function(){
    
    //$('#titulo').text('Encabezado Modificado'); solo para editar el texto
    
    $('#titulo').html('<u>Encabezado Modificado</u>'); //para modificar el html

    var nombre = $('#nombre');

    nombre.on('change', function(){
        $('#titulo').text(nombre.val());
    })

    $('#enlace').text('falconmasters.com');
    $('#enlace').attr('href', 'http://www.falconmasters.com');//attr recibe 2 parametros, 1.permite modificar el atributo que 
    //quermos modificar y el segundo es el valor

    //para modificar multiples atributos
    $('#enlace').attr({
        'class': 'azul',
        'target': '_blank'
    });

});