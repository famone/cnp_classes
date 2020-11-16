<template>
	<div class="buy-pop">
		<div class="croxx" @click="hidePop($emit)">✕</div>
		<div class="pop-box text-center">
			<img src="../../assets/img/logotype.svg" class="logo">
			<h3>Регистрация</h3>
			<form class="text-center">
				<div class="form-box">
					<input type="text" placeholder="Почта">
				</div>
					<button class="blue-btn" @click.prevent="goPay(chosenCourse)">
						<!-- <loading />  -->
						<span >Зарегистрироватся</span>
					</button>
				<p class="small-grey">Уже есть аккаунт?</p>
				<router-link tag="a" to="/enter" class="blue-text sz-14">Авторизируйся</router-link>
				<br><br>
				<p class="small-grey">Создавая аккаунт Вы принимаете наше <br> пользовательское соглашение</p>

			</form>
		</div>
	</div>
</template>

<script>
import loading from '../../components/ui/loading.vue'

export default{
	props: {
		chosenCourse: {
			required: true,
			type: Object
		}
	},
	components: {loading},
	methods: {
		hidePop(){
			this.$emit('hidePop')
		},
		goPay(param){
			console.log(param.price)
		}
	}
}
</script>


<style scoped>
h3{
	margin-bottom: 20px;
}
svg{
	height: 50px;
	margin-bottom: 20px;
}
form{
	width: 335px;
	margin: 0 auto;
}
.logo{
	height: 36px;
    margin-bottom: 20px;
}
input{
	background-color: #fff;
	font-size: 14px;
	font-weight: 600;
    color: #111;
    line-height: 140%;
    height: 50px;
    max-width: 335px;
    width: 100%;
    padding: 15px 16px;
    border: none;
    margin-bottom: 20px;
    border-radius: 5px;
    border:2px #fff solid;
    transition: all .2s ease;
}
.blue-btn{
	font-size: 16px;
	color: #fff;
	font-weight: 600;
	padding: 13px 67px;
	background-color: #2E97E6;
	border-radius: 5px;
	border:none;
	transition: all .3s ease;
	margin-bottom: 20px;
}
.blue-btn{
	width: 100%;
}
.errorInp{
	border:2px #f44336 solid!important;
}
</style>