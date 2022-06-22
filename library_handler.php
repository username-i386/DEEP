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
      $name = $_POST['name'];
      $address = $_POST['address'];
      $phone = $_POST['phone'];
      $full_message = "
         ================================================ \n
         |ИМЯ ПОЛЬЗОВАТЕЛЯ: $name \n
         |АДРЕС ПОЛЬЗОВАТЕЛЯ: $address \n
         |Телефон пользователя: $phone \n
         ================================================ \n
      ";
      if ($name !== '' && 
         $address !== '' && 
         $phone !== '') {
         if (is_dir('offer')) {
            file_put_contents('offer/offer.txt', $full_message, FILE_APPEND);
            echo "
               <h1>Письмо отправлено</h1>
            ";
         } else {
            mkdir('offer');
            file_put_contents('offer/offer.txt', $full_message, FILE_APPEND);
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