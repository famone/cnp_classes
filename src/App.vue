<template>
    <div id="app">


      <Header />
<!--       <transition name="slide" mode="out-in"> -->
      	<router-view></router-view>
<!--       </transition>	 -->

      <Footer />

      
    </div>
</template>

<script>
import './assets/css/style.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import preloader from './components/preloader.vue'
import {mapState} from 'vuex'

export default{
	components: {Header, Footer},
}
</script>

<style>


.slide-leave-active{
	transition: opacity .3s ease;
	opacity: 0;
	animation: slide-out .3s  ease-out forwards;
}
.slide-leave{
	opacity: 1;
	transform: translateX(0px);
}
.slide-enter-active{
	animation: slide-in .3s  ease-out forwards;
	opacity: 1;
}



@keyframes slide-out{
	0%{
		transform: translateY(0);
	}
	100%{
		transform: translateY(50px);
	}
}
@keyframes slide-in{
	0%{
		transform: translateY(50px);
		opacity: 0;
	}
	100%{
		transform: translateY(0px);
		opacity: 1;
	}
}
</style>

