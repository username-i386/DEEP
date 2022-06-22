<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <style type="text/css">
   h1 { 
      text-align: center;
      margin: 20px 0 0 0;
   }
</style>
</head>
<body>
   <?php
      $qeustions_theme = $_POST['qeustions-theme'];
      $username = $_POST['username'];
      $email = $_POST['email'];
      $message = $_POST['message'];
      $full_message = "
         ================================================ \n
         |ТЕМА ПИСЬМА: $qeustions_theme \n
         |ИМЯ ПОЛЬЗОВАТЕЛЯ: $username \n
         |АДРЕС ПОЛЬЗОВАТЕЛЯ: $email \n
         |СООБЩЕНИЕ ПОЛЬЗОВАТЕЛЯ: $message \n
         ================================================ \n
      ";
      if ($qeustions_theme !== '' && 
         $username !== '' && 
         $email !== '' &&
         $message !== '') {
         if (is_dir('user_messages')) {
            file_put_contents('user_messages/message.txt', $full_message, FILE_APPEND);
            echo "
               <h1>Письмо отправлено</h1>
            ";
         } else {
            mkdir('user_messages');
            file_put_contents('user_messages/message.txt', $full_message, FILE_APPEND);
            echo "
               <h1>Письмо отправлено</h1>
            ";
         }
      } else if ($qeustions_theme !== '' || 
         $username !== '' || 
         $email !== '' ||
         $message !== '') {
            echo "
               <h1>Все поля формы должны быть заполнены</h1>
            ";
      }
   ?>
   <script src="js/script_close_window.js"></script>
</body>
</html>