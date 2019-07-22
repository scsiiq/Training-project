$('body').css('background-color', 'turquoise');
$('.header').css('background-color', 'blue');

$('.main-picture-content h1').hide();
$('.main-picture-content h1').fadeIn(5000);
$('.main-picture-content h1').fadeOut(5000);

$('.main-picture').click(function(){
    if( $(this).hasClass('photo1') ){
        $(this).addClass('photo2');
        $(this).removeClass('photo1');
    }else{
        $(this).addClass('photo1');
        $(this).removeClass('photo2');    
    }
});

$('.form-request .button').click(function(){
    //alert('Событие работает');
    $(".form-request-popup").css('display', 'flex').hide().fadeIn(1000);
});

$('.main-picture-content .button').click(function(){
    $(".form-request-popup").css('display', 'flex').hide().fadeIn(1000);
});

$('.form-request-popup-close').click(function(){
    $(".form-request-popup").fadeOut(1000);
    
});

//Вопрос-ответ

$('.questions-box-item').click(function(){
   // $(this) - это тот элемент на который я кликнул
   // find() - позволяет мне искать элементы внутри элемента

   if(  $(this).find('.questions-box-item-a').css('display') == 'none' ){
        $(this).find('.questions-box-item-a p').delay(500).animate({
            'left': 0,
            'opacity': 1
        }, 1000);
   }else{
        $(this).find('.questions-box-item-a p').delay(500).animate({
            'left': '-50px',
            'opacity': 0
        }, 1000);
   }

   $(this).find('.questions-box-item-a').slideToggle(500);


    // $('.questions-box-item-a').slideToggle(500);
});


$(".cards-block-item-line").click(function(){
    $(this).animate({
        'width': '180px',
        'height': '6px'
    }, 500);
});

$('.cards-block-item-pic').click(function(){
    // let height = $(this).height();

    // if( height > 200 ){
    //     $(this).animate({
    //         'height': '200px'
    //     }, 500);
    // }else{
    //     $(this).animate({
    //         'height': '240px'
    //     }, 500);     
    // }

    $(this).animate({
        'height': '240px'
    }, 500); 

});

$('.header .nav-box a').click(function(){
    $(this).animate({
        'font-size': '30px'
    }, 500);

    $(this).animate({
        'font-size': '25px'
    }, 500);
});

$(".arrow-up").click(function(){
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});

$('.nav-about-us').click(function(){
    $("html, body").animate({
        scrollTop: $('.main-title').offset().top - $('.header').outerHeight()
    }, 1000);

    console.log($('.main-title').offset().top, $('.header').height());
});




$('form').submit(function(e){
    e.preventDefault(); //отмена отправки формы

    let errorElement = $(this).find('.error-message');
    let fioVal = $(this).find("[name='fio']").val();
    let emailVal = $(this).find("[name='email']").val();
    let phoneVal = $(this).find("[name='phone']").val();

    //'' - это пустота
    if( fioVal == '' || emailVal == '' || phoneVal == '' ){
        // .html() - позволяет добавить внутрь элемента контент, в том числе и текст и html
        
        let errorMessage = 'Вы не заполнили поля: ';

        /* 
            addClass(); - добавление класса
            removeClass(); - удаление класса
            hasClass(); - проверка что класс есть 
        */

        /* 
           1. Все визуальные эффекты ошибок и их отключения в форме должны быть переведены на классы

           2. Инпут с ошибкой должен быть еще и курсивным
        
        */

        $(this).find('button').addClass('fail');

        if( fioVal == '' ){
            // $(this).find("[name='fio']").css('border-color', 'red');
            $(this).find("[name='fio']").addClass('error');
            errorMessage = errorMessage + "фамилия; ";
        }else{
            //$(this).find("[name='fio']").css('border-color', 'orange'); 
            $(this).find("[name='fio']").removeClass('error');  
        }

        if( emailVal == '' ){
            $(this).find("[name='email']").addClass('error');
            errorMessage = errorMessage + "email; ";
        }else{
            $(this).find("[name='email']").removeClass('error');          
        }

        if( phoneVal == '' ){
            $(this).find("[name='phone']").addClass('error');
            errorMessage = errorMessage + "телефон; ";
        }else{
            $(this).find("[name='phone']").removeClass('error');
        }

        errorElement.html(errorMessage);
        errorElement.slideDown(); 
    }else{
        alert('Все хорошо, я бы отправил форму');
        errorElement.slideUp();
        $(this).find("[name='fio']").removeClass('error');
        $(this).find("[name='email']").removeClass('error');
        $(this).find("[name='phone']").removeClass('error');
        $(this).find('button').removeClass('fail');
    }
});

$("[name='fio'], [name='email'], [name='phone']").keyup(function(e){
    let errorElement = $('form').find('.error-message');
    let errorMessage = 'Вы не заполнили поля: ';

    if( e.keyCode != 27 && e.keyCode != 9 && e.keyCode !=16 && e.keyCode != 17){

        let fioVal = $('form').find("[name='fio']").val();
        let emailVal = $('form').find("[name='email']").val();
        let phoneVal = $('form').find("[name='phone']").val();

        if( fioVal.length < 2 ||  fioVal.length >24 ){
            errorMessage = errorMessage + "фамилия; ";    
        }

        if( emailVal.length < 2 || emailVal.length > 24 ){
            errorMessage = errorMessage + "email; ";       
        }

        if( phoneVal.length < 2 || phoneVal.length > 24){
            errorMessage = errorMessage + "телефон; ";           
        }

        errorElement.html(errorMessage);
        if( $(this).val().length >= 2 && $(this).val().length <= 24 ){
            $(this).removeClass('error');

            if( $('form').find('input.error').length == 0){
                $('form').find('button').removeClass('fail');
                errorElement.slideUp();
            }
        }else{
            $(this).addClass('error');
            $('form').find('button').addClass('fail');
            errorElement.slideDown();
        }
    }
});

$(window).keydown(function(e){
    if( e.keyCode == 27 ){
        $('.form-request-popup').fadeOut();     
    }
});

$('.form-request-popup').click(function(){
    $(this).fadeOut();    
});

$('.form-request-popup-content').click(function(e){
    e.stopPropagation();
});

$(".burger").click(function(){
    $('.header').toggleClass('open');
});

$(".header .nav-box a").click(function(){
    $('.header').removeClass('open');
});