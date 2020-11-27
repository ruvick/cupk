ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты
        center:[51.741304, 36.149528],
        // Масштаб карты
        zoom: 17,
        // Выключаем все управление картой
        controls: []
    }); 
            
    var myGeoObjects = [];
    
    // Указываем координаты метки
    myGeoObjects = new ymaps.Placemark([51.741304, 36.149528],{
                    balloonContentBody: '\'ЦЕНТР ЮРИДИЧЕСКОЙ ПОДДЕРЖКИ В КУРСКЕ\'',
                    },{
                    iconLayout: 'default#image',
                    // Путь до нашей картинки
                    iconImageHref: 'img/icon/mappointer.svg', 
                    // Размеры иконки
                    iconImageSize: [70, 70],
                    // Смещение верхнего угла относительно основания иконки
                    iconImageOffset: [-35, -35]
    });
                
    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
    });
    
    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    // Отключим zoom
    myMap.behaviors.disable('scrollZoom');

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



jQuery('.header__form button').click(function(e){ 
        e.preventDefault();
        
        let persPhone = jQuery('.header__form input[name=tel]').val(); 
        if ((persPhone == "")||(persPhone.indexOf("_")>0)) {
            alert("Заполните поле телефон!");
            return;
        }
        
        var  jqXHR = jQuery.post(
          "../sender/send.php",
            {
                phone: jQuery('.header__form input[name=tel]').val(),    
                name: jQuery('.header__form input[name=name]').val(),
                mail: jQuery('.header__form input[name=text]').val(),
            }
            
        );
        
        
        jqXHR.done(function (responce) {
            console.log(responce);
            document.location.href = "../thank-you.html"; 
            jQuery('.header__form input[name=tel]').val("");  
            jQuery('.header__form input[name=name]').val("");
            jQuery('.header__form input[name=text]').val("");
        });
        
        jqXHR.fail(function (responce) {
            console.log(responce);
            alert("Произошла ошибка попробуйте позднее!");
        });
 
    });