 $(function(){
        $(document).scroll(function(){
          var $nav = $("#mainNAV");
          $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
        })
      });


$("h5 span").css("color","#f2c111");

$("#Red").css("color", "#b00d07")


