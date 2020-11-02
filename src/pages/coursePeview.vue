<template>
	<div>
		<section id="coursepage">


		<div class="bgfon" :style="{'background-image': 'url(' + course(id).img + ')'}">
		    <iframe data-v-ddfea3ac="" src="https://player.vimeo.com/video/460741059?loop=true&amp;byline=false&amp;controls=false&amp;fun=false&amp;muted=true&amp;portrait=false&amp;title=false&amp;autoplay=true&amp;transparent=true&amp;gesture=media" allowtransparency allow="autoplay" class="bg-video__player"></iframe>
		</div>


		<div class="container-fluid">
			<div class="anatation">
				<div class="col-lg-12">
					<h2>{{course(id).name}}</h2>
				</div>
				<div class="col-lg-3">
					<button class="main-btn w-100" @click="buyCourse(id)">Купить за {{course(id).price}} ₽</button>
				</div>
				<div class="col-lg-9">
					<p class=" hidden-xs white-txt fsz-16" v-html="course(id).description"></p>
				</div>
			</div>
		</div>
	</section>

	<iframe v-if="payment" :src="payment" width="100%" height="100%" style="border: none;height: 100%;position: fixed;z-index: 200;top: 0;left: 0;" align="left">
 	</iframe>
 	<div class="mycross" v-if="payment" @click="clearFrame()">✕</div>



	</div>
	
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
	export default{
		data(){
			return{
				id: ''
			}
		},
		created(){
			this.id = this.$route.params.id
		},
		computed: {
			...mapGetters({
				course: 'courses/getSingleCourse', 
				user: 'login/getUser', 
				payment: 'courses/getPayment'})
		},
		methods: {
			...mapActions({
			      BUY_COURSE: "courses/BUY_COURSE",
			 }),
			buyCourse(id){

				let form = {
					user_id: this.user.id,
					course_id: id,
					price: this.course(id).price
				}

				console.log(form)

				// return
		

				this.BUY_COURSE(form).then(() => {
					return
		        this.$router.replace("/lk");
		      });
				
			},
			clearFrame(){
				this.$store.dispatch('courses/CLEAR_FRAME')
			}
		}
	}
</script>


<style>
.bgfon{
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 0;
	/*background-image: url(https://nikitapugachev.com/wp-content/themes/np/assets/img/zagl_big.jpg);*/
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;
}
.bg-video__player{
	position: absolute;
	right: 0;
	bottom: 0;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	min-width: 100%;
	min-height: 100%;
	height: 56.25vw;
	width: 177.78vh;
	border-width: 0;
	outline-width: 0;
}
.bgfon:after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 260px;
    bottom: -1px;
    background: linear-gradient(180deg,rgba(17,17,17,0),#111);
    z-index: 1;
}
.mycross{
	position: fixed;
    top: 8px;
    right: 19px;
    color: #fff;
    font-weight: 400;
    font-size: 38px;
    z-index: 300;
    cursor: pointer;
}
iframe #wrapper{
	background-color: transparent!important;
}
iframe a.close.init {
   display: none;
}
</style>