$(document).ready(function () {
    



// $(".Top-head").sticky({ topSpacing: 0, className: 'fixed', zIndex: 500 });

  var nav = $('.Header');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 32) {
			nav.addClass("Fixed");
		} else {
			nav.removeClass("Fixed");
		}
	});


// tabs
$(function(){

    $("#wr-tabs").on("click", ".tab", function(){

        var tabs = $("#wr-tabs .tab"),
            cont = $("#wr-tabs").find(".tab-cont");
        
        tabs.removeClass("active");
        cont.removeClass("active");
        
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");

        return false;
    });
});

$('#main-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots:false,
    // navClass: ['owl-prev1','owl-next1'],
    navText: ['<span class="icon owlarrow"></span>','<span class="icon owlarrow"></span>'],
    responsiveClass:true,
    responsive:{
        320:{
            nav:false,
            dots:true
        },
        768:{
            nav:true,
            items:1,
            dots:false
        }
    }
    
});

     

$("#Vkladki").slick({
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 300,
    // centerMode: true,
    variableWidth: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><</button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button">></button>',
    responsive: [
    {
      breakpoint: 992,
        settings: {
        slidesToShow: 5
        }
        },
    {
      breakpoint: 767,
    settings: {
        slidesToShow: 4
        }
    },
    {
      breakpoint: 600,
    settings: {
        slidesToShow: 3
        }
    },
    {
      breakpoint: 400,
    settings: {
        slidesToShow: 2
        }
    }
      ]
  });



 




$(".vidtovar").slick({
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    speed: 300,
    // centerMode: true,
    variableWidth: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><</button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button">></button>',
    responsive: [
    {
      breakpoint: 992,
        settings: {
        slidesToShow: 5
        }
        },
    {
      breakpoint: 767,
    settings: {
        slidesToShow: 4
        }
    },
    {
      breakpoint: 600,
    settings: {
        slidesToShow: 3
        }
    },
    {
      breakpoint: 400,
    settings: {
        slidesToShow: 3
        }
    }
      ]
  });


$(".VkadkiUser").slick({
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    speed: 300,
    // centerMode: true,
    variableWidth: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><</button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button">></button>',
    responsive: [
    {
      breakpoint: 992,
        settings: {
        slidesToShow: 3
        }
        },
    {
      breakpoint: 767,
    settings: {
        slidesToShow: 4
        }
    },
    {
      breakpoint: 600,
    settings: {
        slidesToShow: 3
        }
    },
    {
      breakpoint: 400,
    settings: {
        slidesToShow: 3
        }
    }
      ]
  });

 

$('.Carousel-tovar').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    items:4,
    dots:false,
    navClass: ['slick-prev-t','slick-next-t'],

    // navText: ['<span class="icon owlarrow"></span>','<span class="icon owlarrow"></span>'],
    // prevArrow: '<button class="slick-prev-t" aria-label="Previous" type="button"><</button>',
    // nextArrow: '<button class="slick-next-t" aria-label="Next" type="button">></button>',

    responsiveClass:true,
    responsive:{
        320:{
            items:1
        },
        600:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }

    }
    
});


