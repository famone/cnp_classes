<template>
  <div>
    <!-- <preloader :class="{acPre : coursesNew === '' }" /> -->
    <!-- <Mainslider :courses="courses" v-if="courses" /> -->
    <FirstScreen />
    <Fadetitles />
    <Mainvideo />


    <section id="short">
    <div class="container w-900 text-center">
      <h1 class="super-big">Короткие уроки</h1>
      <p class="white-txt big-white">
        Маленькие уроки позволяют в сжатые сроки освоить новый навык и сразу же начать применять полученные знания на практике. Они отлично подойдут как новичкам, так и тем, кто хочет продолжать развиваться в новом направлении...
      </p>
    </div>
  </section>


    <Courses />
    <Misstakes />

    <Shortwh />

    <Lessons />
    <Process />
    <Chat />
    <More2 />
    <hr>
    <Questions />

  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapState } from "vuex";

import Courses from "../components/Courses.vue";
import preloader from "../components/ui/preloader.vue";
import Fadetitles from '../components/single/Fadetitles.vue';
import FirstScreen from '../components/single/FirstScreen.vue';
import Misstakes from '../components/single/Misstakes.vue';
import Shortwh from '../components/single/Shortwh.vue';
import Lessons from '../components/Lessons.vue';
import Process from '../components/single/Process.vue';
import Chat from '../components/single/Chat.vue';
import Mainvideo from '../components/single/Mainvideo.vue'
import More2 from '../components/single/More2.vue'
import Questions from '../components/single/Questions.vue'

export default {
  components: { Courses, preloader, Fadetitles, FirstScreen, 
    Misstakes, Shortwh, Lessons, Process, Chat, Mainvideo, More2, Questions },
  computed: {
    ...mapGetters({ courses: "courses/getCourses" }),
  },
};
</script>



<style>
  #short{
    padding:200px 0 50px 0;
  }
</style>  
