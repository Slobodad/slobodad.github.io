'use strict'

$(document).ready(function(){

    // Slider
    $('.instruction__slider').slick({
        centerMode:false,     
        draggable:false,    
        arrows:false,    
        autoplay:true,
        autoplaySpeed:3000,     
        slidesToShow:1,     
        slidesToScroll:1,   
        dots:false,
    });

    $(function() {
        $('form').submit(function(e) {
          var form = $(this);
          $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form.serialize()
          }).done(function() {
            alert('success');
          }).fail(function() {
            alert('fail');
          });
          e.preventDefault(); 
        });
    });    
})

