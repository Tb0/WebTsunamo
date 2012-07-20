konami = new Konami()
konami.pattern = '38384040373937396665';
konami.code = function() {
  $.fancybox({
              'width': 640,
              'height' : 452,
              'padding': 0,
              'margin' : 0,
              'type' : 'iframe',
              'href' : 'http://www.youtube.com/embed/jvW4UMpr7fU?rel=0&autoplay=1',
              'showCloseButton' : false,
              'onComplete' : function(){
                  $('#fancybox-outer').css('background-color', 'transparent');
              }
          })

}
konami.load()
