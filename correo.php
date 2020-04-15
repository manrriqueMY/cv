<?php
	require 'vendor/autoload.php';
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	$name=$_POST['name'];
	$email=$_POST['email'];
	$message=$_POST['message'];

	$mail = new PHPMailer();
	$mail->setFrom($email, $name);
	$mail->addAddress('manrrique.my@gmail.com', 'manrrique');
	$mail->Subject  = 'Mensaje desde servidor';
	$mail->Body     = "".$message;
	if(!$mail->send()) {
	  echo 'Message was not sent.';
	} else {
	  echo 'Message has been sent.';
	}
?>