$(document).ready(function()
{
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    $('menucontainer a').each(function()
    {
        var content=$(this).attr('href');
        if(content == filename)
        {
            $(this).addClass('active');
        }
    });
    $('.services1 a').click(function()
    {
        $(this).addClass('active');
    });
    $('.parent a').click(function()
    {
        $('.parent p').slideUp();
        $(this).siblings().slideUp();
        var a=$(this).attr('title');
        $('.result'+a).slideDown();
    });
    $('.parentone a').click(function()
    {
        $('.parentone p').slideUp();
        $(this).siblings().slideUp();
        var a=$(this).attr('title');
        $('.result'+a).slideDown();
    });
    $('.services1 a').click(function()
    {
        $('.ind1').hide();
    });
    $('.review1').click(function()
    {
        $('.review2').fadeOut();
    });
    $('.spark h2').click(function()
    {
        $('.icons a').addClass('active');
    });


});