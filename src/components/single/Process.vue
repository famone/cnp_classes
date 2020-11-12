<template>
	<section id="process">
		<div class="container-fluid">
			<div class="col-lg-5">
				<h1>Процесс обучения</h1>
				<p class="black-txt">
				Наша платформа работает на всех устройствах, изучай короткие уроки и применяй на практике или погружайся с головой в полноценные курсы, практикуй полученные знания, получай обратную связь и набирайся опыта!</p>
				<router-link tag="button" to="/courses" class="show-more">Перенять опыт</router-link>
			</div>
			<div class="col-lg-7 wow fadeInRight">
				<img src="../../assets/img/uiux_nick.png" class="uiux_nick">
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