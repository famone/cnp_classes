<template>
	<div class="snackbar">
		<p><span class="mdi mdi-eye-off-outline" style="color: #f44336;"> </span> Упс, ошибка доступа!</p>
		<button class="close-btn" @click="closeSnack">Закрыть</button>
	</div>
</template>

<script>
	export default{
		methods: {
			closeSnack(){
				this.$store.commit('login/SNACKBAR')
			}
		}
	}
</script>

<style>
	.snackbar{
		position: absolute;
		top: 70px;
		width: 360px;
		padding:14px 16px;
		border-radius: 4px;
		background-color:  #1A1A1A;
		box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
		z-index: 100;
		left: calc(50% - 180px);
		font-size: 16px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.close-btn{
		margin: 0;
	    display: block;
	    padding: 6px 20px;
	    background: transparent;
	    border: 1px #f4433642 solid;
	    border-radius: 5px;
	    font-size: 14px;
	    line-height: 24px;
	    font-weight: 600;
	    cursor: pointer;
	    color: #fff;
	    transition: all .3s ease;
	}
	.close-btn:hover{
		background-color: #f4433642;
		border-color: transparent;
	}
	
	@media (max-width: 768px) {
		.snackbar{
			top: 22%;
		}
	}
	.snackbar p{
		color: #fff;
		margin-bottom: 0;
	}
</style>