$('.Carousel-tovar2').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items:6,
  dots:false,
  navClass: ['slick-prev-t','slick-next-t'],

  // navText: ['<span class="icon owlarrow"></span>','<span class="icon owlarrow"></span>'],
  // prevArrow: '<button class="slick-prev-t" aria-label="Previous" type="button"><</button>',
  // nextArrow: '<button class="slick-next-t" aria-label="Next" type="button">></button>',

  responsiveClass:true,
  responsive:{
      320:{
          items:1
      },
      600:{
          items:2
      },
      768:{
          items:4
      },
      992:{
          items:6
      }

  }
  
});

  //Slider - reviews
  $(".Reviews_cont").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 300,
    // centerMode: true,
    // variableWidth: true,
    prevArrow: '<button class="slick-prev-r slick-button" aria-label="Previous" type="button"><div class="arrow"></div></button>',
    nextArrow: '<button class="slick-next-r slick-button" aria-label="Next" type="button"><div class="arrow"></div></button>',
    
  });


  $(".Document").slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    // centerMode: true,
    // variableWidth: true,
    prevArrow: '<button class="slick-prev-t" aria-label="Previous" type="button"><</button>',
    nextArrow: '<button class="slick-next-t" aria-label="Next" type="button">></button>',
    responsive: [
      {
        breakpoint: 992,
          settings: {
          slidesToShow: 3
          }
          },
      {
        breakpoint: 768,
      settings: {
          slidesToShow: 2
          }
      },
      {
        breakpoint: 500,
      settings: {
          slidesToShow: 1
          }
      }
        ]
  });


  //больше - меньше
  $(".more-text").click(function() {

    // var el = $(this).parent().parent().children(".Item");
    var el = $(this).parent().children(".question_text");

    el.toggleClass( "minus" );

    if(el.hasClass('minus')) {
            $(this).html("меньше<span></span>");
            $(this).addClass('mini-text');
            el.fadeIn();
            
        } else {
            $(this).html("больше<span></span>");
            $(this).removeClass('mini-text');
            el.fadeIn();
        }
    });

  //больше - меньше2
  $(".more-text2").click(function() {
    var el = $(this).parent().children(".Product-desc .in");
    el.toggleClass( "minus" );
    if(el.hasClass('minus')) {
            $(this).html("Показать меньше<span></span>");
            $(this).addClass('minus');
            el.fadeIn();
        } else {
            $(this).html("Показать больше<span></span>");
            $(this).removeClass('minus');
            el.fadeIn();
        }
    });

  //больше - меньше - more-show-pdf
  $(".more-show-pdf").click(function() {
    var el = $(this).parent().children(".Search_cont .in");
    el.toggleClass( "minus" );
    if(el.hasClass('minus')) {
            $(this).html("Показать меньше<span></span>");
            $(this).addClass('minus');
            el.fadeIn();
        } else {
            $(this).html("Показать больше<span></span>");
            $(this).removeClass('minus');
            el.fadeIn();
        }
    });

    $(".more-show-tovar").click(function() {
      var el = $(this).parent().children(".CabinetContIn .Products-user");
      el.toggleClass( "minus" );
      if(el.hasClass('minus')) {
              $(this).html("Показать меньше<span></span>");
              $(this).addClass('minus');
              el.fadeIn();
          } else {
              $(this).html("Показать больше<span></span>");
              $(this).removeClass('minus');
              el.fadeIn();
          }
      });

  $(".moreCategory").click(function() {

    // var el = $(this).parent().parent().children(".Item");
    var el = $(this).parent().children(".AllCategory");

    el.toggleClass( "minus" );

    if(el.hasClass('minus')) {
            $(this).html("Скрыть");
            $(this).addClass('mini-text');
            el.fadeIn();
            
        } else {
            $(this).html("Показать все");
            $(this).removeClass('mini-text');
            el.fadeIn();
        }
        return false;
    });



  $(".ShowSideBar").click(function() {
    var el = $("#sidebar");
    el.toggleClass( "active" );
    if(el.hasClass('active')) {
            $(this).addClass('active');
            el.fadeIn();
            
        } else {
            $(this).removeClass('active');
            el.fadeOut();
        }
        return false;
    });






  //animate number
  var show = true;
  var countbox = ".Market-status";
  $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.number_m').css('opacity', '1');
          $('.number_m').spincrement({
              thousandSeparator: "",
              duration: 1500
          });
           
          show = false;
      }
  });


//fix logo
  $('#Logo-big').fixer({
    gap: 500
});

$('.Logo-big2').stickySidebar({
    topSpacing: 100,
    bottomSpacing: 200
  });


    // form
    (function ($) {
      function topLabel(inputType) {
          $(inputType).each(function () {
              var $this = $(this);
              // on focus add class active to label
              $this.focus(function () {
                  $this.next().addClass("active");
              });
              //on blur check field and remove class if needed
              $this.blur(function () {
                  if ($this.val() === '' || $this.val() === 'blank') {
                      $this.next().removeClass();
                  }
              });
          });
      }
      // just add a class of "topLabel to the input field!"
      topLabel(".topLabel");
  })(jQuery);





$(".fa-search").click(function(){
  $(".Info-bar_seach, .input, .fa-search").toggleClass("active");
  $("input.input").focus();
});

$('#hamburger').click(function (e) {
    e.stopPropagation();
    $('.dropDownMenu').fadeToggle();
    $(this).toggleClass('active');
});

$('body').click(function () {
    $('.dropDownMenu').fadeOut();
    $('#hamburger').removeClass("active");

});

$('.dropDownMenu').click(function (e) {
    e.stopPropagation();
});

$('.bpopup').click(function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $(href).bPopup({
            closeClass:'close'
        });
});


// function setCheckboxes(){
//     $(':checkbox').filter(':not(.jsE>:checkbox)').each(function(){
//       var T = $(this);
//       T.wrap('<div class="checkbox jsE'+(T.is(':checked') ? ' checked' : '')+'"></div>');
//       var P = T.parent('.checkbox');
  
//       T.on('click',function(){
//         if(T.is(':checked')) P.addClass('checked');
//         else P.removeClass('checked');
//       });
//     });
//   };
  
//   $(function(){
//     setCheckboxes();
//   });
  
