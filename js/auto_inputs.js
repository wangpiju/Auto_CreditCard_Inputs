$( "#input1" ).keypress( function() {
       var value = $( "#input1" ).val();
      //alert( value.length)
       if(value.length >= 3)
            $( '#input2').focus();
});

$('#input2').on( 'keypress', function () {
     var value = $( "#input2" ).val();
       //alert(value.length)
       if(value.length >= 3)
            $( '#input3').focus();
      
}).on('keydown', function(e) {
        if (e.keyCode==8){
             var value = $( "#input2" ).val();
               
             if(value.length < = 0)
                     $( '#input1').focus();
        }
        
});


$('#input3').on( 'keypress', function () {
      var value = $( "#input3" ).val();
      
       if(value.length >= 3)
            $( '#input4').focus();
      
}).on('keydown', function(e) {
        if (e.keyCode==8){
             var value = $( "#input3" ).val();
               
             if(value.length < = 0)
                     $( '#input2').focus();
        }
        
});


$('#input4').on( 'keydown', function (e) {
     if (e.keyCode==8){
      var value = $( "#input4" ).val();
     
      if(value.length <= 0)
       $( '#input3').focus();
     }  
});

$('#input2').click( function(){
     var input1_value  = $( '#input1').val();
     
     if(input1_value == '')
          $( '#input1').focus();
     
});

$('#input3').click( function(){
     var input1_value  = $( '#input1').val();
     var input2_value  = $( '#input2').val();
     
     
     if(input1_value == '')
          $( '#input1').focus();
     else if(input2_value == '' )
          $( '#input2').focus();
});

$('#input4').click( function(){
     var input1_value  = $( '#input1').val();
     var input2_value  = $( '#input2').val();
     var input3_value  = $( '#input3').val();
     
     if(input1_value == '')
          $( '#input1').focus();
     else if(input2_value == '' )
          $( '#input2').focus();
     else if(input3_value == '' )
          $( '#input3').focus();
});
