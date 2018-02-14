<?php

error_reporting(0);
$emailAddress = 'hi@jahirfiquitiva.me';

require "class.phpmailer.php";
require_once "recaptchalib.php";

// tu clave secreta
$secret = "6Lc-aCkTAAAAAHVM3kkJsJ50RWISqQQb_CLBHZVN";

// respuesta vacía
$response = null;

// comprueba la clave secreta
$reCaptcha = new ReCaptcha($secret);

//Min length validation
function validateMinLength($length, $number)
{
    //if it's NOT valid
    if (strlen($length) < $number) {
        return false;
    } //if it's valid
    else {
        return true;
    }
}

//Max length validation
function validateMaxLength($length, $number)
{
    //if it's NOT valid
    if (strlen($length) > $number) {
        return false;
    } //if it's valid
    else {
        return true;
    }
}

//Email length validation
function validateEmail($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

//Phone length validation
function validatePhone($phone)
{
    return preg_match("/^[0-9 -]{1,}$/", $phone);
}

session_start();

$err = array();

// si se detecta la respuesta como enviada
if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verifyResponse($_SERVER["REMOTE_ADDR"], $_POST["g-recaptcha-response"]);
}

//2 = Minimum Number, 21 = Maximum Number
if (!validateMinLength($_POST['name'], 2)) {
    $err[] = 'The name field is too short or empty';
}

//if(!validateMinLength($_POST['company'], 2))$err[]='PHP: The company field is too short or empty';
//if(!validateMaxLength($_POST['company'], 21))$err[]='PHP: The company field is too long';

//2 = Minimum Number, 254 = Maximum Number
if (!validateMinLength($_POST['email'], 2)) {
    $err[] = 'The email field is too short or empty';
}
if (validateMinLength($_POST['email'], 2) && validateMaxLength($_POST['email'], 254)
    && !validateEmail($_POST['email'])
) {
    $err[] = 'That email address appears to be invalid';
}

//11 = Minimum Number, 23 = Maximum Number
//if(!validateMinLength($_POST['phone'], 11))$err[]='The phone number field must be at least 11 numbers';
//if(!validateMaxLength($_POST['phone'], 23))$err[]='The phone number field must be less than 22 numbers';
//if(validateMaxLength($_POST['phone'], 23) && validateMinLength($_POST['phone'], 11) && !validatePhone($_POST['phone']))$err[]='The phone number is not valid. Numbers and Hyphens (-) only';

if (!validateMinLength($_POST['subject'], 2)) {
    $err[] = 'The subject field is too short or empty';
}

//1 = Minimum Number
if (!validateMinLength($_POST['message'], 5)) {
    $err[] = 'The message field is too short or empty';
}

//5 = Minimum Number, 5 = Maximum Number
/*
if(!validateMinLength($_POST['verify'], 5))$err[]='The security captcha field is too short or empty'; 	
if(!validateMaxLength($_POST['verify'], 5))$err[]='The security captcha field is too long'; 	
if(validateMinLength($_POST['verify'], 5) && validateMaxLength($_POST['verify'], 5) && md5($_POST['verify']) != $_SESSION['verify'])$err[]='The captcha field appears to be incorrect';			
*/

if (($response == null) || (!($response->success))) {
    $err[] = 'The captcha appears to be incorrect.';
}

if (count($err)) {
    echo "<script>
            window.location = '../../contact-error.html';
          </script>";
    exit();
} else {
    session_destroy();
}
//The recorded IP is ' . $_SERVER['REMOTE_ADDR'] . '
//Style how the received email will look
$msg = 'You have been contacted by ' . $_POST['name'] . '<br /><br />

<table style="margin: 0;width: 100%;border: 1px solid #f5f5f5;border-collapse: collapse;border-spacing: 0;">
<tr>
<td style="width:25%;background:#263238;color:#eceff1;padding: 10px;text-transform: uppercase;">Field</td>
<td style="width:75%;background:#263238;color:#eceff1;padding: 10px;text-transform: uppercase;">Entry</td>
</tr>
<tr>
<td style="padding: 10px 8px;">Name:</td>
<td style="padding: 10px 8px;">' . $_POST['name'] . '</td>
</tr>
<tr>
<td style="padding: 10px 8px;background: #f5f5f5;">Email:</td>
<td style="padding: 10px 8px;background: #f5f5f5;">' . $_POST['email'] . '</td>
</tr>
<tr>
<td style="padding: 10px 8px;">Subject:</td>
<td style="padding: 10px 8px;">' . $_POST['subject'] . '</td>
</tr>
<tr>
<td style="padding: 10px 8px;background: #f5f5f5;">Message:</td>
<td style="padding: 10px 8px;background: #f5f5f5;">' . $_POST['message'] . '</td>
</tr>
</table>
<br>
You can contact ' . $_POST['name'] . ' via the email ' . $_POST['email'] . ' <br/>';

$mail = new PHPMailer();
$mail->IsMail();
$mail->AddReplyTo($_POST['email'], $_POST['name']);
$mail->AddAddress($emailAddress);
$mail->SetFrom($_POST['email'], $_POST['name']);
$mail->Subject = $_POST['subject'];
$mail->MsgHTML($msg);
if (!$mail->send()) {
    echo "<script>
            window.location = '../../contact-error.html';
          </script>";
} else {
    echo "<script>
            window.location = '../../contacted.html';
          </script>";
}
unset($_SESSION['post']);
?>