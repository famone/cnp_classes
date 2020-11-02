<template>
	<section id="mainslider">
		<swiper ref="mySwiper" :options="swiperOptions">
		    <swiper-slide v-for="item in courses">
		    	<div class="slider-banner" :style="{'background-image': 'url(' + item.img_blur + ')'}">
		    		<div class="banner-content">
		    			<h3>{{item.name}}</h3>
		    			<p class="white-txt" v-html="item.description.substr(0, 131) + '...' "></p>
							<router-link tag="a" :to="'/courses/' + item.id">
								<button class="shapka-btn">Перейти</button>
							</router-link>
		    		</div>
		    	</div>
		    </swiper-slide>
		</swiper>
<!--  -->
		<div class="btns">
			<!-- btn -->
		     <div class="swiper-button-next"></div>
    		<div class="swiper-button-prev"></div>
		</div>
		<!--  -->
	</section>
</template>

<script>
	export default{
		props: {
			courses: {
				type: Array,
				required: true
			}
		},
		computed: {
			swiper(){
	       		return this.$refs.mySwiper.$swiper
	    	},
		},
		// mounted(){
		//      this.swiper.slideTo(1, 1000)
		// },
		data(){
			return{
				 swiperOptions: {
                  slidesPerView: 1.9,
                  spaceBetween: 30,
                  draggable: true,
                  touchRatio: 0,
                  loop: true,    
                  infinite: true,
                  speed: 1000,
                  centeredSlides: true,
                  navigation: {
		            nextEl: '.swiper-button-next',
		            prevEl: '.swiper-button-prev',
		          },
		           breakpoints: {
			            320: {
			              slidesPerView: 1.2,
			              spaceBetween: 15,
			               touchRatio: 1
			            },
			            768: {
				          slidesPerView: 1.9,
				           touchRatio: 1
				        },
				        1150: {
				          slidesPerView: 1.9,
				           touchRatio: 0
				        }
			          }
            	},
			}
		}
	}
</script>

<style>
#mainslider{
	padding:40px 0;
	position: relative;
}
.swiper-container {
	height: 480px!important;
}
.swiper-wrapper{
	height: 480px!important;
}
.swiper-slide .slider-banner{
	height:  450px!important;
	opacity: .3;
	transition: all .6s ease-in-out;
}
.swiper-slide-active .slider-banner{
	opacity: 1;
}
.slider-banner{
	background-image: url('https://nikitapugachev.com/wp-content/themes/np/assets/img/first-slider__img1-min.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	overflow: hidden;
	border-radius: 15px;
	height:  480px!important;
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
}
.banner-content{
	transition: all .8s ease-in-out;
	opacity: 0;
	transform: translateY(30px);
	padding: 30px;
}
.swiper-slide-active .banner-content{
	opacity: 1;
	transform: translateY(0px);
}
.swiper-button-prev{
	height: 90%!important;
	width: 23%!important;
	background-color: transparent;
	position: absolute!important;
	left: 0!important;
	cursor:pointer;
	top: 40px!important;
}
.swiper-button-next{
	height: 90%!important;
	width: 23%!important;
	background-color: transparent;
	position: absolute!important;
	right: 0!important;
	cursor:pointer;
	top: 40px!important;
}
.swiper-button-next:after, .swiper-button-prev:after{
	display: none;
}
#mainslider .shapka-btn{
	margin: 0;
	padding:6px 35px;
}
</style>