<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$playernome = $dados->playernome;
		$playersenha = $dados->playersenha;
	}

	$sql = "select * from tb_player where nm_player = '$playernome' and nm_senha = '$playersenha';";

	try{
		if($conn->query($sql)->num_rows){
			echo json_encode(["response" => true]);
		} else{
			echo json_encode(["response" => false]);	
		}
	} catch (Exception $e){
		echo json_encode(["response" => false]);
	}

    $conn->close();
?>