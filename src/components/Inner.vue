<template>
	<section id="inner">
		<div class="container">
			<div class="col-lg-12 text-center">
				<h1 class="wow fadeInDown">{{innerSec.title}}</h1>
				<p class="white-txt big-white wow fadeInUp" v-html="innerSec.descr"></p>
			</div>
		</div>
	</section>
</template>


<script>
	export default{
		props: {
			innerSec: {
				type: Object,
				required:  true
			}
		}
	}
</script>

<style>
	#inner .container{
		max-width: 900px;
	}
</style>