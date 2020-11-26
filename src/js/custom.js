    ymaps.ready(init);
    var myMap;

    function init(){     
      var map = new ymaps.Map ("map", {
        center: [51.741304, 36.149528], 
        zoom: 17
      });
    }



    const icons = document.querySelectorAll('.icon');
    icons.forEach (icon => {  
      icon.addEventListener('click', (event) => { 
        icon.classList.toggle("open");
      });
    });

    $(function () {
      $('.nav-icon-5').click(function () {
        $('.menu__body').toggleClass('show-menu')
    $('body').toggleClass('lock')
  })  
    });


    $('.menu__list a').on('click', function(){ 
      if($('.icon').css('display') !='none'){
        $(".icon").trigger( "click" );
      }
    });


     $(document).ready(function(){
    $(".menu__body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

