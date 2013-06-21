<?php
$email_to = "newsletter@co.llide.com";
$emailSubject = 'Email Submission from co.llide';
$name = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$text = "Name: $name $lname <br>
         Email: $email<br>";
$headers = "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
$headers .= "From: <$email>" . "\r\n";
header("Location: http://www.gradientstudios.com/co.llide/success.html");
mail($email_to, $emailSubject, $text, $headers);
?>