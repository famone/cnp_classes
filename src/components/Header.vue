<template>
	<div class="myheader" 
	:class="{transp: this.$route.path.includes('/courses/')}">
		<div class="container-fluid">
            <div class="shapka">
            	<div class="log-row">
            		<router-link to="/" tag="a" class="header__logo">
	            		<img src="https://nikitapugachev.com/wp-content/themes/np/assets/img/Logo.svg">
	            	</router-link>
	            	<div class="navs hidden-xs" v-if="user">
	            		<router-link tag="a" to="/lk" class="head-link">Мои уроки</router-link>
	            		<router-link tag="a" to="/123" class="head-link">Мои курсы</router-link>
	            	</div>
            	</div>
            	

	            <div class="log-row" v-if="!user">
	            	<router-link to="/enter" tag="button" class="shapka-btn">
	            		Войти
	            	</router-link>
	            </div>
	            <div class="log-row" v-else>
	            	<button class="servers"><img src="../assets/img/servers.svg" alt="">Сервисы</button>
	            	<div class="avatar" @click="activateDrop($emit)">
	            		{{user.user_nicename[0]}}
	            	</div>
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
    		// ...mapActions({
      // 			singOut: "login/SIGN_OUT",
    		// }),

	    	// logout() {
	     //  		this.singOut().then(() => {
	     //    		this.$router.replace("/enter");
	     //  		});
	    	// },

	    	activateDrop(){
	    		this.$emit('activateDrop')
	    	}
  		},
	}
</script>


<style scoped>
	p.white-txt{
		margin-bottom: 0;
		font-size: 16px;
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

