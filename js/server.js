var Url = "http://54.94.199.117/WaterDrop/api/board/";
var cpf = "09678577674";


var getFlows = function(){

    $.ajax({ 
        //type: "GET",
        //dataType: "jsonp",
        url: Url,
        crossDomain: true,
        success: function(data){        
            //alert(data);
            $('#billValue').html(data);
            console.log("Resposta",data);
        }, 
        error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr);
            }
    });

}

var getUsage = function(){

    $.ajax({ 
        //type: "GET",
        //dataType: "jsonp",
        url: Url,
        crossDomain: true,
        success: function(data){        
            alert(data);
            $('#usage').html(data);
            console.log("Resposta",data);
        }, 
        error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr);
            }
    });

}




$(function() {

    function updateInfo() {
        //setInterval(getFlows,5000);
    }


    updateInfo();

});

var calcBill = function (valuePerLiter) {

}

