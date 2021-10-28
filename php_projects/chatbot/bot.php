<!-- PHP start for bot -->
<!-- Connect to db -->
<?php 

    // server = localhost
    // username = root
    // password = ""
    $conn = mysqli_connect("localhost", "root", "", "onlinebot");

    if ($conn) {
        $user_messages = mysqli_real_escape_string($conn, $_POST['messageValue']);

        $query = "SELECT * FROM chatbot WHERE messages LIKE '%$user_messages%'";
        $runQuery = mysqli_query($conn, $query);

        if (mysqli_num_rows($runQuery) > 0) {
            $result = mysqli_fetch_assoc($runQuery);
            echo $result['response'];
        } else {

        }
    } else {
        echo "connection failed" . mysqli_error();
    }
?>