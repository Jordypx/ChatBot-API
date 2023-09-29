<template>
  <div>
    <PreloaderComponent />
  </div>

  <div>
    <ChatBody />
  </div>
</template>

<script>
import PreloaderComponent from "../components/PreloaderComponent.vue";
import ChatBody from "../components/ChatBody.vue";

export default {
  name: "ChatComponent",

  components: {
    PreloaderComponent,
    ChatBody,
  },
};
</script>

<style></style>
