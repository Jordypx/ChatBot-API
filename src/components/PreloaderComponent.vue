<template>
  <transition>
    <div
      v-if="show"
      class="flex -ml-2 flex-col items-center justify-center absolute w-full h-full bg-white z-9999 ease-out duration-300"
    >
      <div class="mb-24">
        <h1 class="text-4xl font-bold text-blue-700">TEXTME</h1>
        <p class="text-center text-lg ml-4 mt-4 font-semibold font-sans">
          WELCOME...
        </p>
      </div>
    </div>
  </transition>

  <div>
    <!-- <chatbody/> -->
  </div>
</template>

<script>
// import chat from "../components/chat.vue"
// import chatbody from '../components/chatbody.vue'

export default {
  name: "PreloaderComponent",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 5000);
    },
  },

  components: {
    //  chatbody,
  },
};
</script>

<style scoped></style>
