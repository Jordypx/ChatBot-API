<template>
  <!-- Right-side -->

  <div class="right Hide" id="Chat">
    <div class="right-header w-full h-24 bg-gray-100 flex justify-between p-4">
      <div class="img-text flex justify-center">
        <div class="userimg">
          <img
            class="rounded-full h-16 w-16"
            src="../assets/jeffery-erhunse-Z9lbmEjyYjU-unsplash.jpg"
            alt=""
          />
        </div>
        <h4 class="font-medium leading-7 ml-3 text-2xl p-1.5 text-gray-600">
          Grace<br /><span class="text-lg text-gray-500">online</span>
        </h4>
      </div>

      <ul class="flex">
        <li class="flex text-sm list-none cursor-pointer ml-8"></li>
        <li class="flex text-sm list-none cursor-pointer ml-8">
          <img
            class="w-7 h-7 m-4"
            src="../assets/NicePng_magnifying-glass-png-no_659698.png"
            alt=""
          />
        </li>
        <li class="flex text-sm list-none cursor-pointer ml-8">
          <img class="w-7 text-gray-200" src="../assets/ellipsis.svg" alt="" />
        </li>
      </ul>
    </div>

    <!-- chat-box -->

    <div class="chatbox w-full">
      <div
        class="chat_text message my_message flex w-full"
        v-for="message in messages"
        :key="message.id"
      >
        <div class="message my_message flex w-full" v-if="message.id % 2 == 0">
          <p class="">{{ message.message }}</p>
        </div>

        <!-- <div class="talk-bubble tri-right left-top" v-if="message.id % 2 == 0">
                             <p>{{ message.message }}</p>
                     </div> -->

        <div class="message frnd_message flex w-full" v-else>
          <p class="">{{ messagem.message }}</p>
        </div>

        <!-- <div class="talk-bubble tri-right left-top" v-else>
                        <p>{{ message.message }}</p>
                  </div>
                   -->
      </div>
    </div>

    <!-- chat input -->
    <div
      class="input-chat flex w-full p-1 justify-around items-center bg-gray-100"
    >
      <div class="smile-img pl-9">
        <img
          class="w-11 cursor-pointer"
          src="../assets/emoticon-24-256.png"
          alt=""
        />
      </div>

      <div class="attach pl-9">
        <img
          class="w-11 cursor-pointer"
          src="../assets/attach-2-256.png"
          alt=""
        />
      </div>

      <form class="flex justify-center w-full" @submit.prevent="sendMessage()">
        <input
          v-model="messageContent"
          id="createMessage"
          class="text-input w-11/12 m-3 p-5 rounded-lg text-2xl"
          type="text"
          placeholder="Type a message"
        />

        <div>
          <img
            class="send-btn w-10 cursor-pointer"
            src="../assets/documentsend_104490.png"
            alt=""
            type="submit"
            @click="sendMessage()"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  name: "MessageBody",

  setup() {
    const messages = ref([]),
      messageContent = ref("");
    const MediaQuery = window.matchMedia("(min-width: 650px)");

    function sendMessage() {
      if (messageContent.value == "") return;

      createMessage(messageContent.value);
      getResponse(messageContent.value);
      messageContent.value = "";
    }

    function createMessage(message) {
      let id = 0;
      if (messages.value[messages.value.length - 1]) {
        id = messages.value[messages.value.length - 1].id + 1;
      }
      messages.value.push({
        id: id,
        message: message,
      });
    }

    async function getResponse(message) {
      const postData = {
        message: message,
      };
      const { data } = await axios.post("http://localhost:8000/chat", postData);
      const { response } = data;
      createMessage(response);
    }

    return {
      messages,
      messageContent,
      MediaQuery,
      sendMessage,
    };
  },
};
</script>
