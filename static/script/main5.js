var countP = 0 ;
var countZ = 0 ;
var input =1;
var last_div = "";
var conjugate = 0;
var circle_centerY =525;
var countCP = 0

$("#addPole").on("click" ,function(){input =1;
    $(last_div).unbind()
 });
 $(document).on('click','#addConjugate',function(){
    conjugate = 1
    console.log("2kdkdkk")
});
$(document).on('click','#addPole',function(e){
    // $("#uCircle").addClass("active")
    countP= countP+1;
    $(".x").after(        '<div class='+'"allPoles hidden pole '+ 'x'+countP+'">x</div>'    )
    last_div = (".x"+countP+"")
    console.log("before" + countP)
        $(document).on('click','#uCircle',function(p){
            if( input == 1 && conjugate == 0)
            {
            console.log("pole")
        // $("#uCircle").click(function(e){
            $(".x"+countP+"").css("display", "block").offset({  //offset bt77dle el div hyzhr fen
                        left: p.pageX-5  ,
                        top: p.pageY-20 
                    });
            console.log((".x"+countP+""))
            console.log(input)
            // $("#hiddenZero").val(countZ)
            $("#hiddenPx").after('<input class='+"hiddenPx"+countP+' " type="hidden" value = "0"  name='+"locPx"+countP+'>')
            $("#hiddenPy").after('<input class='+"hiddenPy"+countP+' " type="hidden" value = "0"  name='+"locPy"+countP+'>')
            $(".hiddenPx"+countP+"").val(p.pageX);
            $(".hiddenPy"+countP+"").val(p.pageY);
            console.log("#hiddenPx"+countP+"")
            allPoles = $( ".allPoles" ).length;
            // console.log(countP)
            // for (i = 1; i < CountP+1; i++) {
            //     $('.x'+i+'').click(function(){
            //         console.log(22)
            //         $(this).remove()
            //         countP =countP -1;
            //     });
            // }
            $( ".allPoles" ).each(function() {
                $(this).on("click", function(){
                    console.log(22)
                    $(this).remove()
                    countP =countP -1;
                });
            });
            }  
            else if(conjugate ==1 && input == 1 ){
                countCP ++
                $(".x").after(        '<div class='+'"allPoles hidden pole '+ 'cx'+countCP+'">x</div>'    )
                $(".cx"+countCP+"").css("display", "block").offset({  //offset bt77dle el div hyzhr fen
                    left: p.pageX-5  ,
                    top: p.pageY-20 
                });
            console.log((".cx"+countP+""))
            console.log(input)
            // $("#hiddenZero").val(countZ)
            $("#hiddenPx").after('<input class='+"hiddenPx"+countCP+' " type="hidden" value = "0"  name='+"locPx"+countCP+'>')
            $("#hiddenPy").after('<input class='+"hiddenPy"+countCP+' " type="hidden" value = "0"  name='+"locPy"+countCP+'>')
            $(".hiddenPx"+countCP+"").val(p.pageX);
            $(".hiddenPy"+countCP+"").val(p.pageY);
            console.log("#hiddenPx"+countCP+"")
            console.log("dllssllw")
            allPoles = $( ".allPoles" ).length;
            // console.log(countP)
            // for (i = 1; i < CountP+1; i++) {
            //     $('.x'+i+'').click(function(){
            //         console.log(22)
            //         $(this).remove()
            //         countP =countP -1;
            //     });
            // }
            $( ".allPoles" ).each(function() {
                $(this).on("click", function(){
                    console.log(22)
                    $(this).remove()
                    countCP =countCP -1;
                });
        });
        countCP ++
        $(".x").after(        '<div class='+'"allPoles hidden pole '+ 'cx'+countCP+'">x</div>'    )
        $(".cx"+countCP+"").css("display", "block").offset({  //offset bt77dle el div hyzhr fen
            left: p.pageX-5  ,
            top: circle_centerY -(p.pageY-circle_centerY) 
        });
                console.log((".cx"+countCP+""))
                console.log(input)
                // $("#hiddenZero").val(countZ)
                $("#hiddenPx").after('<input class='+"hiddenPx"+countP+' " type="hidden" value = "0"  name='+"locPx"+countCP+'>')
                $("#hiddenPy").after('<input class='+"hiddenPy"+countP+' " type="hidden" value = "0"  name='+"locPy"+countCP+'>')
                $(".hiddenPx"+countCP+"").val(p.pageX);
                $(".hiddenPy"+countCP+"").val(p.pageY);
                console.log("#hiddenPx"+countCP+"")
                allPoles = $( ".allPoles" ).length;
                // console.log(countP)
                // for (i = 1; i < CountP+1; i++) {
                //     $('.x'+i+'').click(function(){
                //         console.log(22)
                //         $(this).remove()
                //         countP =countP -1;
                //     });
                // }
                $( ".allPoles" ).each(function() {
                    $(this).on("click", function(){
                        console.log(22)
                        $(this).remove()
                        countCP =countCP -1;
                    });
                });
                }  
                
        });
});
$("#addZero").on("click" ,function(){
    input =0 ;
    $(last_div).unbind()
});
$(document).on('click','#addZero',function(e){
// $("#addZero").click(function(e){
    // $("#uCircle").addClass("active")
    countZ= countZ+1;
    $(".circle").after(        '<div class='+'"allZeros hidden cir '+ 'circle'+countZ+'"></div>'    )
    console.log("before" + countZ)
    last_div = (".circle"+countZ+"")
        $(document).on('click','#uCircle',function(z){
            if(input ==0)
            {
            console.log("zero")
            console.log(input)
        // $("#uCircle").click(function(e){
            $(".circle"+countZ+"").css("display", "block").offset({  //offset bt77dle el div hyzhr fen
                        left: z.pageX  ,
                        top: z.pageY 
                    });
            console.log((".circle"+countZ+""))
            // $("#hiddenZero").val(countZ)
            $("#hiddenZx").after('<input class='+"hiddenZx"+countZ+' " type="hidden" value="0" name='+"locZx"+countZ+'>')
            $("#hiddenZy").after('<input class='+"hiddenZy"+countZ+' " type="hidden" value="0" name='+"locZy"+countZ+'>')
            $(".hiddenZx"+countZ).val(z.pageX);
            $(".hiddenZy"+countZ).val(z.pageY);
            console.log("after" + countZ)
            allZeros = $( ".allZeros" ).length;
            // console.log(allZeros)
            // for (i = 1; i < CountZ+1; i++) {
            //     $('.circle'+i+'').click(function(){
            //         console.log(23)
            //         $(this).remove()
            //         CountZ =CountZ -1;
            //     });
            // }
            $( ".allZeros" ).each(function() {
                $(this).on("click", function(){
                    console.log(23)
                    $(this).remove()
                    countZ =countZ -1;
                });
            });
            }   

        });
});
$("form").submit(function(e){
    $("#hidden_countZ").val(countZ);
    $("#hidden_countP").val(countP);
    $("#hidden_countP").val(countCP);

});
// all_zeros = $(".allZeros")
// $("#deleteZeros").on("click" ,function(){
//     $(all_zeros).unbind()
// });
// $("html").click(function(){
//     allPoles = $( ".allPoles" ).length;
//     allZeros = $( ".allZeros" ).length;
// });

