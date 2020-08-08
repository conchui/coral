<?php 

include_once('../class/Signup.php');

if ($_POST) {
    $email = $_POST['email'];
    
    $signup = new Signup;
    
    $return = $signup->checkEmail($email);

    $signup->createLog($email);

    echo $return;
}

?>