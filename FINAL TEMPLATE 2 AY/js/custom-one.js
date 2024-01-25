$(document).ready(function()
{
    $('.headercontainer a').click(function()
    {
        
        $('.headercontainer').slideUp();
    });
    $('.scroll-top').click(function () {
        $("html, body").animate({
          scrollTop: 0
        }, 100);
          return false;
    });
    $('.parent a').click(function()
    {
      $('.child1 a').toggleClass('active');
      $('.parent p').slideUp();
      $(this).siblings().slideUp();
      var a=$(this).attr('title');
      $('.result' +a).slideDown();
    });
    $('.btn-info').trigger('click');
    $('.load-text a').click(function(){
      $('.btn-info').trigger('click');
    });
    $('.close').click(function()
    {
      $('.btn-info').trigger('click');
    });
    $('.list1').click(function()
    {
      $('.freshcontainer').removeClass('active');
      $('.listcontainer').removeClass('active');
      $('.listcontainer10').removeClass('active');
      $('.listcontainer20').removeClass('active');
      $('.listcontainer120').removeClass('active');
      $('.listcontainer130').removeClass('active');
      $('.listcontainer140').removeClass('active');
      $('.listcontainer150').removeClass('active');
      $('.listcontainer160').removeClass('active');
      $('.listcontainer170').removeClass('active');
      $('.listcontainer180').removeClass('active');
      $('.listcontainer190').removeClass('active');
      $('.listcontainer200').removeClass('active');
      $('.listcontainer205').removeClass('active');
      $('.listcontainer290').removeClass('active');
    });
    $('.grid2').click(function()
    {
      $('.grid1').addClass('active');
    });
    $('.grid1').click(function()
    {
      $('.freshcontainer').addClass('active');
      $('.listcontainer').removeClass('active');
      $('.listcontainer10').removeClass('active');
      $('.listcontainer20').removeClass('active');
      $('.listcontainer120').removeClass('active');
      $('.listcontainer130').removeClass('active');
      $('.listcontainer140').removeClass('active');
      $('.listcontainer150').removeClass('active');
      $('.listcontainer160').removeClass('active');
      $('.listcontainer170').removeClass('active');
      $('.listcontainer180').removeClass('active');
      $('.listcontainer190').removeClass('active');
      $('.listcontainer200').removeClass('active');
      $('.listcontainer205').removeClass('active');
      $('.listcontainer290').removeClass('active');
    });
    $('.list1').click(function()
    {
      $('.freshcontainer').removeClass('active');
      $('.listcontainer').addClass('active');
      $('.listcontainer10').addClass('active');
      $('.listcontainer20').addClass('active');
      $('.listcontainer120').addClass('active');
      $('.listcontainer130').addClass('active');
      $('.listcontainer140').addClass('active');
      $('.listcontainer150').addClass('active');
      $('.listcontainer160').addClass('active');
      $('.listcontainer170').addClass('active');
      $('.listcontainer180').addClass('active');
      $('.listcontainer190').addClass('active');
      $('.listcontainer200').addClass('active');
      $('.listcontainer205').addClass('active');
      $('.listcontainer290').addClass('active');
    });
    $('.email').click(function()
    {
        alert('please enter your Email ID');
        $('input').focus();
    });
});