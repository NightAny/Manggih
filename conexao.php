<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    $servername = "localhost:3307";
	$username = "root";
	$password = "usbw";
	$database = "bd_manggih";

	// Create connection
	$conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);

	echo "conectado";
?>