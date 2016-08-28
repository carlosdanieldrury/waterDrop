var Url = "http://54.94.199.117/WaterDrop/api/report";
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
        dataType: "json",
        url: Url + "/monthTotalByUser/" + cpf ,
        crossDomain: true,
        success: function(data){        
            //alert(data);
            var usage = data.total;
            calcBill(parseFloat($("input[name='literCost']").val(), 10), parseFloat(data.total))
            $('#usage').html(usage + " L");
            console.log("Resposta",data.total , usage);
        }, 
        error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr);
            }
    });

}




$(function() {

    function updateInfo() {
        setInterval(getUsage,5000);
    }


    updateInfo();

});

var calcBill = function (valuePerLiter, liters) {
    totalValue = (valuePerLiter * liters).toFixed(2);
    console.log("value total", totalValue , valuePerLiter, liters);
    $('#billValue').html("R$ " + totalValue);
}

