$(document).ready(function(){
     $(".test").click(function() {
        if($(this).next().is(":hidden"))
        {
             $(this).next().css('display','inline'); 
        }
         else
        {
             $(this).next().css('display','none'); 
        }
        });

        $(".button").click(function() {
            if( $(this).next().css("background-color") == "rgba(0, 0, 0, 0)"){
                $(this).next().css("background-color",'rgba(0, 0, 0, 1)');
                $(this).css("background","green")
            }
            else{
                $(this).next().css("background-color",'rgba(0, 0, 0, 0)');
                $(this).css("background","red")
            }

        });
    });
