<?php

if(isset($_POST['message'])){

	$name = $_POST['name'];

	$email = $_POST['email'];

	$phone = $_POST['phone'];

	$message = $_POST['message'];    

	$therapist = $_POST['therapist'];

	$to ='';

	if ($therapist == 'Brianna') {

		$to = 'brianna@whiterosemassage.com';

	} 
	// else if ($therapist == 'Janice') {

	// 	$to = 'janice@whiterosemassage.com';

	// } 
	else {

		$to = 'neither';

	}

	#echo $to;

	$subject = 'Schedule Massage - Name: ' .$name . ' - Phone#: ' .$phone;

	$headers = 'From: '. $email . "\r\n" .

    'Reply-To: '. $email . "\r\n" .

    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	

	if($status == TRUE){	

		$res['sendstatus'] = 'done';

	

		//Edit your message here

		$res['message'] = 'Form Submission Successful';

    } 

	else{

		$res['message'] = 'Failed to send mail. Please email me at '.$to;

	}

	

	#echo json_encode($to);

	echo json_encode($res);

}



?>