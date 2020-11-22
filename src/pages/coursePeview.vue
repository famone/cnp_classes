<template>
  <div>

    <Buypop :class="{buyPopAc: logAlert}" @hidePop="hidePop" :chosenCourse="chosenCourse"/>

    <section id="coursepage" v-if="!playLesson">

      <Teaser :teaserCont="course(id)" />

      <div class="go-to-watch" v-if="purchaseId.includes(course(id).id)">
        <button class="main-btn" @click="playLesson = !playLesson">
                Перейти к просмотру
        </button>
      </div>

      <div class="container-fluid">
          <div class="anatation">
            <div class="col-lg-12">
              <h2>{{ course(id).name }}</h2>
            </div>

            <div class="col-lg-3" v-if="!purchaseId.includes(course(id).id)">
              <button class="main-btn w-100" @click="buyCourse(course(id))">
                Купить за {{ course(id).price }} ₽
              </button>
            </div>

            <div class="col-lg-9" v-if="!purchaseId.includes(course(id).id)">
              <p class="hidden-xs white-txt fsz-16" v-html="course(id).description"></p>
            </div>
            <div class="col-lg-12" v-else>
              <p class="hidden-xs white-txt fsz-16" v-html="course(id).description"></p>
            </div>
          </div>
      </div>

    </section>


<!-- mobile descr -->
    <div class="hidden-lg hidden-sm hidden-md hidden-xl" v-if="!playLesson">
      <div class="container-fluid">
        <div class="col-lg-12">
           <p class="white-txt fsz-16" v-html="course(id).description"></p>
        </div>
      </div>
    </div>
<!-- mobile descr -->   


<videoPlayer :videoLink="course(id).videoSource" v-else/>


<p class="hidden">{{checkpageId}}</p>


    <otsilki :flashbacks="course(id)" v-if="course(id).linkCourse" />
  </div>
</template>

<script>
import axios from 'axios'
import otsilki from "../components/otsilki.vue";
import { mapGetters, mapActions, mapState } from "vuex";
import Buypop from '../components/ui/Buypop.vue';
import Teaser from '../components/ui/Teaser.vue'
import videoPlayer from '../components/ui/videoPlayer.vue'

export default {
  components: { otsilki, Buypop, Teaser, videoPlayer },

  props: ["id"],
  data(){
    return{
      logAlert: false,
      chosenCourse: {},
      playLesson: false
    }
  }, 
  crated(){
    console.log(this.course(id))
  },
  computed: {
    ...mapGetters({
      course: "courses/getSingleCourse",
      user: "login/getUser",
      purchaseId: "login/getPurchaseId"
    }),
    videoStr(){
      let id = this.$route.params.id
         let first = this.course(id).video.substr(0, 27)
         return first.substr(18, 27)
    },
    checkpageId(){
      this.playLesson = false
      return this.id
    }
  },
  methods: {
    hidePop(){
        this.logAlert = false
    },
    ...mapActions({
      BUY_COURSE: "courses/BUY_COURSE",
    }),
    buyCourse(param) {
    
      if(!this.user){
        this.logAlert = true
        this.chosenCourse = param
        // console.log(param);
        return
      }

      let form = {
          user: this.user.user_email,
          cost: param.price,
          course_id: param.id
      }

      this.goPay(form)
    },
              goPay(form){
                var widget = new cp.CloudPayments();
                const vm = this;

                widget.pay(
                  "auth",
                  {
                    publicId: "pk_1ca6aec798da797a3092eea9157f7",
                    description: "Покупка курса за " + form.cost + "₽",
                    amount: parseInt(form.cost),
                    currency: "RUB",
                    accountId: form.user,
                    skin: "mini",
                    data: {
                      myProp: "myProp value",
                    },
                  },
                  {
                    onSuccess: function (options) {

                      let newOrder = {
                        course_id: form.course_id,
                        user_id: vm.user.id
                      }

                      // console.log(newOrder)
                      
                        axios
                        .post('https://nikitapugachev.com/wp-json/np/v1/buy/lesson', newOrder)
                        .then(res =>{
                          console.log(res)
                          vm.$router.replace("/lk");

                        }).catch(error => alert(error))

                    },
                    onFail: function (reason, options) {},
                    onComplete: function (paymentResult, options) {},
                  }
                );
              }
  },
};
</script>


<style>
.bgfon {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
.bg-video__player {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  height: 400px;
  bottom: -1px;
 background: linear-gradient(180deg, rgba(17, 17, 17, 0) 0%, #111111 100%);
  z-index: 1;
}
#player{
  padding: 15px;
  margin-top: 50px;
}
.vimeo__player{
  width: 100%;
  height: 90vh;
}

</style>