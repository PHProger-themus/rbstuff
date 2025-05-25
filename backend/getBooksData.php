<?php

require_once "common.php";

$response = [];
$q = mysqli_query($db, "SELECT * FROM books ORDER BY planned_order, read_order");
while($r = mysqli_fetch_assoc($q)) {
  $response[] = $r;
}
echo json_encode($response);
