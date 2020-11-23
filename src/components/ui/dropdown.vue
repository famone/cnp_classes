<template>
	<!-- @mouseleave="deActivateDrop($emit)" -->
	<div class="dropdown" >
	            	<!-- <router-link tag="button" to="/personal" class="shapka-btn logout"  >
	            		<span class="mdi mdi-account-outline"></span> Личный кабинет
	            	</router-link> -->

	            	<router-link tag="button" to="/lk" class="shapka-btn logout"  >
	            		<span class="mdi mdi-laptop-windows"></span> Мои уроки
	            	</router-link>
	            	<router-link tag="button" to="/lk2" class="shapka-btn logout"  >
	            		<span class="mdi mdi-book-open-variant"></span> Мои курсы
	            	</router-link>

	            	<button class="shapka-btn logout" @click="activateDrop($emit), logout()">
	            		<span class="mdi mdi-logout"></span> Выйти
	            	</button>
	            </div>
</template>

<script>
import {mapActions} from 'vuex'
	export default{
		methods: {
			...mapActions({
      			singOut: "login/SIGN_OUT",
    		}),
			activateDrop(){
				this.$emit('activateDrop')
			},
			deActivateDrop(){
				this.$emit('deActivateDrop')
			},
			logout() {
	      		this.singOut().then(() => {
	        		this.$router.replace("/enter");
	      		});
	    	},
		}
	}
</script>

