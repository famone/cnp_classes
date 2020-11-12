<template>
	<section id="login" class="container">
		
		<!-- <transition name="slide" mode="out-in">
			<snackbar v-if="snack"/>
		</transition> -->


		<div class="col-lg-12 text-center">
			<svg data-v-850e14e4="" width="133" height="70" viewBox="0 0 133 70" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"><path data-v-850e14e4="" fill-rule="evenodd" clip-rule="evenodd" d="M79.5382 35.0015H114.026V17.5007H87.2678L68.6075 0H132.687V52.5022H90.469V70L34.4911 17.5007H18.6603V52.5022H45.425L64.0822 70H0V0H42.2176L79.5382 35.0015Z" fill="#EDEDED"></path></svg>
			<h3>Восстановление пароля</h3>
			<form @submit.prevent="login()" class="text-center">
				<div class="form-box">
					<input type="text" :class="{errorInp : $v.email.$dirty && !$v.email.required}"
					 v-model="email" placeholder="Почта">
				</div>
					<button class="blue-btn">
						<loading v-if="loadingLog" /> 
						<span v-else>Восстановить</span>
					</button>
				<p class="small-grey">Еще не завел аккаунт?</p>
				<router-link tag="a" to="/signup" class="blue-text sz-14">Зарегистрируйся</router-link>

			</form>
		</div>
	</section>
</template>

<script>
// import snackbar from '../components/snackbar.vue'
import {mapActions, mapState} from 'vuex'
import loading from '../components/ui/loading.vue'
import { required } from "vuelidate/lib/validators";

export default{
	components: {loading},
	data(){
		return{
			email: '',
			loadingLog: false
		}
	},
	validations: {	
		email: {
			required
		}
	},
	methods: {
		...mapActions({
	      REMEMBER_PASS: "forgot/REMEMBER_PASS",
	    }),
		login(){
			if(this.$v.$invalid) {
					this.$v.$touch();
					return;
			}

			this.loadingLog = true

			
				let email = this.email
			

	     	
	 

	     	this.REMEMBER_PASS(email).then(() => {
	     		this.loadingLog = false
		        // this.$router.replace("/course");
		      });
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