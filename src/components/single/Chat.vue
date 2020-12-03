<template>
	<section id="chat">
		<div class="container-fluid">


			<div class="col-lg-5 col-lg-offset-1 wow fadeInUp chat-box">
				<!-- chat1 -->
				<div class="chat1 wow fadeInUp">
					<img src="https://nikitapugachev.com/wp-content/uploads/2020/11/drewava.png" >
					<div class="chat-txt">
						<h4>Андрей Смирнов</h4>
						<p class="white-txt">Почему у меня получается такая темная картинка?</p>
					</div>
				</div>
					<!-- chat2 -->
				<div class="chat2 wow fadeInUp" >
					<div class="chat-txt">
						<h4>Никита Пугачев</h4>
						<p class="white-txt">Попробуй поставить прибор с рисующим светом ближе, а под ним флаг, чтобы лишний свет не засвечивал фон. С обратной стороны обязательно должен быть отражатель, чтобы подсветить темную сторону! И чуть купнее, а то много пустого места... </p>
					</div>
					<img src="../../assets/img/ava1.png" >
				</div>
				<!-- chat3 -->
				<div class="chat3 wow fadeInUp" >
					<img src="https://nikitapugachev.com/wp-content/uploads/2020/11/drewava.png" >
					<div class="chat-img-box"> 
						<img src="../../assets/img/herimg.png">
						<div class="chat-txt">
							<p class="white-txt">Получилось, спасибо!</p>
						</div>
					</div>
				</div>

			</div>

			<div class="col-lg-5 col-lg-offset-1">
				<h1>Мы на связи!</h1>
				<p class="black-txt">
				Во время обучения каждый участник получает поддержку по заданиям и разбор выполненной работы на предмет ошибок с комментариями и советами по их исправлению.</p>

			</div>

		</div>
	</section>
</template>



<style>
	#chat{
		padding: 200px 0;
		background-color: #fff;
	}
	#chat h1{
		color: #262626;
	}
	.chat-box{
		margin-top:-125px;
	}
	.chat1{
		display: flex;
		justify-content: flex-start;
		margin-bottom: 30px;
	}
	.chat1 img{
		height: 40px;
		width: 40px;
		margin-right: 10px;
	}
	.chat2{
		display: flex;
		justify-content: flex-end;
		margin-bottom: 30px;
	}
	.chat2 img{
		height: 40px;
		width: 40px;
		margin-left: 10px;
	}
	.chat3{
		display: flex;
		justify-content: flex-start;
		margin-bottom: 30px;
	}
	.chat3 img{
		height: 40px;
		width: 40px;
		margin-right: 10px;
	}
	.chat-img-box img{
		width: 280px;
		height: inherit;
	}
	.chat-img-box .chat-txt{
		border-radius: 0 0 10px 10px;
	}
	.chat-txt{
		background: #2E97E6;
		padding: 15px;
		border-radius: 10px; 
		max-width: 280px;
	}
	.chat-txt h4{
		font-size: 16px;
		margin: 0;
		font-weight: 600;
		margin-bottom: 5px;
	}
	.chat-txt .white-txt{
		margin: 0;
		font-size: 16px;
		font-weight: 400;
	}
</style>