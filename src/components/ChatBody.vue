<template>
  <div class="chat_container">
    <div class="left none">
      <div
        class="user-image-tall w-full h-22 p-2 bg-gray-100 flex justify-between items-center border-r-2"
      >
        <div
          class="user-image ml-1 w-14 rounded cursor-pointer overflow-hidden"
        >
          <img
            class="rounded-full h-14 w-full"
            src="../assets/2213426.jpg"
            alt="m"
          />
        </div>

        <ul class="flex mr-3 mt-1.5">
          <li class="flex text-sm list-none cursor-pointer ml-6">
            <img
              class="w-5 text-gray-200"
              src="../assets/scan-circle-outline_1.svg"
              alt=""
            />
          </li>
          <li class="flex text-sm list-none cursor-pointer ml-6">
            <img
              class="w-5 text-gray-200"
              src="../assets/plus-large.svg"
              alt=""
            />
          </li>
          <li class="flex text-sm list-none cursor-pointer ml-6">
            <img
              class="w-5 text-gray-200"
              src="../assets/ellipsis.svg"
              alt=""
            />
          </li>
        </ul>
      </div>

      <div class="relative w-full flex justify-center items-center">
        <div class="w-full flex justify-center items-center border-b-2">
          <input
            class="search-input w-full bg-gray-200 h-12 rounded-xl text-lg pl-16 m-4 outline-0 border-0"
            type="text"
            placeholder="Search or start new chat"
          />

          <div>
            <img
              class="w-6 absolute left-8 bottom-7"
              src="../assets/NicePng_magnifying-glass-png-no_659698.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="chatlist" id="cole" @click="handleTabletChange(MediaQuery)">
        <div
          class="flex w-full p-1 border-b-2 items-center cursor-pointer justify-around bg-gray-100"
        >
          <div class="imgbox rounded cursor-pointer overflow-hidden ml-3">
            <img
              class="rounded-full h-12 w-16"
              src="../assets/jeffery-erhunse-Z9lbmEjyYjU-unsplash.jpg"
              alt=""
            />
          </div>
          <div class="details w-full relative ml-6 mt-3">
            <div class="listhead flex justify-between mb-1">
              <h4 class="text-lg font-bold">Grace</h4>
              <p class="text-sm text-green-400 mr-2">11:47</p>
            </div>
            <div class="message_p flex justify-between">
              <p class="text-sm overflow-hidden text-ellipsis font-medium">
                how are you doing?
              </p>

              <b
                class="text-count bg-green-400 text-white flex justify-center items-center h-6 mb-2 p-2 text-sm text-center left-3 mr-2.5"
                >1</b
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right-side -->

    <div class="right Hide" id="Chat">
      <div
        class="right-header w-full h-20 bg-gray-100 flex justify-between p-3"
      >
        <div class="back_btn_" @click="GoBack()">
          <img src="../assets/back.png" alt="" />
        </div>
        <div class="img-text flex justify-center ml-9 mt-1.5">
          <div class="userimg mt-1">
            <img
              class="rounded-full h-10 w-10"
              src="../assets/jeffery-erhunse-Z9lbmEjyYjU-unsplash.jpg"
              alt=""
            />
          </div>
          <h4 class="font-medium leading-5 ml-3 mb-1 text-lg p-1 text-gray-600">
            Grace<br /><span class="text-sm text-gray-500">online</span>
          </h4>
        </div>

        <ul class="flex mt-2">
          <li class="flex text-sm list-none cursor-pointer ml-6"></li>
          <li class="magnify flex text-sm list-none cursor-pointer ml-6 mt-3.5">
            <img
              class="w-4 h-4"
              src="../assets/NicePng_magnifying-glass-png-no_659698.png"
              alt=""
            />
          </li>
          <li class="ellipsis flex text-sm list-none cursor-pointer ml-6">
            <img
              class="w-4 text-gray-200"
              src="../assets/ellipsis.svg"
              alt=""
            />
          </li>
        </ul>
      </div>

      <!-- chat-box -->

      <div class="chatbox w-full h-full">
        <div
          class="chat_text message flex gap-5 w-full"
          v-for="message in messages"
          :key="message.id"
        >
          <div
            class="message my_message dgreen-text flex w-full"
            v-if="message.id % 2 == 0"
          >
            <p class="">
              {{ message.message }}
            </p>

            <span class="">2:56</span>
          </div>

          <!-- <div class="talk-bubble tri-right left-top" v-if="message.id % 2 == 0">
                             <p>{{ message.message }}</p>
                     </div> -->

          <div class="message frnd_message dwhite-text flex w-full" v-else>
            <p class="">{{ message.message }} <br /></p>

            <span class="">2:58</span>
          </div>

          <!-- <div class="talk-bubble tri-right left-top" v-else>
                        <p>{{ message.message }}</p>
                  </div>
                   -->
        </div>
      </div>

      <!-- chat input -->
      <div class="input-chat flex w-full p-1 bg-gray-100">
        <!-- <div class="smile-img pl-3">
          <img
            class="w-6 cursor-pointer"
            src="../assets/emoticon-24-256.png"
            alt=""
          />
        </div>

        <div class="attach pl-3">
          <img
            class="w-6 cursor-pointer"
            src="../assets/attach-2-256.png"
            alt=""
          />
        </div> -->

        <form
          class="w-full p-4 flex gap-5 justify-center"
          @submit.prevent="sendMessage()"
        >
          <input
            v-model="messageContent"
            id="createMessage"
            class="text-input p-3 rounded-lg text-sm -mt-0.5 border-0"
            type="text"
            placeholder="Message..."
          />

          <div>
            <img
              class="send-btn w-8 cursor-pointer mt-2"
              src="../assets/documentsend_104490.png"
              alt=""
              type="submit"
              @click="sendMessage()"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  name: "ChatBody",

  setup() {
    const messages = ref([]),
      messageContent = ref("");
    const MediaQuery = window.matchMedia("(max-width: 640px)");

    function sendMessage() {
      if (messageContent.value == "") return;

      createMessage(messageContent.value);
      getResponse(messageContent.value);
      messageContent.value = "";
    }

    function GoBack() {
      document.querySelector(".Hide").style.display = "none";
      document.querySelector(".none").style.display = "block";
    }

    function handleTabletChange(e) {
      // Check if the media query is true
      if (e.matches) {
        // Then log the following message to the console
        document.querySelector(".Hide").style.display = "block";
        document.querySelector(".none").style.display = "none";
      }
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
      const { data } = await axios.post(
        "https://server-vc46.onrender.com/chat",
        postData
      );
      const { response } = data;
      createMessage(response);
    }

    return {
      messages,
      messageContent,
      MediaQuery,
      sendMessage,
      handleTabletChange,
      GoBack,
    };
  },
};
</script>
