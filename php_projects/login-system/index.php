<?php require_once 'connection.php';

    session_start();

    if (isset($_SESSION['user'])) {
        header("location: welcome.php");
    }

    if (isset($_REQUEST['login_btn'])) {
        $email = filter_var(strtolower($_REQUEST['email']), FILTER_SANITIZE_EMAIL);
        $password = strip_tags($_REQUEST['password']);

        if (empty($email)) {
            $errorMsg[] = 'Must enter email';
        }   
        elseif (empty($password)) {
            $errorMsg[] = 'Must enter password';
        }
        else {
            try {
                $select_stmt = $db->prepare("SELECT * FROM users WHERE email = :email LIMIT 1");
                $select_stmt->execute([':email'=>$email]);
                $row = $select_stmt->fetch(PDO::FETCH_ASSOC);

                if ($select_stmt->rowCount() > 0) {

                    if (password_verify($password, $row["password"])) {
                        $_SESSION['user']['name'] = $row["name"];
                        $_SESSION['user']['email'] = $row["email"];
                        $_SESSION['user']['id'] = $row["id"];
                        header("location: welcome.php");
                    } else {
                        $errorMsg[] = 'Wrong email or password';
                    }

                } else {
                    $errorMsg[] = 'Wrong email or password';
                }

            } catch(PDOEXCEPTION $e) {
                echo $e->getMessage();
            }
        }
    }

?>

<?php include_once 'header.php' ?>

            <?php 
                if(isset($errorMsg)) {
                    foreach($errorMsg as $loginError) {
                        echo "<p class='alert alert-danger'>".$loginError."</p>";
                    }
                }
            ?>

    <h2 class="text-center mb-3">Login System</h2>
    <form action="index.php" method="post">
        <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" name="email" class="form-control" placeholder="example@gmail.com">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" name="password" class="form-control">
        </div>
        <div>
            <button type="submit" name="login_btn" class="btn btn-primary mb-3">Login</button>
        </div>
    </form>
    No Account? <a class="register" href="register.php">Register here</a>

<?php include_once 'footer.php' ?>
