$(
    function(){
        $(".slide-toggle-First-search").click(function(){
            $("#First-search-input").animate({
                width: "toggle"
            });
        });
    }
);

$(
    function(){
 
        window.addEventListener("load", DeleteForm);
        window.addEventListener("resize", DeleteForm);

        
        function DeleteForm() {

            var w = $( window ).width();

            if(w <= 768) {
                $(".First-search-column").css("display", "none");
                $(".Second-search-field").css("display", "block");
   
            }
            else{
                $(".First-search-column").css("display", "block");
                $(".Second-search-field").css("display", "none");
            }  
         }


    }
);