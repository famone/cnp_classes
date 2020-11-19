<template>
	<section id="p404">
		<div class="container">
			<div class="col-lg-12 text-center">
				<h1>Страница не найдена</h1>
				<router-link tag="button" to="/" class="main-btn">
					Перейти на главную
				</router-link>
			</div>
		</div>
	</section>
</template>


<script>
	export default{
		mounted(){
			console.log(this.$route.matched[0].path)
		}
	}
</script>