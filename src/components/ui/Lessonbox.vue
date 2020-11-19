<template>
	<div class="col-lg-12">
		<div class="less-box wow fadeInUp" :style="{'background-image': 'url(' + less.img + ')'}">
			<div class="less-cont">
				<p class="white-txt big-white">{{less.date}}</p>
				<h1>{{less.title}}</h1>
				<p class="white-txt big-white">{{less.miniDescr}}</p>
				<a href="https://nikitapugachev.com/">
					<button class="show-more">Перейти</button>
				</a>
			</div>
		</div>
	</div>
</template>


<script>
	export default{
		props: {
			less: {
				type: Object,
				required:  true
			}
		}
	}
</script>




