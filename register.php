<?php 

	header('Access-Control-Allow-Origin: *');
	
	$conn = new mysqli("localhost","react_api","1181","react_api");
	
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	else{
		
		$password = $_POST['password'];
		$email = $_POST['email'];
		
		$sql = "INSERT INTO enquiry(password,email) VALUES('$password','$email');";
		$res = mysqli_query($conn, $sql);
		
		if($res){
			echo "Success!";
		}
		else{
			echo "Error!";
		}
		$conn->close();
	}

?>