$("input#cbx").on("click", function(){
    if($(this).prop("checked")){
        $('#tab1').removeClass("active");
        $('#tab2').addClass("active");
        $('#tabcont1').removeClass("active");
        $('#tabcont2').addClass("active");
    }else{
        $('#tab1').addClass("active");
        $('#tab2').removeClass("active");
        $('#tabcont1').addClass("active");
        $('#tabcont2').removeClass("active");
    }
});






    // select
  $("#question").chained("#otdel");

  $('.Block-select select').change(function(){
      
    $select = $('select#question>option:selected').attr('data-color');
    $select2 = $('select#otdel>option:selected').attr('data-color');

    $('.Answer .Answer_text').hide(); 

    if ($select == 1) {
      //   $('.Answer .Answer_text').hide();   
        $('#text1').show(); 			
    }
    if ($select == 2) {
      //   $('.Answer .Answer_text').hide();    
        $('#text2').show(); 			
    }
    if ($select == 3) {
      //   $('.Answer .Answer_text').hide();    
        $('#text3').show(); 			
    }
    if ($select == 4) {
      //   $('.Answer .Answer_text').hide();     
        $('#text4').show(); 			
    }
    if ($select == 5) {
      //   $('.Answer .Answer_text').hide();     
        $('#text5').show(); 			
    }
    if ($select == 6) {
        $('.Answer .Answer_text').hide();     
        $('#text6').show(); 			
    }
    if ($select == 7) {
        $('.Answer .Answer_text').hide();     
        $('#text7').show(); 			
    }
    if ($select == 8) {
        $('.Answer .Answer_text').hide();     
        $('#text8').show(); 			
    }
    if ($select == 9) {
        $('.Answer .Answer_text').hide();     
        $('#text9').show(); 			
    }
    if ($select == 10) {
        $('.Answer .Answer_text').hide();     
        $('#text10').show(); 			
    }
    if ($select == 11) {
        $('.Answer .Answer_text').hide();     
        $('#text11').show(); 			
    }
    if ($select == 12) {
        $('.Answer .Answer_text').hide();     
        $('#text12').show(); 			
    }
    if ($select == 13) {
        $('.Answer .Answer_text').hide();     
        $('#text5').show(); 			
    }
    if ($select == 13) {
        $('.Answer .Answer_text').hide();     
        $('#text5').show(); 			
    }
    if ($select == 14) {
        $('.Answer .Answer_text').hide();     
        $('#text14').show(); 			
    }
    if ($select == 15) {
        $('.Answer .Answer_text').hide();     
        $('#text15').show(); 			
    }
    if ($select == 16) {
        $('.Answer .Answer_text').hide();     
        $('#text16').show(); 			
    }
    else if ($select2 == 0) {
      // $('.Answer .Answer_text').hide(); 
    }

});


$('body').on('change', '#filtr-product', function(){
  var id = $(this).val(), 
      allLinks = $('.SReport_cont_wrap');

  if(id === 'all') {
      allLinks.show();

  } else {
      allLinks.hide();
      $('#'+id).show();
  }
});


// выбор количествав корзине
$('.minus').click(function () {
  var $input = $('input#nomer');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});

$('.plus').click(function () {
  var $input = $('input#nomer')
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});



$('.Like').click(function (e) {
  e.stopPropagation();
  $(this).toggleClass('active');

});


$(function(){

  $("#Rev-tabs .rev-head .rev-tab").on("click", function(){
      var tabs = $("#Rev-tabs .rev-head .rev-tab"),
          cont = $("#Rev-tabs .rev-tab-cont");
    // Удаляем классы active
      tabs.removeClass("active");
      cont.removeClass("active");
    // Добавляем классы active
      $(this).addClass("active");
      cont.eq($(this).index()).addClass("active");
      return false;
  });
});

$(function(){
  $("#WR-News .tabs .tab").on("click", function(){
      var tabs = $("#WR-News .tabs .tab"),
          cont = $("#WR-News .News-tab-cont");
    // Удаляем классы active
      tabs.removeClass("active");
      cont.removeClass("active");
    // Добавляем классы active
      $(this).addClass("active");
      cont.eq($(this).index()).addClass("active");
      return false;
  });
});

$(function(){
  $("#UserCab .CabinetTop .UserTabs .tab").on("click", function(){
      var tabs = $("#UserCab .CabinetTop .UserTabs .tab"),
          cont = $("#UserCab .CabinetContent .CabinetCont");
    // Удаляем классы active
      tabs.removeClass("active");
      cont.removeClass("active");
    // Добавляем классы active
      $(this).addClass("active");
      cont.eq($(this).index()).addClass("active");
      return false;
  });
});
$(function(){
  $(".FormTabs .FormTab .tab").on("click", function(){
      var tabs = $(".FormTabs .FormTab .tab"),
          cont = $(".FormTabs .FormTabContent .FormTabCont");
    // Удаляем классы active
      tabs.removeClass("active");
      cont.removeClass("active");
    // Добавляем классы active
      $(this).addClass("active");
      cont.eq($(this).index()).addClass("active");
      return false;
  });
});




$('.vidtovar .labe').click(function() {
  $(this).siblings().removeClass('active');
  // $('.vybor').text('Выбрать');

  $(this).addClass('active');
  // $('.vybor', this).text('Выбрано');
  // $('#Forma-calc [name="upakovka"]').val($('.hd1', this).text());	
  // $('#upakovka, #upakovka2').html($('.hd1', this).text());
});





});//$(document).ready





$(window).load(function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    directionNav: false, 
    animationLoop: false,
    slideshow: false,
    itemWidth: 80,
    itemMargin: 9,
    asNavFor: '#slider'
  });

  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    directionNav: true,  
    animationLoop: true,
    slideshow: false,
    sync: "#carousel",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
});

