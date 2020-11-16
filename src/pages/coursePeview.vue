<template>
  <div>

    <Buypop :class="{buyPopAc: logAlert}" @hidePop="hidePop" :chosenCourse="chosenCourse"/>

    <section id="coursepage">
      <div class="bgfon":style="{ 'background-image': 'url(' + course(id).img + ')' }">
        <iframe
          src="https://player.vimeo.com/video/460741059?loop=true&amp;byline=false&amp;controls=false&amp;fun=false&amp;muted=true&amp;portrait=false&amp;title=false&amp;autoplay=true&amp;transparent=true&amp;gesture=media"
          allowtransparency
          allow="autoplay"
          class="bg-video__player"
        ></iframe>
      </div>

      <div class="go-to-watch" v-if="purchaseId.includes(course(id).id)">
        <button class="main-btn">
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
    <div class="hidden-lg hidden-sm hidden-md hidden-xl">
      <div class="container-fluid">
        <div class="col-lg-12">
           <p class="white-txt fsz-16" v-html="course(id).description"></p>
        </div>
      </div>
    </div>
<!-- mobile descr -->   

<!-- 
<section id="player">
  <iframe :src=" course(id).video +  '?title=0&amp;byline=0&amp;portrait=0' " frameborder="0" allow="autoplay; fullscreen" allowfullscreen="allowfullscreen" class="vimeo__player"></iframe>
</section>
 -->



    <otsilki :flashbacks="course(id)" v-if="course(id).linkCourse" />
  </div>
</template>

<script>
import otsilki from "../components/otsilki.vue";
import { mapGetters, mapActions, mapState } from "vuex";
import Buypop from '../components/ui/Buypop.vue';

export default {
  components: { otsilki, Buypop },

  props: ["id"],
  data(){
    return{
      logAlert: false,
      chosenCourse: {}
    }
  },
  computed: {
    ...mapGetters({
      course: "courses/getSingleCourse",
      user: "login/getUser",
      purchaseId: "login/getPurchaseId"
    }),
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

      var widget = new cp.CloudPayments();

      widget.pay(
        "auth",
        {
          publicId: "pk_1ca6aec798da797a3092eea9157f7",
          description: "Покупка курса: «" + param.name + "»",
          amount: parseInt(param.price),
          currency: "RUB",
          accountId: this.user.user_email,
          skin: "mini",
          data: {
            myProp: "myProp value",
          },
        },
        {
          onSuccess: function (options) {
            let form = {
              user_id: this.user.id,
              course_id: id,
            };

            this.BUY_COURSE(form).then(() => {
              this.$router.replace("/lk");
            });
          },
          onFail: function (reason, options) {},
          onComplete: function (paymentResult, options) {},
        }
      );
    },
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
  height: 260px;
  bottom: -1px;
  background: linear-gradient(180deg, rgba(17, 17, 17, 0), #111);
  z-index: 1;
}

</style>