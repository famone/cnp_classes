<template>
	<section id="mylessons">
		<div class="container-fluid">
			<div class="col-lg-12">
				<h2>Мои уроки</h2>
				 <p class="grey-txt" v-if="purchase === '' ">У вас нет еще ни одной покупки</p>
				<courseBox v-for="course in purchase" :course="course"/> 
			</div>

		</div>
	</section>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
import courseBox from '../components/courseBox.vue'

export default{
	components: {courseBox},
	computed: {
		...mapGetters({ user: "login/getUser", purchase: "login/getPurchase"}),
	},
	created(){
		const user = JSON.parse(localStorage.getItem("user"))
		this.$store.dispatch("login/VALIDATE", user);
	}
}
</script>