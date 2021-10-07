<?php include 'header.php'; ?>

<?php 

	$errh = $errw = "";
	$height = $weight = "";
	$bmipass = "";


	// When post request made
	if ($_SERVER['REQUEST_METHOD'] == "POST") {
		// Height
		if (empty($_POST['height'])) {
			$errh = "<span style='color:#ed4337; font-size:17px; display:block;'>Height is required</span>";
		} else {
			$height = validation($_POST['height']);
		}

		// Weight
		if (empty($_POST['weight'])) {
			$errw = "<span style='color:#ed4337; font-size:17px; display:block;'>Weight is required</span>";
		} else {
			$weight = validation($_POST['weight']);
		}

		if (empty($_POST['height'] && $_POST['weight'])) {
			echo "";
		} else {
			$bmi = ($weight / ($height ** 2));
			$bmipass = $bmi;
		}
	}

	function validation($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

?>

    <h2>Check your BMI</h2>
		<form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
			<div class="section1">
				<span>Enter your height (m) : </span>
				<input type="text" name="height" autocomplete="off">
				<?php echo $errh; ?>
			</div>
			<div class="section2">
				<span>Enter your weight (kg) : </span>
				<input type="text" name="weight" autocomplete="off">
				<?php echo $errw; ?>
			</div>
			<div class="submit">
				<input type="submit" name="submit" value="Check BMI">
				<input type="reset" value="Clear">
			</div>
		</form>


<?php 

	error_reporting(0);
		echo "<span class='pass'>Your BMI is : " . number_format($bmipass, 2) . "</span>";
		if (isset($_POST['submit'])) {
			if ($bmipass >= 13.6 && $bmipass <= 18.5) {
				echo "<span style='color:#00203FFF; display:block; margin-top:5px; margin-right:50px;'>
					Low body weight. You should gain weight by eating moderately. </span>";
			} elseif($bmipass > 18.5 && $bmipass <= 24.9) {
				echo "<span style='color:#00203FFF; display:block; margin-top:5px; margin-right:50px;'>
				The standard of good health. </span>";
			} elseif($bmipass > 25 && $bmipass <= 29.9) {
				echo "<span style='color:#00203FFF; display:block; margin-top:5px; margin-right:50px;'>
				Excess body weight. Exercise more and eat healthy to reduce excess weight. </span>";
			} elseif($bmipass > 30 && $bmipass <= 34.9) {
				echo "<span style='color:#00203FFF; display:block; margin-top:5px; margin-right:50px;'>
				The first stage of obesity. It is necessary to choose healthy food and exercise. </span>";
			} elseif($bmipass > 35 && $bmipass <= 39.9) {
				echo "<span style='color:#00203FFF; display:block; margin-top:5px; margin-right:50px;'>
				The second stage of obesity. Moderate diet and exercise are required. </span>";
			} elseif($bmipass >= 40) {
				echo "<span style='color:#00203FFF; display:block; margin-top:5px; margin-right:50px;'>
				Excess fat.<b style='color:#ed4337'> Serious risk</b>. Need a doctor advice. </span>";
			} else {
				echo "";
			}
		}
?>
<?php include 'footer.php'; ?>