<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: main.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
</head>
<body>
    <h2>Welcome to your dashboard!</h2>
    <p><a href="logout.php">Logout</a></p>
</body>
</html>
