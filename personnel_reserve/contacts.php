<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Контакти</title>
	<!-- Favicon -->
	<link rel="shortcut icon" href="img/favicon.png">
	<!-- Style -->
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/fontello.css">
	<link rel="stylesheet" href="css/style.css">
</head>

<body>
<?php include('header.php') ?>

<!--Page-contact-->
<section class="page-contacts page-background">
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
					<span>Контакти</span>
				</li>
			</ul>
		</div>
		<!--End breadcrumbs-->
		<!--Page title-->
		<div class="page-title">
			<h2 class="page-top__title">
				Контакти
			</h2>
		</div>
		<!--End page title-->
	</div>
	<div class="page-contacts-wrapper">
		<div class="page-contacts__content">
			<a href="tel:+380951816155" class="page-contacts__phone">
				+38 (095) 181 61 55
			</a>
			<a href="tel:+380731816155" class="page-contacts__phone">
				+38 (073) 181 61 55
			</a>
			<span class="page-contacts__address">
				м. Київ, вул. Інститутська 18 а
			</span>
			<div class="page-contacts__container">
				<a href="mailto:kr@lyudy.com.ua" class="page-contacts__mail">kr@lyudy.com.ua</a>
				<div class="page-contacts__social">
					<a href="javascript:void(0)" class="icon-xmlid-823"></a>
					<a href="javascript:void(0)" class="icon-facebook-x-28-alt-x-29"></a>
				</div>
			</div>
		</div>
		<div class="page-contacts__map" id="map"></div>
	</div>
</section>
<!--End page-contact-->
<!--Contacts-form-->
	<section class="contacts-form">
		<div class="contacts-form__wrapper">
			<h2 class="contacts-form__title">
				Напишіть нам
			</h2>
			<form action="" class="contacts-form__box">
				<div class="contacts-form__input-wrapper">
					<div>
						<input type="text" placeholder="Ваше ім'я">
					</div>
					<div>
						<input type="tel" placeholder="Телефон">
					</div>
					<div>
						<input type="email" placeholder="Ваш email">
					</div>
				</div>
				<textarea name="" id="" cols="30" rows="10" placeholder="Ваш коментар"></textarea>
				<button class="yellow-btn contacts-form__btn">
					Надіслати
				</button>
			</form>
		</div>
	</section>
<!--End contacts-form-->
<!--Footer-->
<footer class="footer">
	<div class="container-fluid">
		<div class="row footer-row">
			<div class="col-md-4 col-lg-2 col-xl-2">
				<div class="footer__logo">
					<a href="main.php">
						<img src="img/logo-footer.svg" alt="Logo">
					</a>
				</div>
			</div>
			<div class="col-md-8 col-lg-10 col-xl-4">
				<div class="footer__nav">
					<ul class="footer__list">
						<li>
							<a href="javascript:void(0)">
								Про нас
							</a>
						</li>
						<li>
							<a href="javascript:void(0)">
								Галерея
							</a>
						</li>
						<li>
							<a href="javascript:void(0)">
								Новини
							</a>
						</li>
						<li>
							<a href="javascript:void(0)">
								Підтримати
							</a>
						</li>
						<li>
							<a href="javascript:void(0)">
								Навчання
							</a>
						</li>
						<li>
							<a href="javascript:void(0)">
								Запитання і відповіді
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-lg-12 col-xl-6">
				<div class="footer-contacts__wrapper">
					<div class="footer-contacts">
						<div class="footer-contacts__address">
							<span>м. Київ, вул. Інститутська 18 а</span>
						</div>
						<div class="footer-contacts__phones">
							<a href="tel:+380951816155" class="footer__phone">+38 (095) 181 61 55</a>
							<a href="tel:+380731816155" class="footer__phone">+38 (073) 181 61 55</a>
						</div>
					</div>
					<div class="footer-social__wrapper">
						<a href="mailto:kr@lyudy.com.ua" class="footer__mail">kr@lyudy.com.ua</a>
						<div class="footer__social">
							<a href="javascript:void(0)" class="icon-xmlid-823"></a>
							<a href="javascript:void(0)" class="icon-facebook-x-28-alt-x-29"></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="footer__copywrite">
					<span>Copyright. Кадровий резерв України, 2015 - 2019</span>
					<span>Розробка сайту - <a href="javascript:void(0)">FamilyLab</a></span>
				</div>
			</div>
		</div>
	</div>
</footer>
<a href="#" class="scroll-up"><i class="icon-next"></i></a>
<!--End footer-->

<!-- Scripts -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAiCgtligSrACm3LmR261yR-4akjV0XmpM&callback=initMap"
        async defer></script>
<script src="js/script.js"></script>
</body>

</html>