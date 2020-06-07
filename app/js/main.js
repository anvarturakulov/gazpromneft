
$(function(){
    $('.btn').on('click',function(){
        document.getElementById('input_login').value = "";
    });
    
    $('select').wSelect();

    $('#lang').change(function() {
      console.log($(this).val());
    });

    $('#lang').val('RUS').change(); // should see in console
    $('#lang').wSelect('reset');

    $('.menu__btn').on('click',function(){
      $('.header__menu').slideToggle();
    });

});