$(document).on('click','#deleteZeros',function(e){
    console.log("delete_zeros")
    console.log(allPoles)
    console.log(allZeros)
    $( ".allZeros" ).remove();
    countZ = 0;
}); 
$(document).on('click','#deletePoles',function(e){
    console.log("delete_Poles")
    $( ".allPoles" ).remove();
    countP = 0;
});   
$(document).on('click','#deleteAll',function(e){
    console.log("delete_all")
    $( ".allPoles" ).remove();
    $( ".allZeros" ).remove();
    countP = 0; 
    countZ = 0;
});
// for (i = 1; i < CountP+1; i++) {
//     $('.x'+i+'').click(function(){
//         console.log(22)
//         $(this).remove()
//         countP = countP-1;
//     });
// }
// allZeros = $( ".allZeros" ).length;
// for (i = 1; i < CountZ+1; i++) {
//     $('.circle'+i+'').click(function(){
//         console.log(23)
//         $(this).remove()
//         countZ = countZ-1;
//     });
// }
// allPoles = $(".allPoles")
// allZeros = $(".allZeros")
// console.log(allPoles)
// console.log(allPoles)

// for (i = 0; i < allPoles; i++) {
//     $(document).on('click','".x"'+i+'""',function(e){
//         $(this).remove()
//     });
// }
// for (i = 0; i < allZeros; i++) {
//     $(document).on('click','".circle"'+countZ+'""',function(e){
//         $(this).remove()
//     });
// }
// allPoles = $( ".allPoles" ).length;