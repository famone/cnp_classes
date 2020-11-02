<template>
	<h1>Лк айтем</h1>
</template>

<script>
	export default{
		created(){
			if(this.$route.path.includes('lk')){
				console.log('я гей')
			}
			// console.log(this.$route.path)
		}
	}
</script>