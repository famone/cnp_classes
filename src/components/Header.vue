<template>
	<div class="myheader" 
	:class="{transp: this.$route.path.includes('/courses/')}">
		<div class="container-fluid">
            <div class="shapka">
            	<router-link to="/" tag="a" class="header__logo wow">
	            	<img src="https://nikitapugachev.com/wp-content/themes/np/assets/img/Logo.svg">
	            </router-link>

	            <div class="log-row" v-if="!user">
	            	<router-link to="/enter" tag="button" class="shapka-btn">
	            		Войти
	            	</router-link>
	            </div>
	            <div class="log-row" v-else>
	            	<p class="white-txt hidden-xs">
	            		{{user.user_email}}
	            	</p>
	            	<router-link to="/lk" tag="button" class="kabinet">
	            		<span class="mdi mdi-account-outline"></span>
	            		Мои уроки
	            	</router-link>
	            	<button class="shapka-btn logout"@click="logout">Выйти</button>
	            </div>
	            
            </div>
        </div>
     </div>
</template>	


<script>
import {mapGetters, mapActions} from 'vuex'

	export default{
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
	    	}
  		},
	}
</script>


<style scoped>
	p.white-txt{
		margin-bottom: 0;
		font-size: 16px;
	}
	.logout{
		background-color: #262626;
	}
	.kabinet{
		margin: 0 5px;
	    display: block;
	    padding: 6px 20px;
	    background: #2E97E6;
	    border-radius: 5px;
	    font-size: 14px;
	    line-height: 24px;
	    font-weight: 600;
	    cursor: pointer;
	    color: #fff;
	}
</style>

