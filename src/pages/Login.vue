<template>
	<section id="login" class="container">
		
		<!-- <transition name="slide" mode="out-in">
			<snackbar v-if="snack"/>
		</transition>
 -->

		<div class="col-lg-12 text-center">
			<img src="../assets/img/logotype.svg" class="logo">
			<h3>Авторизация</h3>
			<form @submit.prevent="login()" class="text-center">
				<div class="form-box">
					<input type="text" :class="{errorInp : $v.name.$dirty && !$v.name.required}"
					 v-model="name" placeholder="Логин">
				</div>
				<div class="form-box">
					<input type="password" :class="{errorInp : $v.pass.$dirty && !$v.pass.required}"
					v-model="pass" placeholder="Пароль">
					<router-link tag="a" to="/recovery" class="blue-text sz-14">Забыли пароль?</router-link>
				</div>
					<button class="blue-btn">
						<!-- <loading v-if="loadingLog" />  -->
						<span>Войти</span>
					</button>
				<p class="small-grey">У тебя еще нет аккаунта?</p>
				<router-link tag="a" to="/signup" class="blue-text sz-14">Зарегистрируйся</router-link>

			</form>
		</div>
	</section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import { required } from "vuelidate/lib/validators";

export default{
	// components: {loading, snackbar},
	data(){
		return{
			name: '',
			pass: '',
			loadingLog: false
		}
	},
	validations: {
		pass: {
			required
		},	
		name: {
			required
		}
	},
	computed: {
		// ...mapState('smeta', ['snack'])
	},
	methods: {
		...mapActions({
	      AUTH_REQUEST: "login/AUTH_REQUEST",
	    }),
		login(){
			if(this.$v.$invalid) {
					this.$v.$touch();
					return;
			}

			this.loadingLog = true
			let form = {
	        	username: this.name,
	        	password: this.pass,
	     	}

	     	this.AUTH_REQUEST(form).then(() => {
	     		this.loadingLog = false;
	     		this.name = '';
	     		this.pass = '';
		        this.$router.replace("/lk");
		      });
	    }
	}
}
</script>

<style scoped>
h3{
	margin-bottom: 20px;
}
img.logo{
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
input[type="password"]{
	margin-bottom: 5px;
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
	margin-top: 15px;
}
.blue-btn{
	width: 100%;
}
.errorInp{
	border:2px #f44336 solid!important;
}
</style>