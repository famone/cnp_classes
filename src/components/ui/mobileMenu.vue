<template>
	<div class="mob-menu" :class="{mobMenuAc : mobActive}" @click="closeMen($emit)">
		<h3>Обучение</h3>
		<router-link tag="p" to="/courses" class="head-link" >Уроки</router-link>
		<router-link tag="p" to="/lessons" class="head-link" >Курсы</router-link>
		
		<div class="lk-tools" v-if="user">
			<hr>
			<router-link tag="p" to="/lk" class="head-link" >Мои уроки</router-link>
			<router-link tag="p" to="/lk2" class="head-link" >Мои курсы</router-link>
		</div>
		<div class="lk-enter-btn">
			<hr>
			<router-link to="/enter" tag="button" class="main-btn" v-if="!user" @click="closeMen($emit)">
	            Войти
	        </router-link>
	        <button class="shapka-btn logout" @click="logout(), closeMen($emit)" v-else>
	            Выйти
	        </button>
		</div>
	</div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'

	export default{
		props: {
			mobActive: {
				type: Boolean,
				required: true
			}
		},
		computed: {
			...mapGetters({ user: "login/getUser"}),
		},
		methods: {
			...mapActions({
      			singOut: "login/SIGN_OUT",
	    	}),
	    	logout() {
		      		this.singOut().then(() => {
		        		this.$router.replace("/enter");
		      		});
		   	},
		   	closeMen(){
		   		this.$emit('closeMen')
		   	}
		}
	}
</script>