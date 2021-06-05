var countP = 0 ;
var countZ = 0 ;
$("#addPole").click(function(e){
    // $("#uCircle").addClass("active")
    countP= countP+1;
    console.log(countP);
    $(".x").after(    '<div class='+"hidden x"+countP+'>x</div>'    )
    $("#hiddenPole").val(countP)
});
$("#addZero").click(function(e){
    // $("#uCircle").addClass("active")
    countZ= countZ+1;
    $(".circle").after(        '<div class='+"hidden circle"+countZ+'></div>'    )
    $("#hiddenZero").val(countZ)
})
$(document).on('change','#pole_zero',function(){
    var input = $("#pole_zero").val(); 
    console.log(input);
    $("#uCircle").click(function(e){
        console.log("count poles" +countP);
        console.log("count zeros" +countZ);
        if (input == "zero")
        {
            console.log("hey")
            for (var i = 0 ;i <countZ ; i++){
                console.log("hossam")
                $(".circle"+i+"").css("display", "block").offset({  //offset bt77dle el div hyzhr fen
                    left: e.pageX  ,
                    top: e.pageY 
                });
                $("#hiddenZx").after('<input id='+"hiddenZx"+i+' class="visually-hidden " type="text" value="0" name='+"locZx"+i+'>')
                $("#hiddenZy").after('<input id='+"hiddenZy"+i+' class="visually-hidden " type="text" value="0" name='+"locZx"+i+'>')
                $("#hiddenZx"+i+"").val(e.pageX);
                $("#hiddenZy"+i+"").val(e.pageY);
                console.log(input)
                console.log("pagex is: "+ e.pageX + " & pageY is: " + e.pageY)
            }
            
        }else if (input == "pole")
        {   
            console.log("hey2")
            for (var i = 0 ; i< $("#hiddenPole").val() ; i++)
            {
                console.log("ahmed")
                $(".x" + i).css("display", "block").offset({  //offset bt77dle el div hyzhr fen
                    left: e.pageX,
                    top: e.pageY-30 
                });
                $("#hiddenPx").val(e.pageX);
                $("#hiddenPy").val(e.pageY);
            }
        }
        else{
            $(".circle").fadeIn(1000).offset({  //offset bt77dle el div hyzhr fen
                left: e.pageX  ,
                top: e.pageY 
            });
            $("#hiddenZx").val(e.pageX);
            $("#hiddenZy").val(e.pageY);
            console.log(input)
            console.log("pagex is: "+ e.pageX + " & pageY is: " + e.pageY)
        }
    });
});  
