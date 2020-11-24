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

  