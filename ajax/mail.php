<?php
    $servername = "localhost";
    $username = "admin";
    $password = "1234";
    $dbname = "db_ajax1";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if($conn ->connect_error){
    die("failed to connect ".$conn->connect_error);
    }
    
    $email = $_POST['email'];
    $name = $_POST['name'];
    $ball = $_POST['ball'];
    echo $email, $name; 
    $sql = "INSERT INTO tbl_form (name, email, ball)
        VALUES ('$name', '$email', '$ball')";
   
    if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
} 
    echo $email;
   
?>