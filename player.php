<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$playerx = $dados->playerxa;
		$playery = $dados->playerya;

		echo $playerx;
		echo $playery;
	}

    $conn = null;
?>