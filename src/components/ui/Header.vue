<template>
	<div class="myheader" 
	:class="{transp: this.$route.path.includes('/courses/')}">
		<div class="container-fluid">
            <div class="shapka">
            	<div class="log-row">
            		<router-link to="/" tag="a" class="header__logo">
	            		<img src="https://nikitapugachev.ru/wp-content/themes/np/assets/img/Logo.svg" class="main-logo">
	            	</router-link>
	            	<div class="navs hidden-xs ">
	            		<router-link tag="a" to="/courses" class="head-link">Уроки</router-link>
	            		<router-link tag="a" to="/lessons" class="head-link">Курсы</router-link>
	            	</div>
            	</div>


            	 <div class="burger-btn hidden-lg hidden-md hidden-sm" :class="{acBurger : mobActive}" @click="showMobile($emit)">
            		<span></span>
            		<span></span>
            	</div>
            	

	            <div class="log-row hidden-xs" v-if="!user">
	            	<router-link to="/enter" tag="button" class="shapka-btn">
	            		Войти
	            	</router-link>
	            </div>
	            <div class="log-row hidden-xs" v-else>
	            	<!-- <button class="servers"><img src="../../assets/img/servers.svg" alt="">Сервисы</button> -->
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
import mobileMenu from '../../components/ui/mobileMenu.vue'

	export default{
		components: {mobileMenu},
		props: {
			mobActive: {
				required: true,
				type: Boolean
			}
		},
		computed: {
			...mapGetters({ user: "login/getUser"}),
		},
		methods: {
	    	activateDrop(){
	    		this.$emit('activateDrop')
	    	},
	    	showMobile(){
	    		this.$emit('showMobile')
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

