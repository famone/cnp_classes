<template>
<<<<<<< HEAD
	<section id="otsilki">
		<div class="container-fluid">
			
				<div class="row">
					<div class="col-lg-12">
						<div class="subline">
							<h2>Отсылки</h2>
							
						</div>
			    	</div>
				</div>

			<div class="row devider">	
				<router-link tag="div" :to=" '/courses/' + flash.id " v-for="flash in flashbacks.linkCourse" 
				class="col-lg-3 course-box">

			 		<div class="course-img" :style="{'background-image': 'url(' + flash.picture + ')'}"></div>
					<h4>{{flash.name}}</h4>
					<!-- <p class="grey-txt" v-html="flash.post_content.substr(0, 131) + '...' "></p>  -->
				</router-link>
			</div>
				
			


		</div>
	</section>
=======
  <section id="otsilki">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="subline">
            <h2>Отсылки</h2>
          </div>
        </div>
      </div>

      <div class="row devider">
        <router-link
          tag="div"
          v-for="flash in flashbacks.linkCourse"
          :key="flash.id"
          :to="'/courses/' + flash.id"
          class="col-lg-3 course-box"
        >
          <div
            class="course-img"
            :style="{ 'background-image': 'url(' + flash.picture + ')' }"
          ></div>
          <h4>{{ flash.name }}</h4>
          <!-- <p class="grey-txt" v-html="flash.post_content.substr(0, 131) + '...' "></p>  -->
        </router-link>
      </div>
    </div>
  </section>
>>>>>>> 6b3109202f9276cbed97d5746eb886f6ff3994b5
</template>


<script>
import courseBox from "../components/courseBox.vue";

export default {
  props: {
    flashbacks: {
      type: Object,
      required: true,
    },
  },
  components: { courseBox },
  methods: {
    goToLink(link) {
      this.$router.push("/").then(() => {
        this.$router.replace("/courses/" + link);
      });

      // this.$router.push('/courses/15')
    },
  },
};
</script>