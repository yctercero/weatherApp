<?php
	$city = file_get_contents("php://input");
	$objFileData = json_decode($city);
	$search = ($objFileData->city);
	
		$db = new PDO("mysql:host=localhost;dbname=weather;charset=utf8", "root", "root");

		$search = "%" . $search . "%";

		$query = "SELECT DISTINCT `name`, `state`, `city_id` FROM `auto` WHERE `name` IS NOT NULL AND `name` LIKE '$search'";

		$result = $db->query($query);
		
		$resultObj = $result->fetchall(PDO::FETCH_OBJ);

		echo json_encode($resultObj); 
	
?>