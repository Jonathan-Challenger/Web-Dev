<?php include_once 'header.php' ?>

    <h2 class="text-center mb-3">Login System</h2>
    <form action="index.php" method="post">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" name="name" class="form-control" placeholder="John Doe">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" name="email" class="form-control" placeholder="Johndoe@example.com">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" name="password" class="form-control">
        </div>
        <div>
            <button type="submit" name="register_btn" class="btn btn-primary mb-3">Register</button>
        </div>
    </form>
    Already registered? <a class="register" href="index.php">Login here</a>

<?php include_once 'footer.php' ?>