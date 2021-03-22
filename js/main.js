

$(window).resize(function(event){
   adaptive_function();
});
function adaptive_header(w) {
   var headerMenu=$('.header-menu');
   if(w.matches){
      if(!$('.header-lang-item_menu').hasClass('done')){
         $('.header-lang-item_menu').addClass('done').appendTo(headerMenu);
      }
   }
   else{
      $.each($('.header-lang-item_menu'), function(index, val) {
            if($(this).hasClass('done')){
               $(this).removeClass('done').prependTo($('.header-lang-menu'));
            }
         
      });
   }
}
function adaptive_function() {
   var w=window.matchMedia('(max-width: 992px)');
   adaptive_header(w);
}
   adaptive_function();

   $('.header-menu__icon, .set-city').click(function(event) {
      $(this).toggleClass('active');
      $('.header-menu').toggleClass('active');
      if($('.menu-short').hasClass('clickanimtable')){
         $('.menu-short').removeClass('clickanimtable')
      }
      if($(this).hasClass('active')){
         $('body').data('scroll',$(window).scrollTop());
      }
         $('body').toggleClass('lock');
      if(!$(this).hasClass('active')){
        $('body,html').scrollTop(parseInt($('bode').data('scroll')));
      }
   });
   $('.header-bottom-menu__link').click(function(event){
      $('.header-menu').removeClass('active');
   });
      /*var headerLang=$('.bussines');
   if(w.matches){
      if(!headerLang.hasClass('done')){
         headerLang.addClass('done').appendTo(headerMenu);
   
      }
   }else{
      if(headerLang.hasClass('done')){
         headerLang.removeClass('done').prependTo($('.header-top'));
      }
   }*/
   $(window).resize(function(event){
      adaptive_btn();
   });
   function adaptive_b(w) {
      if(w.matches){
         if($('.send').hasClass('contacts-menu__link')){
            $('.send').removeClass('contacts-menu__link');
            $('.send').addClass('btn');
         }
      }
      else{
         $('.send').removeClass('btn');
            $('.send').addClass('contacts-menu__link');
      }
   }
   function adaptive_btn() {
      var w=window.matchMedia('(max-width: 480px)');
      adaptive_b(w);
   }

   $('.web').click(function(event) {
      if(!($('.apps-metka').hasClass('hidden'))){
         $('.apps-metka').toggleClass('hidden');
      }
      if(!($('.other-metka').hasClass('hidden'))){
         $('.other-metka').toggleClass('hidden');
      }
      if($('.web-metka').hasClass('hidden')){
         $('.web-metka').removeClass('hidden');
      }
      if(!($('.web').hasClass('pointer'))){
         $('.web').toggleClass('pointer');
      }
      if($('.apps').hasClass('pointer')){
         $('.apps').removeClass('pointer');
      }
      if($('.other').hasClass('pointer')){
         $('.other').removeClass('pointer');
      }
      if($('.all').hasClass('pointer')){
         $('.all').removeClass('pointer');
      }
   });
   $('.apps').click(function(event) {
      if(!($('.web-metka').hasClass('hidden'))){
         $('.web-metka').toggleClass('hidden');
      }
      if(!($('.other-metka').hasClass('hidden'))){
         $('.other-metka').toggleClass('hidden');
      }
      if($('.apps-metka').hasClass('hidden')){
         $('.apps-metka').removeClass('hidden');
      }
      if(!($('.apps').hasClass('pointer'))){
         $('.apps').toggleClass('pointer');
      }
      if($('.web').hasClass('pointer')){
         $('.web').removeClass('pointer');
      }
      if($('.other').hasClass('pointer')){
         $('.other').removeClass('pointer');
      }
      if($('.all').hasClass('pointer')){
         $('.all').removeClass('pointer');
      }

   });
   $('.other').click(function(event) {
      if(!($('.web-metka').hasClass('hidden'))){
         $('.web-metka').toggleClass('hidden');
      }
      if(($('.other-metka').hasClass('hidden'))){
         $('.other-metka').removeClass('hidden');
      }
      if(!($('.apps-metka').hasClass('hidden'))){
         $('.apps-metka').toggleClass('hidden');
      }
      if(!($('.other').hasClass('pointer'))){
         $('.other').toggleClass('pointer');
      }
      if($('.web').hasClass('pointer')){
         $('.web').removeClass('pointer');
      }
      if($('.apps').hasClass('pointer')){
         $('.apps').removeClass('pointer');
      }
      if($('.all').hasClass('pointer')){
         $('.all').removeClass('pointer');
      }

   });
   $('.all').click(function(event) {
      if($('.apps-metka').hasClass('hidden')){
         $('.apps-metka').removeClass('hidden');
      }
      if($('.web-metka').hasClass('hidden')){
         $('.web-metka').removeClass('hidden');
      }
      if($('.web').hasClass('pointer')){
         $('.web').removeClass('pointer');
      }
      if($('.apps').hasClass('pointer')){
         $('.apps').removeClass('pointer');
      }
      if($('.other').hasClass('pointer')){
         $('.other').removeClass('pointer');
      }
      if(!($('.all').hasClass('pointer'))){
         $('.all').toggleClass('pointer');
      }
      if($('.other-metka').hasClass('hidden')){
         $('.other-metka').removeClass('hidden');
      }
   });

   $(window).scroll(function(event){
      var s=0-$(this).scrollTop()/2;
      $('.mainblock__image').css('transform', 'translate3d(0, '+s+'px, 0)');
   });

   function ibg(){
      $.each($('.ibg'), function(index, val){
         if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
         }
      });
   }
   ibg();






   $('.iconprof').click(function(event) {
      if($('.header-menu').hasClass('active')){
         $('.header-menu__icon').removeClass('active')
         $('.header-menu').removeClass('active')
      }
      if(!($('.menu-short').hasClass('hidden'))){
         $('.menu-short').toggleClass('hidden');
         $('.menu-short').removeClass('clickanimtable');
      }
      else{
         $('.menu-short').removeClass('hidden');
         $('.menu-short').toggleClass('clickanimtable');
         
      }
   });

   $('.type-to-open-reg').click(function(event) {
      if($('.modal-wrap').hasClass('active')){
         $('.modal-wrap').removeClass('active')
         $('.enter').removeClass('active')
      }
      else{
         $('.modal-wrap').toggleClass('active');
         $('.enter').toggleClass('active');
      }
   });

   $('.chose-reg').click(function(event) {
      if($('.modal-wrap').hasClass('active')){
         $('.modal-wrap').removeClass('active')
         $('.enter').removeClass('active')
      }
      else{
         $('.modal-wrap').toggleClass('active');
         $('.enter').toggleClass('active');
      }
   });
   $('.close').click(function(event) {
      if($('.modal-wrap').hasClass('active')){
         $('.modal-wrap').removeClass('active')
         $('.enter').removeClass('active')
      }
      else{
         $('.modal-wrap').toggleClass('active');
         $('.enter').toggleClass('active');
      }
   });

      /*if($('.header-menu').hasClass('active')){
         $('.menu-short').removeClass('clickanimtable');
         $('.menu-short').toggleClass('hidden');
      }
   if($('.menu-short').hasClass('clickanimtable')){
      $('.header-menu').removeClass('active');
         $('.header-menu').toggleClass('hidden');
   } */

