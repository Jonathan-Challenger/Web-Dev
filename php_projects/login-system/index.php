<?php require_once 'connection.php' ?>

<?php include_once 'header.php' ?>

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
