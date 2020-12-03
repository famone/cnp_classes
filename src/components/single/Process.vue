<template>
	<section id="process">
		<div class="container-fluid">
			<div class="col-lg-6 col-lg-push-6 wow fadeInRight">
				<img src="https://nikitapugachev.com/wp-content/uploads/2020/11/framecourse.svg" class="uiux_nick">
			</div>
			<div class="col-lg-6 col-lg-pull-6">
				<h1>Процесс обучения</h1>
				<p class="black-txt">
				Наша платформа работает на всех устройствах, изучай короткие уроки, применяй новые знания на практике или с головой погружайся в большие курсы.</p>
				<router-link tag="button" to="/signup" class="show-more">Перенять опыт</router-link>
			</div>
		</div>
	</section>
</template>



<style>
	#process{
		padding: 260px 0;
		background-color: #fff;
	}
	#process h1{
		color: #262626;
	}
	.uiux_nick{
		width: 100%;
	}
	#process .show-more{
		width: fit-content!important;
		border-radius: 50px;
		padding:19px 30px;
		margin-top: 20px;
	}
</style>