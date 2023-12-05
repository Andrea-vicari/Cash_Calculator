<?php
// database connection code
if ($_SERVER["REQUEST_METHOD"] == "POST")
{

$con = mysqli_connect('localhost', 'root', '','cash_register');

// Set a date variable
$TODAY = date("Y/m/d");



// get the post records
$hundred = $_POST['hundred'];
$twenty = $_POST['twenty'];
$ten = $_POST['ten'];
$five = $_POST['five'];
$one = $_POST['one'];
$quarter = $_POST['quarter'];
$dime = $_POST['dime'];
$nickel = $_POST['nickel'];
$penny = $_POST['penny'];


// database insert SQL code
$sql = "INSERT INTO `drawer` (`Date`, `ONE HUNDRED`, `TWENTY`, `TEN`, `FIVE`, `ONE`, `QUARTER`, `DIME`, `NICKEL`, `PENNY`) VALUES ('$TODAY', '$hundred', '$twenty', '$ten', '$five', '$one', '$quarter', '$dime', '$nickel', '$penny')";




// insert in database
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo '
	<nav class="navbar navbar-expand-xl navbar-dark bg-dark" aria-label="Offcanvas navbar large">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="./img/CashReg_logo_yellow_XS.png">
      </a>
      <h2 class="text-white d-none d-md-block">AUTOMATIC CASH DRAWER</h2>
      <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
        aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon text-primary"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2"
        aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <img src="./CashReg_logo_yellow_XS.png">
          <h5 class="offcanvas-title" id="offcanvasNavbar2Label">AUTOMATIC CASH DRAWER</h5>

          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/index.html">
                <h4>CALCULATOR</h4>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/report.html">
                <h4>TX REPORT</h4>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/manager.html">
                <h4>CID MANAGER</h4>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </nav>
  <div class="col-lg-6 mx-auto py-5 text-center">
  <h1 class="display-5 fw-bold text-body-emphasis">Drawer succesfully updated!</h1>
	<p class="lead mb-4">The Drawer is correctly filled and was stored in a mySQL Database using phpMyAdmin.</p>
	<img src="./img/logo-mysql.png" alt="logo_MYSQL" class="mb-3">
	<p class="lead mb-4">Now in the Calculator page, clicking the Drawer button in CHECK THE DRAWER area, you can check what is currently present in the Drawer</p>
	<i class="fa fa-chevron-down text-primary fs-1"></i>
	<div class="d-grid gap-2 d-sm-flex justify-content-sm-center py-lg-3">

  <a href="./index.html" class="btn btn-lg bd-btn-lg btn-primary mt-3">
	  <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Go to Calculator</button>
  </a>
	</div>
  </div>
</div>
<div class="container-fluid bg-dark py-2">
<footer class="container d-flex flex-wrap justify-content-between align-items-center pt-3">
  <div class="col-md-4 d-flex align-items-center">
    <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
      <img src="./img/CashReg_logo_yellow_XS.png">
    </a>
    <span class="mb-3 mb-md-0 text-white">© Cash Calculator</span>
  </div>

  <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
    <li class="ms-3"><i class="fab fa-js text-primary fs-2"></i></li>
    <li class="ms-3"><i class="fab fa-php text-primary fs-2"></i></li>
    <li class="ms-3"><i class="fab fa-node text-primary fs-2"></i></li>
    <li class="ms-3"><i class="fab fa-bootstrap text-primary fs-2"></i></li>
  </ul>
</footer>

</div>';

}
}
else
{
	echo '
	<nav class="navbar navbar-expand-xl navbar-dark bg-dark" aria-label="Offcanvas navbar large">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="./img/CashReg_logo_yellow_XS.png">
      </a>
      <h2 class="text-white d-none d-md-block">AUTOMATIC CASH DRAWER</h2>
      <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
        aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon text-primary"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2"
        aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <img src="./CashReg_logo_yellow_XS.png">
          <h5 class="offcanvas-title" id="offcanvasNavbar2Label">AUTOMATIC CASH DRAWER</h5>

          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/index.html">
                <h4>CALCULATOR</h4>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/report.html">
                <h4>TX REPORT</h4>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/manager.html">
                <h4>CID MANAGER</h4>
              </a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </nav>
  <div class="col-lg-6 mx-auto py-5 text-center">
  <h1 class="display-5 fw-bold text-body-danger">Something went wrong</h1>
	<i class="fa fa-exclamation-triangle text-danger mb-3" style="font-size:10rem"></i>
	<p class="lead mb-4">Something went wrong during the operation or you reach this page unintentionally</p>
	<i class="fa fa-chevron-down text-primary fs-1"></i>
	<div class="d-grid gap-2 d-sm-flex justify-content-sm-center py-lg-3">

  <a href="./drawer.html" class="btn btn-lg bd-btn-lg btn-primary mt-3">
	  <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Go to Drawer</button>
  </a>
	</div>
  </div>
</div>
<div class="container-fluid bg-dark py-2">
<footer class="container d-flex flex-wrap justify-content-between align-items-center pt-3">
  <div class="col-md-4 d-flex align-items-center">
    <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
      <img src="./img/CashReg_logo_yellow_XS.png">
    </a>
    <span class="mb-3 mb-md-0 text-white">© Cash Calculator</span>
  </div>

  <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
    <li class="ms-3"><i class="fab fa-js text-primary fs-2"></i></li>
    <li class="ms-3"><i class="fab fa-php text-primary fs-2"></i></li>
    <li class="ms-3"><i class="fab fa-node text-primary fs-2"></i></li>
    <li class="ms-3"><i class="fab fa-bootstrap text-primary fs-2"></i></li>
  </ul>
</footer>

</div>';

}
?>
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Cash Register</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
  integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous" />
  <link href="./css/main.min.css" rel="stylesheet">
  <link href="./css/custom.css" rel="stylesheet">

</head>
<body class="bg-body-secondary">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
    crossorigin="anonymous"></script>

</body>

</html>
