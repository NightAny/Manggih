<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$playernome = $dados->playernome;
	}

	$sql = "select * from tb_player where nm_player != '$playernome' and nm_player != '';";

	$result = $conn->query($sql);

	if ($result->num_rows) {
		while($row = $result->fetch_assoc()) {
			$friends[] = $row;
		}
		
		echo json_encode($friends);
	}

    $conn->close();
?>