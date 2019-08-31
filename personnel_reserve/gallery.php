<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Фото заходiв</title>
	<!-- Favicon -->
	<link rel="shortcut icon" href="img/favicon.png">
	<!-- Style -->
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/fontello.css">
	<link rel="stylesheet" href="css/style.css">
</head>

<body>
<?php include('header.php') ?>

<!--Gallery-->
<section class="gallery page-background">
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
					<span>Фото заходів</span>
				</li>
			</ul>
		</div>
		<!--End breadcrumbs-->
		<!--Page title-->
		<div class="page-title">
			<h2 class="page-top__title">
				Фото заходів
			</h2>
		</div>
		<div class="page-top__description">
			Наглядова рада Аспен Інституту Київ складається з лідерів державного та приватного секторів, які об’єдналися задля підтримки та розвитку організації. Рада відповідає за визначення стратегії та основних напрямів діяльності Аспен Інституту Київ.
		</div>
		<!--End page title-->
	</div>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="gallery__list">
					<div class="events-slider__element gallery__item">
						<img src="img/events-photo-1.jpg" srcset="img/events-photo-1@2x.jpg 2x" alt="Photo">
						<div class="events-slider__content">
						<span class="events-slider__text">
							Зустріч з Олександром Яремою на #КадровийРезервУкраїни
						</span>
							<a href="event.php" class="events-slider__link">
								<i class="icon-arrow-right"></i>
							</a>
						</div>
					</div>
					<div class="events-slider__element gallery__item">
						<img src="img/events-photo-2.jpg" srcset="img/events-photo-2@2x.jpg 2x" alt="Photo">
						<div class="events-slider__content">
						<span class="events-slider__text">
							Зустріч з Юлією Ковалів на #КадровийРезервУкраїни
						</span>
							<a href="event.php" class="events-slider__link">
								<i class="icon-arrow-right"></i>
							</a>
						</div>
					</div>
					<div class="events-slider__element gallery__item">
						<img src="img/events-photo-3.jpg" srcset="img/events-photo-3@2x.jpg 2x" alt="Photo">
						<div class="events-slider__content">
						<span class="events-slider__text">
							Зустріч з Янікою Мерило на #КадровийРезервУкраїни
						</span>
							<a href="event.php" class="events-slider__link">
								<i class="icon-arrow-right"></i>
							</a>
						</div>
					</div>
					<div class="events-slider__element gallery__item">
						<img src="img/gallery-4.jpg" srcset="img/gallery-4@2x.jpg 2x" alt="Photo">
						<div class="events-slider__content">
						<span class="events-slider__text">
							Зустріч з Олександром Яремою на #КадровийРезервУкраїни
						</span>
							<a href="event.php" class="events-slider__link">
								<i class="icon-arrow-right"></i>
							</a>
						</div>
					</div>
					<div class="events-slider__element gallery__item">
						<img src="img/gallery-5.jpg" srcset="img/gallery-5@2x.jpg 2x" alt="Photo">
						<div class="events-slider__content">
						<span class="events-slider__text">
							Зустріч з Павлом Ковтонюком на #КадровийРезервУкраїни
						</span>
							<a href="event.php" class="events-slider__link">
								<i class="icon-arrow-right"></i>
							</a>
						</div>
					</div>
					<div class="events-slider__element gallery__item">
						<img src="img/gallery-6.jpg" srcset="img/gallery-6@2x.jpg 2x" alt="Photo">
						<div class="events-slider__content">
						<span class="events-slider__text">
							Зустріч з Янікою Мерило на #КадровийРезервУкраїни
						</span>
							<a href="event.php" class="events-slider__link">
								<i class="icon-arrow-right"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<a href="javascript:void(0)" class="gallery-btn yellow-btn">
					Показати більше
				</a>
			</div>
		</div>
	</div>
</section>
<!--End Gallery-->

<?php include('footer.php') ?>

<!-- Scripts -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/script.js"></script>
</body>

</html>