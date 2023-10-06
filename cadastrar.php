<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$playerx = $dados->playerxa;
		$playerx = $dados->playerya;
	}

	$sqli = "insert into tb_player ()";
	$conn->exec($sqli);

    $conn = null;
?>