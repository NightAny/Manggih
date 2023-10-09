<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");

    $servername = "localhost";
	$username = "root";
	$password = "admin";
	$database = "bd_manggih";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $database);
	// Check connection
	if ($conn->connect_error) {
		die("Falha na conexão: " . $conn->connect_error);
	}
?>