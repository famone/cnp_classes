<template>
	<section id="mylessons">
		<div class="container-fluid">
			<div class="row">
				
				<div class="col-lg-12">
					<h2>Мои уроки</h2>
				</div>
				<div class="col-lg-12">
					<p class="grey-txt" v-if="purchase === '' ">У вас нет еще ни одной покупки</p>
				</div>
				 
				<courseBox v-for="course in purchase" :course="course"/> 
			</div>

		</div>
	</section>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
import courseBox from '../components/ui/courseBox.vue'

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