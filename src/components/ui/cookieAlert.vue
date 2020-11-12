<template>
	<div class="cookie-alert">
		<p class="white-txt">Наш сайт, как и большинство других, использует файлы cookie и другие похожие технологии (пиксельные тэги и т. п.), чтобы предоставлять услуги, наиболее отвечающие Вашим интересам и потребностям, а также собирать статистическую и маркетинговую информацию для анализа и совершенствования наших услуг и сайтов.</p>
		<button class="shapka-btn" @click="hideCookie($emit)">Понятно</button>
	</div>
</template>


<script>
	export default{
		methods: {
			hideCookie(){
				this.$emit('hideCookie')
			}
		}
	}
</script>
