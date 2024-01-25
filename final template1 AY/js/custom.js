$(document).ready(function()
{
    $('.email').click(function()
    {
        alert('please enter your Email ID');
        $('input').focus();
    });
    $('.btn-info').trigger('click');
    $('.load-text a').click(function(){
        $('.btn-info').trigger('click');
    });
    $('.impo8 a').click(function()
    {
        
        $('.headercontainer').slideUp();
    });
    $('.close').click(function()
    {
        $('.btn-info').trigger('click');
    });
    $('.services11 a').click(function()
    {
        $('.custom-emailzero').focus();
    });
    $('.trend1').click(function()
    {
        $('.trend1').removeClass('active');
        $(this).addClass('active');
    });
    $('.trend20').click(function()
    {
        $('.trend20').removeClass('active');
        $(this).addClass('active');
    });
    $('.dropdown').click(function()
    {
        $(this).addClass('active');
        $('.dropdown').removeClass('active');
    });
    $('.catogory a').click(function()
    {
        $(this).addClass('active');
    });
    $('.services5 a').click(function()
    {
        $(this).addClass('active');
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('.scroll-top').fadeIn();
        } else {
          $('.scroll-top').fadeOut();
        }
    });
    $('.scroll-top').click(function () {
        $("html, body").animate({
          scrollTop: 0
        }, 100);
          return false;
      });
});