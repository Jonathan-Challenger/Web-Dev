<?php require_once 'connection.php';

    session_start();

    if (!isset($_SESSION['user'])) {
        header("location: index.php");
    }

?>

<?php include_once 'header.php' ?>

    <h2 class="text-center">Welcome to the homepage</h2>

    <?php 
    
        echo "<h3 class='text-center'> User: ".$_SESSION['user']['name']."</h3>";

    ?>

    <a class="btn btn-primary" href="logout.php">Logout</a>

<?php include_once 'footer.php' ?>
