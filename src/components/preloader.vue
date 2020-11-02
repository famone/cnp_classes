<template>
	<div class="preloader">
		<img src="../assets/img/logotype.svg" alt="">
	</div>
</template>


<script>
	
</script>

<style>
	.preloader{
		position: fixed;
		z-index: -20;
		width: 100%;
		transition: all .7s ease-in-out;
		height: 100%;
		background-color: #111;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		opacity: 0;
		align-items: center;
	}
	.acPre{
		z-index: 20;
		opacity: 1;
	}
</style>