<template>
  <div id="app" @click="clickOutside($event)">
    <Header @activateDrop="activateDrop" @click.stop="" />

    <dropdown
      :class="{ dropAc: lkMenu }"
      @click.stop=""
      @activateDrop="activateDrop"
      @deActivateDrop="deActivateDrop"
    />

    <transition name="slide" mode="out-in">
        <router-view></router-view>
    </transition>	

    <Footer />


                  <transition name="slide" mode="out-in">
                      <cookieAlert v-if="cAlert" @hideCookie="hideCookie" />
                  </transition>
  </div>
</template>

<script>
import "./assets/css/style.css";
import Header from "./components/ui/Header.vue";
import Footer from "./components/ui/Footer.vue";
import preloader from "./components/ui/preloader.vue";
import { mapState } from "vuex";
import dropdown from "./components/ui/dropdown.vue";
import cookieAlert from './components/ui/cookieAlert.vue'

export default {
  components: { Header, Footer, dropdown, cookieAlert },
  data() {
    return {
      lkMenu: false,
      cAlert: false
    };
  },
  methods: {
    hideCookie(){
        this.cAlert = false
    },
    activateDrop() {
      this.lkMenu = !this.lkMenu;
    },
    deActivateDrop() {
      this.lkMenu = false;
    },
    clickOutside(e){
      let drpdwn = document.querySelector('.dropdown'),
          ava = document.querySelector('.avatar')

      if(this.lkMenu){
        if(e.target == drpdwn || e.target == ava){
          console.log(e.target)
        }else{
          this.lkMenu = false;
        }
      }
    }
  },
  mounted() {
    this.cAlert = true
  }
};
</script>

<style>
.slide-leave-active {
  transition: opacity 0.3s ease;
  opacity: 0;
  animation: slide-out 0.3s ease-out forwards;
}
.slide-leave {
  opacity: 1;
  transform: translateX(0px);
}
.slide-enter-active {
  animation: slide-in 0.3s ease-out forwards;
  opacity: 1;
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(50px);
  }
}
@keyframes slide-in {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>

