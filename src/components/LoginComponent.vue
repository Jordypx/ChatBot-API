<template>
  <div
    v-if="state.username === '' || state.username === null"
    class="login-styles flex justify-center items-center mt-32 p-4"
  >
    <form @submit.prevent="login" class="Login bg-white p-10 h-72">
      <div class="mr-16 -mt-2">
        <h1 class="text-3xl font-bold mb-4">Login</h1>
        <label for="username" class="text-lg">Username</label>
        <input
          type="text"
          class="input-width p-3"
          v-model="inputUsername"
          placeholder="Enter your username..."
        />
        <!-- <input type="submit" value="Login"> -->

        <div class="flex gap-10 mt-10">
          <button class="btn-form" type="submit">LogIn</button>
          <a class="cursor-pointer" href="#"> Forgot Username? </a>
        </div>
      </div>
    </form>
  </div>

  <div v-else>
    <ChatComponent />
    <!-- <preloader/> -->
  </div>
</template>

<script>
// import db from './db'
import { reactive, ref } from "vue";
import ChatComponent from "./ChatComponent.vue";
// import chat from "../components/chat.vue"
// import preloader from '../components/preloader.vue'

export default {
  name: "LoginComponent",

  setup() {
    const inputUsername = ref("");

    const state = reactive({
      username: "",
      messages: [],
    });

    const login = () => {
      if (inputUsername.value != "" || inputUsername.value != null) {
        state.username = inputUsername.value;
        inputUsername.value = "";
      }
    };

    return {
      inputUsername,
      login,
      state,
    };
  },

  components: {
    //    chat,
    //  preloader,
    ChatComponent,
  },
};
</script>

<style></style>