/*
   $('#1').click(function(event) {
      var text = document.getElementById("header-lang-item__reg").textContent;
      document.getElementById("header-lang-item__reg").textContent = "МОСКВА";
   });

*/
$('#1').click(function(event) {
   var text = document.getElementById("header-lang-item__reg").textContent;
   document.getElementById("header-lang-item__reg").textContent = "МОСКВА";

});
$('#2').click(function(event) {
   var text = document.getElementById("header-lang-item__reg").textContent;
   document.getElementById("header-lang-item__reg").textContent = "САНКТ-ПЕТЕРБУРГ";
});
$('#3').click(function(event) {
   var text = document.getElementById("header-lang-item__reg").textContent;
   document.getElementById("header-lang-item__reg").textContent = "НОВОСИБИРСК";
});
$('#4').click(function(event) {
   var text = document.getElementById("header-lang-item__reg").textContent;
   document.getElementById("header-lang-item__reg").textContent = "ЕКАТЕРИНБУРГ";
});
$('#5').click(function(event) {
   var text = document.getElementById("header-lang-item__reg").textContent;
   document.getElementById("header-lang-item__reg").textContent = "НИЖНИЙ НОВГОРОД";
});
$('#6').click(function(event) {
   var text = document.getElementById("header-lang-item__reg").textContent;
   document.getElementById("header-lang-item__reg").textContent = "КАЗАНЬ";
});
$('#7').click(function(event) {
   var text = document.getElementById("header-lang-item__reg").textContent;
   document.getElementById("header-lang-item__reg").textContent = "САМАРА";
});
$('#8').click(function(event) {
   var text = document.getElementById("header-lang-item__reg").textContent;
   document.getElementById("header-lang-item__reg").textContent = "ЧЕЛЯБИНСК";
});
$('#9').click(function(event) {
   var text = document.getElementById("header-lang-item__reg").textContent;
   document.getElementById("header-lang-item__reg").textContent = "ОМСК";
});


$('.set-city').click(function(event) {
   if($('.modal-wrap').hasClass('active')){
      $('.modal-wrap').removeClass('active')
      $('.enter').removeClass('active')
   }
   else{
      $('.modal-wrap').toggleClass('active');
      $('.enter').toggleClass('active');
   }
});


$(document).ready(function(){
   
   $('.sliderlot').slick({
   adaptiveHeight:true,
   slidesToShow:3
   });
});


$(window).resize(function(event){
   adaptive_lot();
});
function adaptive_l(w) {
   if(w.matches){
      $('.sliderlot').slick({
         adaptiveHeight:true,
         slidesToShow:2
         });
   }
   else{
      $('.sliderlot').slick({
         adaptiveHeight:true,
         slidesToShow:1
         });
   }
}
function adaptive_lot() {
   var w=window.matchMedia('(max-width: 992px)');
   adaptive_l(w);
}









$(document).ready(function(){
   $('.slider').slick();
});



/*таймер ставок */
let countDownDate = new Date("Sep 27, 2020 14:07:50").getTime();
let cointDownFunction = setInterval(function(){
   let now = new Date().getTime();
   let distance = countDownDate - now;
   let days = Math.floor(distance / (1000 * 60 *60 *24));
   let hours = Math.floor((distance % (1000 * 60 *60* 24)) / (1000 *60 *60));
   let minutes = Math.floor((distance % (1000 *60 *60)) / (1000 * 60));
   let seconds = Math.floor((distance % (1000 *60)) / 1000);
   document.getElementById("timer1").innerHTML=
   days +":"+ hours +":"+ minutes +":"+ seconds ;
   document.getElementById("timer2").innerHTML=
   days +":"+ hours +":"+ minutes +":"+ seconds ;
   document.getElementById("timer3").innerHTML=
   days +":"+ hours +":"+ minutes +":"+ seconds ;
   if (distance < 0) {
      clearInterval(countDownFunction);
      document.getElementById("timer").innerHTML="Время истекло";
   }
})