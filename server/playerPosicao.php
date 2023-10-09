<?php
    include("conexao.php");
	
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$valorRecebido = file_get_contents("php://input");
		$dados = json_decode($valorRecebido);

		$playernome = $dados->playernome;
	}

	$sql = "select * from tb_player where nm_player = '$playernome';";

	$result = $conn->query($sql);

	try{
		if($result->num_rows){
			while($row = $result->fetch_assoc()) {
				echo json_encode(["response" => [$row['nm_posit_x'], $row['nm_posit_y']]]);
			}
		} else{
			echo json_encode(["response" => false]);	
		}
	} catch (Exception $e){
		echo json_encode(["response" => false]);
	}

    $conn->close();
?>