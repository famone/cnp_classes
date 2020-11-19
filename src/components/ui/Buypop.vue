<template>
	<div class="buy-pop">
		<div class="croxx" @click="hidePop($emit)">✕</div>
		<div class="pop-box text-center">
			<img src="../../assets/img/logotype.svg" class="logo">
			<h3>Регистрация</h3>
			<form class="text-center">
				<div class="form-box">
					<input type="text" placeholder="Почта" v-model="email"
					:class="{errorInp : ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email), 'chmark' : checkmark}">
				</div>
					<button class="blue-btn" @click.prevent="checkBeforePay(chosenCourse)">
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
import { required, email, minLength } from "vuelidate/lib/validators";
import axios from 'axios'
import loading from '../../components/ui/loading.vue'
import {mapActions} from 'vuex'

export default{
	props: {
		chosenCourse: {
			required: true,
			type: Object
		}
	},
	components: {loading},
	data(){
		return{
			email: '',
			checkmark: false
		}
	},
	validations: {	
		email: {
			required, 	
			email
		}
	},
	methods: {
		...mapActions({
	   		AUTH_REQUEST: "login/AUTH_REQUEST",
	    }),
		hidePop(){
			this.$emit('hidePop')
		},
		checkBeforePay(param){
			if(this.$v.email.$invalid) {
				this.$v.email.$touch();
				this.checkmark = false
				return
			}else{
				this.checkmark = true
			}


			let newUser = {
				user_email: this.email,
				course_id: param.id,
				cost: param.price
			}
			
			this.goPayNew(newUser)

		},
		goPayNew(newUser){
				var widget = new cp.CloudPayments();
				const vm = this;

			      widget.pay(
			        "charge",
			        {
			          publicId: "pk_1ca6aec798da797a3092eea9157f7",
			          description: "Покупка курса за: " + newUser.cost + "₽",
			          amount: parseInt(newUser.cost),
			          currency: "RUB",
			          accountId: newUser.user_email,
			          skin: "mini",
			          data: {
			            myProp: "myProp value",
			          },
			        },
			        {
			          onSuccess: function (options) {

			          	let form = {
			          		user_email: newUser.user_email,
			          		course_id: newUser.course_id
			          	}

			          	 

			          		axios
							.post('https://nikitapugachev.com/wp-json/np/v1/buy/lesson', form)
							.then(res =>{

								if(res.data.new){
									alert('Ваш пароль отправлен на почту ' + form.user_email)
									
									let userDate = {
										username: form.user_email,
				        				password: res.data.password,
									}
									
									 vm.AUTH_REQUEST(userDate).then(() => {
								        vm.$router.replace("/lk");
								 
								      });

								}else{
									vm.$router.replace("/enter");
								}
								
							}).catch(error => alert(error))

			          },
			          onFail: function (reason, options) {},
			          onComplete: function (paymentResult, options) {},
			        }
			      );
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
.chmark{
		background-size: 20px;
		background-image: url(../../assets/img/checkmark.svg);
		background-position: right 10px center;
		background-repeat: no-repeat;
	}
</style>