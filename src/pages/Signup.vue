<template>
	<section id="login" class="container">
		
		<transition name="slide" mode="out-in">
			<enter v-if="enterAlert"/>
		</transition>



		<div class="col-lg-12 text-center">
			<svg data-v-850e14e4="" width="133" height="70" viewBox="0 0 133 70" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"><path data-v-850e14e4="" fill-rule="evenodd" clip-rule="evenodd" d="M79.5382 35.0015H114.026V17.5007H87.2678L68.6075 0H132.687V52.5022H90.469V70L34.4911 17.5007H18.6603V52.5022H45.425L64.0822 70H0V0H42.2176L79.5382 35.0015Z" fill="#EDEDED"></path></svg>
			<h3>Регистрация</h3>
			<form @submit.prevent="login" class="text-center">
				<div class="form-box">
					<input type="text" 
		:class="{errorInp : ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.email)}"
					 v-model="name" placeholder="Почта">
				</div>
				<div class="form-box">
					<input type="password"
	:class="{errorInp : ($v.pass1.$dirty && !$v.pass1.required) || ($v.pass1.$dirty && !$v.pass1.minLength)}"
					v-model="pass1" placeholder="Пароль">
				</div>
				<div class="form-box">
					<input type="password" :class="{errorInp : $v.pass1.$dirty && !$v.pass1.required || pass1 !== pass2}"
					v-model="pass2" placeholder="Подтверждение пароля">
				</div>
				<password v-model="pass1" :strength-meter-only="true" />
					<button class="blue-btn">
						<loading v-if="loadingLog" /> 
						<span v-else>Зарегистрироваться</span>
					</button>
				<p class="small-grey">Уже есть аккаунт?</p>
				<router-link tag="a" to="/enter" class="blue-text sz-14">Авторизируйся</router-link>

			</form>
		</div>
	</section>
</template>


<script>
import Password from 'vue-password-strength-meter'
import enter from '../components/enter.vue'
import {mapActions, mapState, mapGetters} from 'vuex'
import loading from '../components/loading.vue'
import { required, email, minLength } from "vuelidate/lib/validators";

export default{
	components: {loading, Password, enter},
	data(){
		return{
			name: '',
			pass1: '',
			pass2: '',
			loadingLog: false,
		}
	},
	validations: {
		pass1: {
			required,
			minLength: minLength(7)
		},
		pass2: {
			required
		},	
		name: {
			required, 
			email
		}
	},
	computed: {
		...mapState('signup', ['enterAlert']),
		...mapGetters('signup', ['getNew'])
	},
	methods: {
		...mapActions({
	      SIGN_UP: "signup/SIGN_UP",
	    }),
		login(){
			if(this.$v.$invalid) {
					this.$v.$touch();
					return;
			}

			this.loadingLog = true
			let form = {
	        	username: this.name,
	        	password: this.pass1,
	     	}

	     	if(this.pass1 !== this.pass2){
	     		this.loadingLog = false
	     		return
	     	}



	     	this.SIGN_UP(form).then(() => {
	     		this.loadingLog = false
	     		if(!this.getNew){
	     			this.$router.replace("/enter");
	     			return
	     		}
	     		
	     		// alert(this.getNew )
	     		// if(!this.getNew){
	     		// 	alert('такой есть')
	     		// }else{
	     		// 	alert('получилось')
	     		// }

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