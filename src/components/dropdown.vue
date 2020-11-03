<template>
	<div class="dropdown" @mouseleave="deActivateDrop($emit)">
	            	<button class="shapka-btn logout" @click="activateDrop($emit)" disabled>
	            		<span class="mdi mdi-account-outline"></span> Личный кабинет
	            	</button>

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
	        		this.$store.dispatch('courses/CLEAR_BOUGHTS')
	      		});
	    	},
		}
	}
</script>

