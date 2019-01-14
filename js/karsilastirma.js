$.getJSON("markalar.json", function(sonuc){
    console.log(sonuc)
    $.each(sonuc, function(index, value){
        var row="";
        row +='<option value="'+value.marka+'">'+value.marka+'</option>';
        $("#marka").append(row);
    })
});
$("#marka").on("change", function(){
    var marka =$(this).val();
    $("#modeller").attr("disabled", false).html("<option value=''>Seçin..</option>");
    $.getJSON("markalar.json", function(sonuc){
        $.each(sonuc, function(index, value){
            var row="";
            if(value.marka==marka)
            {
                row +='<option value="'+value.modeller+'">'+value.modeller+'</option>';
                $("#modeller").append(row);
            }
        });
    });
    
});