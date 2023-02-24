<?php
header('Access-Control-Allow-Origin: *');

$db = mysqli_connect('localhost', 'root', 'root');
mysqli_select_db($db, 'books');

$response = [];
$q = mysqli_query($db, "SELECT * FROM books");
while($r = mysqli_fetch_assoc($q)) {
  $response[] = $r;
}
echo json_encode($response);
