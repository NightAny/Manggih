<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$playernome = $dados->playernome;
		$playersenha = $dados->playersenha;
	}
	
	$sql = "insert into tb_player (nm_player, nm_senha, nm_posit_x, nm_posit_y, nm_online, nm_personagem) values('$playernome', '$playersenha',256, 48, 1, 'normal');";

	try{
		$conn->query($sql);
		echo json_encode(["response" => "Usuario criado com Sucesso"]);
	} catch (Exception $e){
		echo json_encode(["response" => false]);
	}

    $conn->close();
?>