<?php

header('Access-Control-Allow-Origin: *');

require_once "ENV.php";
(new ENV(dirname(__DIR__) . '/.env'))->load();

if (getenv('DEBUG') == 1) {
  ini_set('display_errors', true);
  error_reporting(E_ALL);
}

$db = mysqli_connect(
  getenv('DB_HOSTNAME'),
  getenv('DB_USERNAME'),
  getenv('DB_PASSWORD')
);
mysqli_select_db($db, getenv('DB_DATABASE'));
