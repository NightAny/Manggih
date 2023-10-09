<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$playernome = $dados->playernome;
		$playerx = $dados->playerxa;
		$playery = $dados->playerya;
	}

	$sql = "update tb_player set nm_posit_x = $playerx, nm_posit_y = $playery where nm_player = '$playernome';";
	
	try{
		$conn->query($sql);
		echo json_encode(["response" => "Coord Aceita"]);
	} catch (Exception $e){
		echo json_encode(["response" => "Coord Invalida"]);
	}

    $conn->close();
?>