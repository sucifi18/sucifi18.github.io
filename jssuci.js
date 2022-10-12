$(document).ready(function(){
    $(".istigfar").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_istigfar = split[1];

        $(".istigfar").removeClass('aktif');
        $("#istigfar_"+id_istigfar).addClass('aktif');

        

        $("#iniloh_1").slideUp();
        $("#iniloh_2").slideUp();
        $("#iniloh_3").slideUp();
        $("#iniloh_"+id_istigfar).slideToggle("medium");
    });
});