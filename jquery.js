//hide function in jquery
$('.a').click(function(){
    $('h1').hide(1000)
});

//show function in jquery 
$('.b').click(function(){
    $('h1').show(1000)
})

//toggle function in jquery
$('.toggle').click(function(){
    $('h1').toggle(1000)
})

//slideup
$('.slideUp').click(function(){
        $('h1').slideUp(1000)
})

//slideDown
$('.slideDown').click(function(){
    $('h1').slideDown(1000)
})

//slideToggle
$('.slideToggle').click(function(){
    $('h1').slideToggle(1000)
})

//FadeIn
$('.FadeIn').click(function(){
    $('h1').fadeIn(1000)
})

//Fadeout
$('.FadeOut').click(function(){
    $('h1').fadeOut(1000)
})


//fadetoggle
$('.FadeToggle').click(function(){
    $('h1').fadeToggle(1000)
})


//prepend to add something inside the div towards the start of the div
$('.prepend').click(function(){
    $('h1').prepend('<input>')
})

//append to add something inside the div at the end
$('.append').click(function(){
    $('h1').append('<input>')
})


//before to add the html before the div
$('.before').click(function(){
    $('h1').before('<input>')
})

//after to add the html after the div
$('.after').click(function(){
    $('h1').after('<input>')
})

//Sidebar using animate 
$('.opensidebar').click(function(){
    $('.new').animate({left:'0px'},500)
})


$('.dark-btn').click(function(){
    $('body').toggleClass('darkmode','slow')
})

$('.closesidebar').click(function(){
    $('.new').animate({left:'-530px'});
})

$('.stop').click(function(){
    $('.new').stop()
})

$('.dbl').dblclick(function(){
    alert('this is an alert , You just Double clicked !!!')
})

$('.drag').draggable();