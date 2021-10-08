<?php require_once 'connection.php';

    session_start();

    if (isset($_SESSION['user'])) {
        header("location: welcome.php");
    }

    if (isset($_REQUEST['register_btn'])) {

        $name = filter_var($_REQUEST['name'], FILTER_SANITIZE_STRING);
        $email = filter_var(strtolower($_REQUEST['email']), FILTER_SANITIZE_EMAIL);
        $password = strip_tags($_REQUEST['password']);

        if (empty($name)) {
            $errorMsg[0][] = 'Name required';
        }

        if (empty($email)) {
            $errorMsg[1][] = 'Email required';
        }

        if (empty($password)) {
            $errorMsg[2][] = 'Password required';
        }

        if (strlen($password) < 6) {
            $errorMsg[2][] = 'Password must be at least 6 characters';
        }

        if (empty($errorMsg)) {
            try {
                $select_stmt = $db->prepare("SELECT name,email FROM users WHERE email = :email");
                $select_stmt-> execute([':email' => $email]);
                $row = $select_stmt->fetch(PDO::FETCH_ASSOC);

                if (isset($row['email']) == $email) {
                    $errorMsg[1][] = "Email already registered";
                } else {
                    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                    $created = new DateTime();
                    $created = $created->format('Y-m-d H:i:s');

                    $insert_stmt = $db->prepare("INSERT INTO users (name, email, password, created) VALUES (:name,:email,:password,:created)");
                    
                    if ($insert_stmt->execute([':name'=>$name, ':email'=>$email, ':password'=>$hashed_password, ':created'=>$created])) {
                        header("location: index.php");
                    }
                }



            } catch(PDOException $e) {
                $pdoError = $e->getMessage();
            }
        }
    }

?>

<?php include_once 'header.php' ?>

    <h2 class="text-center mb-3">Login System</h2>

    <form action="register.php" method="post">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" name="name" class="form-control" placeholder="John Doe">
            <?php 
                if(isset($errorMsg[0])) {
                    foreach($errorMsg[0] as $nameErrors) {
                        echo "<p class='small text-danger'>".$nameErrors."</p>";
                    }
                }
            ?>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" name="email" class="form-control" placeholder="Johndoe@example.com">
            <?php 
                if(isset($errorMsg[1])) {
                    foreach($errorMsg[1] as $emailErrors) {
                        echo "<p class='small text-danger'>".$emailErrors."</p>";
                    }
                }
            ?>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" name="password" class="form-control">
            <?php 
                if(isset($errorMsg[2])) {
                    foreach($errorMsg[2] as $passwordErrors) {
                        echo "<p class='small text-danger'>".$passwordErrors."</p>";
                    }
                }
            ?>
        </div>
        <div>
            <button type="submit" name="register_btn" class="btn btn-primary mb-3">Register</button>
        </div>
    </form>
    Already registered? <a class="register" href="index.php">Login here</a>

<?php include_once 'footer.php' ?>
