<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Звіти</title>
	<!-- Favicon -->
	<link rel="shortcut icon" href="img/favicon.png">
	<!-- Style -->
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/fontello.css">
	<link rel="stylesheet" href="css/style.css">
</head>

<body>
<?php include('header.php') ?>

<!--Report-->
<section class="page-report page-background">
	<div class="page-top">
		<!--Breadcrumbs-->
		<div class="breadcrumbs">
			<ul class="breadcrumbs__list">
				<li class="breadcrumbs__item">
					<a href="main.php">
						Домашня сторінка
					</a>
				</li>
				<li class="breadcrumbs__item">
					<span>Звіти</span>
				</li>
			</ul>
		</div>
		<!--End breadcrumbs-->
		<!--Page title-->
		<div class="page-title">
			<h2 class="page-top__title">
				Звіти
			</h2>
		</div>
		<!--End page title-->
	</div>
	<div class="report">
		<div class="container">
			<div class="report__list">
				<div class="report__item">
					<div class="report__img">
						<img src="img/report-1.jpg" srcset="img/report-1@2x.jpg 2x" alt="Photo">
					</div>
					<h3 class="report__title">
						<a href="javascript:void(0)">Аспен Інститут Київ | Річний звіт 2018</a>
					</h3>
					<div >
						<a href="javasript:void(0)" class="report__link icon-arrow-right" ></a>
					</div>
				</div>
				<div class="report__item">
					<div class="report__img">
						<img src="img/report-2.jpg" srcset="img/report-2@2x.jpg 2x" alt="Photo">
					</div>
					<h3 class="report__title">
						<a href="javascript:void(0)">Аспен Інститут Київ | Річний звіт 2018</a>
					</h3>
					<div >
						<a href="javasript:void(0)" class="report__link icon-arrow-right" ></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!--End Report-->

<?php include('footer.php') ?>


<!-- Scripts -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/script.js"></script>
</body>

</html>