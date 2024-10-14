<?php

define('SERVER_API_KEY', 'AAAAFMOxpdE:APA91bGpIyHCbG1JEBnOSizxe3qtnS50NTdVRpuBqNUyZhf0l2e8sSIa_usak-01J5NO1W-2a0hEjHUsDNT4L3XdjTI-3HtEtSQQa35w8slPC4qc2Gl_EGYZtm4vOJ50Z4eZ2-txUXof');

$message = array(
    'title' => 'Notification Title',
    'body' => 'Notification Body',
    'click_action' => 'Test'
);

$token = 'ey7t5m3QRwa4o_0v0HmjK8:APA91bEh3Eo9tVtxvWlm-HgqlSP4HXf8GREf1c3Sc_Ppo2K9yevO7W8SAjvLEjNj0rlzAEs8QHgMrQUr1oP6u83QlaAEY1teN5z-6cRKSw3IrF6_7_UGsw9ymwLIf9bmAIdT4N1F55m1'; //replace fcm token

$headers = array(
    'Authorization: key='.SERVER_API_KEY,
    'Content-Type: application/json'
);

$fields = array(
    'to' => $token,
    'notification' => $message
);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
$result = curl_exec($ch);

curl_close($ch);

echo $result;
$msg = json_decode($result);

echo $msg->success;

?>
